const fs = require('fs');
   const path = require('path');
   require('dotenv').config();

   async function fetchRepos() {
     try {
       let allRepos = [];
       let page = 1;
       const perPage = 100;
       const token = process.env.VITE_GITHUB_TOKEN;

       if (!token) {
         throw new Error('GitHub token not found. Please set VITE_GITHUB_TOKEN in your .env file.');
       }

       console.log('Fetching GitHub repositories...');
       while (true) {
         const response = await fetch(
           `https://api.github.com/users/wabukowabuko/repos?sort=pushed&direction=desc&per_page=${perPage}&page=${page}`,
           {
             headers: {
               Authorization: `token ${token}`,
               Accept: 'application/vnd.github.v3+json',
             },
           }
         );

         if (!response.ok) {
           const errorText = await response.text();
           throw new Error(`GitHub API error: ${response.status} - ${response.statusText}. Details: ${errorText}`);
         }

         const data = await response.json();
         if (data.length === 0) break;

         const mappedRepos = data.map((repo) => ({
           id: repo.id,
           title: repo.name,
           description: repo.description || 'No description available.',
           tech: [repo.language || 'Unknown', ...(repo.topics || [])],
           image: `https://opengraph.githubassets.com/${repo.id}/wabukowabuko/${repo.name}`,
           githubUrl: repo.html_url,
           demoUrl: repo.homepage || '#',
           stars: repo.stargazers_count,
           isPrivate: repo.private,
         }));

         allRepos = [...allRepos, ...mappedRepos];
         page += 1;
       }

       // Save to src/data/repos.json
       const outputPath = path.join(__dirname, 'src', 'data', 'repos.json');
       fs.mkdirSync(path.dirname(outputPath), { recursive: true });
       fs.writeFileSync(outputPath, JSON.stringify(allRepos, null, 2));
       console.log(`Successfully saved ${allRepos.length} repositories to ${outputPath}`);
     } catch (error) {
       console.error('Error fetching GitHub repositories:', error.message);
       process.exit(1);
     }
   }

   fetchRepos();

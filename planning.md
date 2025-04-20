# Portfolio Planning

## Sections
1. **Home**: Hero section with name, tagline ("Computer Scientist building modern web solutions"), and a "View Projects" button.
2. **About**: Bio highlighting background, education, and passion for tech, with a headshot from `images`.
3. **Projects**: Grid of 3-5 projects with screenshots from `images`, descriptions, tech stack, and links.
4. **Skills**: Icons/list of skills (e.g., React.js, JavaScript, Bootstrap) using Bootstrap cards.
5. **Contact**: Links to GitHub, LinkedIn, email, and a resume download, styled with Bootstrap buttons.


## Projects
1. **Task Manager App**: A React app for task CRUD operations, styled with Bootstrap, screenshot in `images/task-manager.png`.
2. **Data Visualization Dashboard**: Displays Kenyan tech stats using react-chartjs-2, screenshot in `images/dashboard.png`.
3. **3D AI Model Viewer**: A react-three-fiber 3D neural network visualization, screenshot in `images/ai-model.png`.

## Design
- **Dark Mode (Default)**: Background `#212529`, text `#F8F9FA`, primary blue `#0D6EFD` for buttons/links.
- **Light Mode**: Background `#F8F9FA`, text `#212529`, same accents.
- **Components**:
  - Navbar: Bootstrap `navbar-dark`/`navbar-light`, links to all sections.
  - Home: `jumbotron` with headshot (`images/headshot.png`) and tagline.
  - Projects: `card` grid with screenshots from `images`.
  - Skills: `card` with skill icons (e.g., Devicons).
  - Contact: `btn` for GitHub, LinkedIn, email, resume.
  - Toggle: `btn` with sun/moon icons, uses Bootstrap’s `data-bs-theme`.
- **Responsive**: Bootstrap’s grid system for mobile/tablet/desktop.

## Images
- **Folder**: `images`
- **Files**:
  - `task-manager.png`: Task Manager screenshot (WebP, 500x300).
  - `dashboard.png`: Dashboard screenshot (WebP, 500x300).
  - `ai-model.png`: 3D AI model screenshot (WebP, 500x300).
  - `headshot.png`: Professional headshot (WebP, 200x200).
  - `react.svg`, `javascript.svg`, etc.: Skill icons from Devicons.

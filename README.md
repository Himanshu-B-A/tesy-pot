# 🎬 Netflix-Style Portfolio Website

A stunning, modern portfolio website inspired by Netflix's design language, featuring smooth animations, parallax scrolling effects, and a premium dark theme.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-FF0080?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- 🎬 **Cinematic Design**: Dark theme inspired by Netflix Careers page
- ⚡ **Smooth Animations**: Professional animations using Framer Motion
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI/UX**: Clean, minimalist design with excellent spacing
- 🚀 **Performance Optimized**: Fast loading and smooth interactions
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠 Tech Stack

- **Frontend**: React 18
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/himanshu-b-a/Profile_Website_Himanshu-B-A.git
cd Profile_Website_Himanshu-B-A
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Build and deploy:
```bash
npm run deploy
```

The site will be deployed to `https://yourusername.github.io/repository-name/`

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, role, and description
   - Replace social media links
   - Update resume link

2. **About Section** (`src/components/About.jsx`):
   - Replace profile image placeholder
   - Update bio and description
   - Modify stats (years, projects, etc.)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills and technologies
   - Update skill categories
   - Customize icons and colors

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update project images, descriptions
   - Add GitHub and live demo links

5. **Experience Section** (`src/components/Experience.jsx`):
   - Add your work experience and internships
   - Update company names, roles, and achievements
   - Modify timeline

6. **Education Section** (`src/components/Education.jsx`):
   - Update degree, institution, and grades
   - Add certifications
   - Modify highlights

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Replace social media links
   - Configure form submission (EmailJS, Formspree, etc.)

### Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  netflix: {
    red: '#E50914',      // Primary accent color
    black: '#141414',    // Main background
    darkGray: '#1a1a1a', // Section backgrounds
    gray: '#2a2a2a',     // Card backgrounds
    lightGray: '#b3b3b3',// Text color
  },
}
```

### Animation Settings

Modify animation timings in Framer Motion variants within each component:

```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }, // Adjust here
  },
};
```

## 📂 Project Structure

```
neww/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Projects.jsx     # Projects section
│   │   ├── Experience.jsx   # Experience timeline
│   │   ├── Education.jsx    # Education section
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design Principles

- **Cinematic Feel**: Dark backgrounds with red accents
- **Smooth Motion**: Subtle animations that enhance UX
- **Visual Hierarchy**: Clear content organization
- **Whitespace**: Generous spacing for readability
- **Responsiveness**: Mobile-first approach

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimization

- Lazy loading for images
- Code splitting with Vite
- Optimized animations with Framer Motion
- CSS purging with Tailwind

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Himanshu B A
- Email: your.email@example.com
- GitHub: [@himanshu-b-a](https://github.com/himanshu-b-a)
- LinkedIn: [himanshu-b-a](https://linkedin.com/in/himanshu-b-a)

---

Made with ❤️ and React

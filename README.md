# Rabiul Hossen - Frontend Developer Portfolio

A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/images/cover-image.png)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, Tailwind CSS, and TypeScript
- **Stunning Animations**: Smooth transitions and interactions using Framer Motion
- **Dark/Light Mode**: Seamless theme switching with persistent preference
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Static export for fast loading times
- **SEO Ready**: Meta tags, Open Graph, and structured data

## 🚀 Sections

1. **Hero**: Engaging landing with animated text and profile
2. **About**: Personal introduction with stats and timeline
3. **Tech Stack**: Skills and proficiency levels
4. **Services**: What I offer as a developer
5. **Projects**: Interactive showcase with filters and modals
6. **Contact**: Contact form with EmailJS integration

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [EmailJS](https://www.emailjs.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rabiulhossen/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service and email template
3. Update the credentials in `src/components/Contact.tsx`:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { ... },
     'YOUR_PUBLIC_KEY'
   )
   ```

### Personalization

- Update personal info in component files
- Replace images in `public/images/`
- Update resume PDF in `public/`
- Modify project data in `src/components/Projects.tsx`
- Update social links throughout the components

## 📜 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint check
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Image assets
│   └── *.pdf            # Resume files
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── Navbar.tsx   # Navigation
│       ├── Hero.tsx     # Landing section
│       ├── About.tsx    # About section
│       ├── TechStack.tsx # Skills
│       ├── Services.tsx # Services
│       ├── Projects.tsx # Portfolio
│       ├── Contact.tsx  # Contact form
│       ├── Footer.tsx   # Footer
│       └── ThemeProvider.tsx # Theme context
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      accent: { ... },
    }
  }
}
```

### Fonts

The portfolio uses Inter for body text and JetBrains Mono for code. Update in `globals.css` and `tailwind.config.js`.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Static Export (Recommended)

The portfolio is configured for static export. Build and deploy to any static hosting:

```bash
npm run build
# Output in 'out' folder
```

Deploy to:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

## 🤝 Connect

- **GitHub**: [rabiulhossen](https://github.com/rabiulhossen)
- **LinkedIn**: [rabiulhossen](https://linkedin.com/in/rabiulhossen)
- **Twitter**: [@RabiulH46448368](https://twitter.com/RabiulH46448368)

---

Made with ❤️ by Rabiul Hossen

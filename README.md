# Webbly: Modern Web Development Services

Webbly is a sleek, one-page website showcasing web development and design services. Built with cutting-edge technologies for speed, responsiveness, and accessibility.

## Features

- **Dark/Light Theme Toggle**: Seamless switch between themes using a manual class-based system.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions.
- **Interactive Contact Form**: Functional form with validation for user inquiries.
- **Modern UI**: Clean interface with Tailwind CSS for styling.
- **Fast Performance**: Optimized build with Vite for quick loading.

## Technologies Used

- **React**: Component-based UI library.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework with dark mode.
- **Framer Motion**: Animation library for smooth transitions.
- **React Icons**: Comprehensive icon library (replacing Lucide React).

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/WailSolaiman/webbly.git
cd webbly
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
webbly/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactMethods.jsx
│   │   ├── footer/
│   │   │   ├── FooterBottom.jsx
│   │   │   ├── FooterBrand.jsx
│   │   │   ├── FooterLinkSection.jsx
│   │   │   └── FooterNewsletter.jsx
│   │   ├── testimonials/
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── TestimonialTrustBadges.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Deployment

This project is configured for easy deployment on Vercel. Push changes to the master branch, and Vercel will auto-deploy.

Deployed version: [https://webbly-ws.vercel.app](https://webbly-ws.vercel.app)

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

---

**Developer**: Wail Solaiman  
**Developed with help from**: VS-Code Cline (AI-assisted coding)

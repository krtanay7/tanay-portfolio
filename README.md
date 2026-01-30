# Portfolio Website

A modern, high-performance personal portfolio built with Next.js to showcase projects, skills, and experience. The website is designed with a clean UI, smooth animations, and strong SEO foundations. It is fully responsive, production-ready, and easy to customize.

---

## Live Preview

https://your-portfolio-url.vercel.app  
(Replace this with your deployed URL)

---

## Features

- Built with Next.js for performance and SEO
- Fully responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Smooth UI animations using Framer Motion
- Contact form powered by Nodemailer
- Automatic generation of sitemap.xml and robots.txt
- Light and dark theme support
- Pre-made themes with easy customization
- Clean and scalable project structure

---

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Email Service: Nodemailer
- Deployment: Vercel

---

## Project Structure

src/
├── app/ Application routes and pages
├── components/ Reusable UI components
├── data/ Site metadata and configuration
├── scripts/ SEO and sitemap generation scripts
├── styles/ Global styles and theme files
└── public/ Static assets


---

## Theme Customization

Pre-made themes are available in the `theme-examples.css` file.

### Using a Pre-made Theme

1. Copy a theme from `theme-examples.css`
2. Paste it into `globals.css`
3. Save and restart the development server

### Notes

- CSS variables only accept HSL values separated by spaces
- Animated logo colors must be hard-coded

You can also create a custom theme by editing CSS variables in `globals.css`.

---

## Nodemailer Setup

The contact form uses Nodemailer and runs securely on the server using Next.js API routes.

### Create a Gmail App Password

1. Open Google Account settings
2. Go to Security
3. Enable 2-Step Verification
4. Open App Passwords
5. Create a new app (for example: portfolio-nodemailer)
6. Copy the generated password

### Environment Variables

Create a `.env.local` file in the root directory:

NODEMAILER_USER=your_email@gmail.com

NODEMAILER_PASS=your_app_password

Do not commit environment variables to GitHub.

---

## Security Notes

- Never expose Nodemailer credentials on the client
- Always use Next.js API routes for email handling
- Environment variables must remain server-side
- Update Google site verification in `src/data/siteMetaData.mjs`

---

## SEO and Sitemap

- Sitemap and robots files are generated automatically
- Generated using `src/scripts/generateSitemap.mjs`
- Dynamic routes such as `[slug]` and `[id]` are excluded
- Generate manually using:


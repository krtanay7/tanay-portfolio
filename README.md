# Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

A modern, high-performance personal portfolio built with **Next.js** to showcase projects, skills, and experience. The website is designed with a clean UI, smooth animations, and strong SEO foundations. It is fully responsive, production-ready, and easy to customize.

---

## Live Preview

**[https://your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)**  
*(Replace this with your deployed URL)*

---

## Features

- **High Performance**: Built with Next.js for optimal speed and SEO.
- **Responsive Design**: Fully responsive UI using Tailwind CSS.
- **Type Safety**: Developed with TypeScript for robust code.
- **Animations**: Smooth UI transitions using Framer Motion.
- **Contact Form**: Functional contact form powered by Nodemailer.
- **SEO Optimized**: Automatic generation of `sitemap.xml` and `robots.txt`.
- **Dark/Light Mode**: Built-in theme support.
- **Theming**: Pre-made themes with easy customization options.
- **Clean Architecture**: Scalable and organized project structure.

---

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: Nodemailer
- **Deployment**: Vercel

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Nodemailer credentials (see Nodemailer Setup).

4. **Run the development server:**
   ```bash
   pnpm start
   ```

5. **Open your browser:**
   Navigate to http://localhost:3000 to see the application running.

---

## Project Structure

```bash
src/
├── app/             # Application routes and pages (Next.js App Router)
├── components/      # Reusable UI components
├── data/            # Site metadata and configuration
├── scripts/         # SEO and sitemap generation scripts
├── styles/          # Global styles and theme files
└── public/          # Static assets (images, icons, etc.)
```

---

## Theme Customization

Pre-made themes are available in the `theme-examples.css` file.

### Using a Pre-made Theme

1. Copy a theme configuration from `theme-examples.css`.
2. Paste it into `src/styles/globals.css` (or wherever your global styles are located).
3. Save and restart the development server.

### Notes

- CSS variables only accept **HSL values** separated by spaces (e.g., `220 14% 96%`).
- Animated logo colors must be hard-coded in the component if not using CSS variables.

You can also create a custom theme by editing the CSS variables in `globals.css`.

---

## Nodemailer Setup

The contact form uses Nodemailer and runs securely on the server using Next.js API routes.

### Create a Gmail App Password

1. Open your Google Account settings.
2. Go to **Security**.
3. Enable **2-Step Verification**.
4. Search for **App Passwords**.
5. Create a new app (name it something like `portfolio-nodemailer`).
6. Copy the generated 16-character password.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NODEMAILER_USER=your_email@gmail.com
NODEMAILER_PASS=your_app_password
```

> **Note:** Do not commit `.env.local` to GitHub. It is already included in `.gitignore`.

---

## Security Notes

- **Never** expose Nodemailer credentials on the client-side.
- Always use Next.js **API routes** or Server Actions for email handling.
- Environment variables must remain server-side.
- Update Google site verification in `src/data/siteMetaData.mjs`.

---

## SEO and Sitemap

- Sitemap and robots files are generated automatically during the build process.
- The script is located at `src/scripts/generateSitemap.mjs`.
- Dynamic routes such as `[slug]` and `[id]` are currently excluded from automatic generation.

To generate the sitemap manually, run:

```bash
node src/scripts/generateSitemap.mjs
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## License

This project is licensed under the MIT License.  
Copyright (c) 2026 Kr Tanay. All rights reserved.


import { defineConfig } from "vite";

import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true, // Fixed your small typo here!

    // 1. Force the production build to look into your src/templates folder
    rollupOptions: {
      input: ["./src/templates/*.{html,njk,json}"],
    },
  },

  server: {
    port: 5000,
    host: "localhost",
  },

  plugins: [
    vituum({
      pages: {
        dir: "./src/templates",
      },
    }),
    nunjucks({
      // Pass global variables to your templates (like g in Flask)
      root: "./src/templates",
      globals: {
        site_title: "My Flask-like Vite App",
        name: "DyA - Teams",
        social: {
          Github: "LetnanGM",
          Instagram: "@syafiqueue",
        },

        email: "letnan0gamedev@gmail.com",
        companyName: "DyA",
        cprojects: 15,
        exp: 3,

        /**
         * here is the mock data of project
         */
        mock_data_project: [
          {
            thumb_image: "https://placeholder.com",
            name: "E-Commerce API REST",
            shortdesc:
              "A robust, scalable backend built with Node.js, Express, and PostgreSQL featuring JWT authentication and Stripe integration.",
            techstack: ["Node.js", "PostgreSQL"],
            linkview: "#HEREISLINk",
          },
          {
            thumb_image: "https://placeholder.com",
            name: "Task Management Service",
            shortdesc:
              "A microservice architecture application running on Docker, utilizing Redis queues for processing background email notifications.",
            techstack: ["Python", "Redis"],
            linkview: "#HEREISLINK",
          },
          {
            thumb_image: "https://placeholder.com",
            name: "Real-time Analytics Dashboard",
            shortdesc:
              "An internal dashboard utilizing WebSockets to stream server health metrics and incoming server requests in real-time.",
            techstack: ["Go", "WebSockets"],
            linkview: "#HEREISLINK",
          },
        ],

        /**
         * here is the mock data of the team.
         */
        mock_data_team: [
          {
            status: true,
            profil_img: "src/assets/dev-2.webp",
            name: "Muhammad Faiz Al-khalifi",
            peran: "Junior WebDev & Beginner Dev",
            shortdesc: "Fokus pada dampak sosial dan kolaborasi",
            link: {
              github: "https://github.com/alkhalififaiz75-dot",
              linkedin: "#",
              instagram: "https://instagram.com/xion63957",
            },
          },
          {
            status: true,
            profil_img: "src/assets/dev-1.webp",
            name: "Syafiq Aryasofa Pangestu",
            peran: "CEO & Founder of DyA",
            shortdesc:
              "junior high student from Indonesia 🇮🇩, building backend things one commit at a time.",
            link: {
              github: "https://github.com/LetnanGM",
              linkedin: "#",
              instagram: "https://instagram.com/syafiqueue",
            },
          },
          {
            status: true,
            profil_img: "src/assets/cp-admin-ijj.webp",
            name: "Rais Dirja Rahmadani",
            peran: "Cyber Security & Founder of IJJ",
            shortdesc: "There's no System is Safe. CyberSec from Indonesia",
            link: {
              github: "#",
              linkedin: "#",
              instagram: "https://instagram.com/iss.notsefuh",
            },
          },
        ],
        /* end of data declaration */
      },
    }),
  ],
});

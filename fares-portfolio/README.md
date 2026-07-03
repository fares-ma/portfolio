# Fares Mohamed — Backend .NET Developer Portfolio

Welcome to the source code repository of my personal portfolio. This is a high-end, premium developer portfolio website designed to showcase my experience, projects, skills, and certifications as a Backend .NET Developer. It is built using **Next.js**, **GSAP**, and **Framer Motion** to deliver a cutting-edge interactive user experience.

---

## ✨ Features & Interactive Details

### 🎨 Visual Aesthetics & Custom Animations
* **GSAP Typewriter Effect:** Upon loading, my name and job description in the Hero section are revealed via an advanced staggered typewriter character animation.
* **Animated Handwritten SVG Signature (2026):** The custom signature on the left is rendered as a clean SVG path that realistically draws itself stroke-by-stroke when the page loads, using `GSAP` stroke-dashoffset keyframes, reflecting an authentic handwritten style with the year 2026.
* **Pulsating Energy Aura Mouse Cursor:** A custom cursor consisting of a sharp tracking core dot and a larger, soft-blurred radial gradient aura (Blue) that dynamically pulses in a breathing keyframe loop and stretches behind cursor movement.
* **Scroll-Linked Experiences:** Under the **Experience** section, each career entry slides and fades into view one-by-one dynamically as you scroll down, backed by GSAP `ScrollTrigger` bindings.

### 📱 Responsive & Floating Navigation
* **Persistent Fixed Header:** The main Header (including links, logo, and menu) remains permanently fixed at the top of the screen as you scroll, ensuring easy navigation access at all times.
* **Floating Hamburger Icon:** The round, glassmorphic Hamburger Menu button on the top-right remains permanently accessible along with the header.
* **Mobile Ready:** The layout is fully responsive, looking premium on both desktop viewports and simulated mobile devices.

### 💼 Professional Assets & Sections
* **Services:** Detailed overview of backend development specialties, ASP.NET Web APIs, Databases, Clean Code, and System Architectures.
* **Experience & Certifications:** Structured timeline displaying professional internships (Link Development, route, FODWA, DEPI), Competitive Programming achievements, and link-tracked certificates.
* **Projects Grid:** Showcases production-ready repositories and features (Clean Architecture, SQL Server optimization, Generic Repository patterns) with live links.
* **Resume Download:** Direct integration allowing visitors to download my verified CV (`cv.pdf`) directly from the Hero section.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15+ (App Router)
* **Styling:** Tailwind CSS (Vanilla configuration)
* **Animation Suite:**
  * GSAP (GreenSock Animation Platform) + ScrollTrigger
  * Framer Motion (for Spring-based physics custom cursor)
* **Icons:** Lucide React & custom SVG packages

---

## 🚀 Getting Started

To run the development server locally:

```bash
# Navigate to the portfolio folder
cd fares-portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

### 🏗️ Production Build

To build the optimized static production bundle:

```bash
npm run build
```

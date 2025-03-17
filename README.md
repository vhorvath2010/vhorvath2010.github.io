## 📚 Portfolio: Vincent Horvath

Welcome to my portfolio site.

## 🎨 Tech Stack

- [**Astro**](https://astro.build/) - Static Site Generator
- [**React**](https://reactjs.org/) - Component-Based UI
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-First Styling
- [**Lucide React**](https://lucide.dev/) - SVG Icons
- [**TypeScript**](https://www.typescriptlang.org/) - Type Safety & Enhanced DX

## 🗂️ Project Structure

To maintain clarity and scalability, we organize the project using a **libs
system**. This ensures reusability and a modular architecture.

```
├── src/
│   ├── layouts/           # Base layouts such as the **MainLayout** and **SEO meta configurations**.
│   ├── libs/
│   │   ├── ui/             # All components, blocks, modules - whole structure of the reusable elements that you can use in your project.
│   ├── pages/             # Astro pages (each file maps to a route)
│   ├── static/            # All static assets - images, icons, fonts, etc.
├── public/                # Public assets (served as-is)
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
```

### ⚡️ Why like this?

**Astro.build** is a modern front-end framework that allows you to build faster,
optimized websites. It's compatible with React, which is a popular library for
building user interfaces.

**Tailwind** -A utility-first approach ensures rapid UI development without
writing excessive custom CSS.

## 🏗️ Key Directories Explained

### `/src/layouts`

Houses base layouts such as the **MainLayout** and **SEO meta configurations**.

### `/src/ui`

All components, blocks, modules - whole structure of the reusable elements that
you can use in your project.

### `/src/pages`

Astro pages that **automatically generate routes** without the need for
additional configurations.

### `/src/libs/static`

All static assets - images, icons, fonts, etc.

also images and icons are setup with typescript (examples you can find in above
section)

## 🧞 Commands

#### All commands are run from the root of the project, from a terminal:

| Command                   | npm Command               | yarn Command           | Action                                           |
| :------------------------ | :------------------------ | :--------------------- | :----------------------------------------------- |
| `npm install`             | `npm install`             | `yarn install`         | Installs dependencies                            |
| `npm run dev`             | `npm run dev`             | `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | `npm run build`           | `yarn build`           | Build your production site to `./dist/`          |
| `npm run preview`         | `npm run preview`         | `yarn preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | `npm run astro ...`       | `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | `npm run astro -- --help` | `yarn astro -- --help` | Get help using the Astro CLI                     |

## 🧞 Authors

- Edits by Vincent Horvath
- Original by [@codexcode](https://www.codexcode.store)

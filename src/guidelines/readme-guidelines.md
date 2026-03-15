# README Guidelines

**Category:** Development Guidelines  
**Domain:** Documentation Standards  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Status:** Active  
**Purpose:** Define standards for writing effective README files optimized for human readability and AI comprehension

---

## Overview

A README is the entry point to understanding a project. It must provide immediate context, clear instructions, and comprehensive orientation for both humans and AI agents (GitHub Copilot, Cursor, etc.).

**Core Principles:**
1. **Contextual Independence** - Each section stands alone
2. **Executable Examples** - All code snippets are runnable
3. **Visual Accessibility** - Diagrams have text descriptions
4. **AI Optimization** - Structured for chunk-based parsing

**AI Agent Note:** This README guideline demonstrates best practices for structuring documentation that AI can parse effectively. Each H2 section is self-contained.

---

## README File Structure

### Required File Location

**Primary README:** `/README.md` (project root)

**Additional READMEs (optional):**
- `/docs/README.md` - Documentation overview
- `/components/README.md` - Component library guide
- `/api/README.md` - API documentation overview

**Why root?** The README is the first file developers and AI agents look for when entering a repository.

---

## Required Sections

### 1. Project Anchor (Header)

**Purpose:** Immediately communicate the project's role and directives.

**Pattern:**
```markdown
# Project Name

**Tagline:** One-sentence description of what the project does.

**Role:** [Type of project - Web App | Library | CLI Tool | API | etc.]

**Status:** [Production | Beta | Alpha | Experimental | Deprecated]

---

## Quick Links

- [Documentation](./docs/)
- [Live Demo](https://example.com)
- [Changelog](./CHANGELOG.md)
- [Contributing](./CONTRIBUTING.md)
```

**Example:**
```markdown
# Handcrafted Wines

**Tagline:** Family-owned boutique wine farm website with hand-drawn aesthetic.

**Role:** React + Tailwind CSS web application

**Status:** Active Development

---

## Quick Links

- [Guidelines](./Guidelines.md)
- [Design Tokens](./guidelines/design-tokens/)
- [Component Library](./components/)
- [Live Demo](https://handcraftedwines.example.com)
```

**AI Agent Note:** The header section provides essential context in the first 100 tokens, allowing AI to understand project scope immediately.

---

### 2. Table of Contents (For Long READMEs)

**Rule:** Include ToC if README exceeds 300 lines or 10 major sections.

**Pattern:**
```markdown
## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
```

**Why:** Enables quick navigation for humans and provides structure overview for AI parsing.

---

### 3. Overview / About

**Purpose:** Explain what the project does, why it exists, and who it's for.

**Pattern:**
```markdown
## Overview

[Project Name] is a [type] that [primary function]. It solves [problem] by [solution approach].

**Key Features:**
- Feature 1 with specific benefit
- Feature 2 with specific benefit
- Feature 3 with specific benefit

**Use Cases:**
- Use case 1: [Description]
- Use case 2: [Description]

**Target Audience:**
- Developers building [specific type of apps]
- Teams needing [specific capability]
```

**Example:**
```markdown
## Overview

Handcrafted Wines is a React-based web application for a family-owned boutique wine farm in Paarl, South Africa. It provides an immersive hand-drawn aesthetic that reflects the artisanal nature of winemaking.

**Key Features:**
- Hand-drawn design system with organic SVG borders and decorative elements
- E-commerce functionality for wines, spirits, and artisan cheese
- Dark/light mode with WordPress-aligned CSS variables
- WCAG 2.1 AA accessibility compliance

**Use Cases:**
- Wine farm wanting a distinctive brand presence online
- E-commerce site requiring custom hand-crafted aesthetic
- Design system reference for organic, asymmetric design patterns

**Target Audience:**
- Front-end developers learning React + Tailwind CSS
- Designers exploring hand-drawn digital aesthetics
- Wine industry businesses seeking unique web presence
```

---

### 4. Prerequisites

**Purpose:** Explicitly state what's required before installation.

**Pattern:**
```markdown
## Prerequisites

**Required:**
- [Tool] [version] - [Why needed]
- [Tool] [version] - [Why needed]

**Optional:**
- [Tool] [version] - [For optional feature]

**System Requirements:**
- OS: [Supported operating systems]
- RAM: [Minimum memory]
- Disk: [Storage space needed]
```

**Example:**
```markdown
## Prerequisites

**Required:**
- Node.js 18+ - JavaScript runtime for development and build
- npm 9+ or Yarn 1.22+ - Package manager for dependencies
- Git - Version control for cloning repository

**Optional:**
- Docker 20+ - For containerized development environment
- VS Code - Recommended editor with extensions

**System Requirements:**
- OS: macOS, Linux, or Windows 10+
- RAM: 4GB minimum, 8GB recommended
- Disk: 500MB for dependencies
```

**AI Agent Note:** Prerequisites are parsed to validate if the development environment can support the project before proceeding with installation.

---

### 5. Installation

**Purpose:** Provide complete, executable steps to install the project.

**Pattern:**
```markdown
## Installation

### Option 1: Standard Installation (Recommended)

**Step 1: Clone the repository**
\`\`\`bash
git clone https://github.com/username/project.git
cd project
\`\`\`

**Step 2: Install dependencies**
\`\`\`bash
npm install
\`\`\`

**Step 3: Configure environment**
\`\`\`bash
cp .env.example .env
# Edit .env with your configuration
\`\`\`

**Step 4: Start development server**
\`\`\`bash
npm run dev
\`\`\`

**Expected Output:**
\`\`\`
> vite dev
  VITE ready in 523 ms
  ➜  Local:   http://localhost:5173/
\`\`\`

**Success Indicator:** Browser opens to `http://localhost:5173/` showing the homepage.

### Option 2: Docker Installation (Alternative)

\`\`\`bash
docker-compose up -d
\`\`\`

**Expected Output:**
\`\`\`
Creating network "project_default"
Creating project_web_1 ... done
\`\`\`

**Access:** Navigate to `http://localhost:3000`
```

**AI Agent Note:** Installation steps are numbered and include expected outputs, allowing AI to verify successful execution at each stage.

---

### 6. Quick Start

**Purpose:** Get users running the most common task in under 2 minutes.

**Pattern:**
```markdown
## Quick Start

**Goal:** [What users will accomplish in this quick start]

**Time:** ~[X] minutes

### Fastest Path to [Result]

\`\`\`bash
# Clone and install
git clone https://github.com/username/project.git && cd project && npm install

# Run development server
npm run dev
\`\`\`

**Next Steps:**
1. Open `http://localhost:5173/` in your browser
2. Edit `src/App.tsx` to see hot reload
3. Read [Full Documentation](./docs/) for advanced features
```

**Example:**
```markdown
## Quick Start

**Goal:** See the Handcrafted Wines site running locally with hot reload.

**Time:** ~3 minutes

### Fastest Path to Development

\`\`\`bash
# Clone and install
git clone https://github.com/winery/handcrafted-wines.git
cd handcrafted-wines
npm install

# Run development server
npm run dev
\`\`\`

**Next Steps:**
1. Open `http://localhost:5173/` - Homepage loads
2. Edit `/pages/company/Home.tsx` - See changes instantly
3. Toggle dark mode - Click moon icon in header
4. Read [Guidelines](./Guidelines.md) for design system details
```

**Why Quick Start is Critical:**
- Reduces time-to-value for new users
- Provides immediate success experience
- AI agents can validate setup quickly

---

### 7. Usage / Examples

**Purpose:** Show how to use the project with real, executable examples.

**Pattern:**
```markdown
## Usage

### Basic Usage

[Description of basic usage scenario]

\`\`\`language
[Complete, runnable code example]
\`\`\`

**Expected Output:**
\`\`\`
[Actual output from running the code]
\`\`\`

### Advanced Usage

[Description of advanced scenario]

\`\`\`language
[Complete, runnable code example with comments]
\`\`\`

### Common Use Cases

#### Use Case 1: [Scenario]
\`\`\`language
[Code example]
\`\`\`

#### Use Case 2: [Scenario]
\`\`\`language
[Code example]
\`\`\`
```

**Example:**
```markdown
## Usage

### Creating a New Page

**Scenario:** Add a new "About Our Winemaker" page to the site.

**Step 1: Create the page component**
\`\`\`tsx
// /pages/company/AboutWinemaker.tsx
import { Layout } from '../../components/layout/Layout';
import { Hero } from '../../components/sections/Hero';

export const AboutWinemaker: React.FC = () => {
  return (
    <Layout>
      <Hero
        title="Meet Our Winemaker"
        subtitle="Fifth-generation vintner with a passion for Paarl terroir"
        image="/assets/winemaker.jpg"
      />
      {/* Additional content */}
    </Layout>
  );
};
\`\`\`

**Step 2: Add route**
\`\`\`tsx
// /routes.tsx
import { AboutWinemaker } from './pages/company/AboutWinemaker';

export const router = createBrowserRouter([
  { path: '/about/winemaker', Component: AboutWinemaker },
  // ... other routes
]);
\`\`\`

**Step 3: Test**
\`\`\`bash
npm run dev
# Navigate to http://localhost:5173/about/winemaker
\`\`\`

**Expected Result:** New page renders with hero section and hand-drawn aesthetic.
```

**AI Agent Note:** Usage examples include complete code with imports, making them directly executable by AI code generation tools.

---

### 8. Configuration

**Purpose:** Document all configuration options with defaults and examples.

**Pattern:**
```markdown
## Configuration

### Environment Variables

**File:** `.env` (copy from `.env.example`)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `API_URL` | Yes | - | Backend API endpoint URL |
| `PORT` | No | `3000` | Development server port |
| `NODE_ENV` | No | `development` | Environment mode |

**Example `.env`:**
\`\`\`bash
API_URL=https://api.example.com
PORT=5173
NODE_ENV=development
\`\`\`

### Configuration Files

**`vite.config.ts`** - Vite bundler configuration
\`\`\`typescript
export default defineConfig({
  server: { port: 5173 },
  plugins: [react()],
});
\`\`\`

**`tailwind.config.js`** - Tailwind CSS customization
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        plum: '#5a2d3b',
      },
    },
  },
};
\`\`\`
```

---

### 9. Repository Map

**Purpose:** Provide a visual guide to repository structure.

**Pattern:**
```markdown
## Repository Map

\`\`\`
/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── common/      # Shared UI elements (Button, Logo)
│   │   ├── sections/    # Page sections (Hero, Newsletter)
│   │   └── shop/        # E-commerce components
│   ├── pages/           # Route-level page components
│   │   ├── company/     # Corporate pages (About, History)
│   │   ├── shop/        # Shop pages (Cart, Checkout)
│   │   └── experiences/ # Experience pages (Tastings, Tours)
│   ├── data/            # Static content and mock data
│   ├── styles/          # Global CSS and theme files
│   └── App.tsx          # Root application component
├── public/              # Static assets (images, SVGs)
├── guidelines/          # Project documentation
│   ├── design-tokens/   # Design system tokens
│   └── accessibility/   # WCAG compliance docs
├── docs/                # Additional documentation
├── tests/               # Test files
└── README.md            # This file
\`\`\`

**Key Directories:**

- **`/components/`** - All React components organized by type (common, layout, sections, shop)
- **`/pages/`** - Route components that compose sections into full pages
- **`/data/`** - Static content, product data, and mock API responses
- **`/styles/`** - Global CSS, design tokens, theme definitions
- **`/guidelines/`** - Comprehensive project guidelines (45+ files)
```

**AI Agent Note:** The repository map provides structural context, allowing AI to locate relevant files when generating code or documentation.

---

### 10. Scripts and Commands

**Purpose:** Document all available npm/yarn scripts with usage examples.

**Pattern:**
```markdown
## Scripts

### Development

\`\`\`bash
npm run dev
\`\`\`
Start development server with hot reload at `http://localhost:5173/`

### Build

\`\`\`bash
npm run build
\`\`\`
Create production build in `/dist` directory

### Preview

\`\`\`bash
npm run preview
\`\`\`
Preview production build locally

### Linting

\`\`\`bash
npm run lint
\`\`\`
Run ESLint to check code quality

\`\`\`bash
npm run lint:fix
\`\`\`
Auto-fix linting errors

### Testing

\`\`\`bash
npm run test
\`\`\`
Run all tests with Vitest

\`\`\`bash
npm run test:watch
\`\`\`
Run tests in watch mode

### Type Checking

\`\`\`bash
npm run typecheck
\`\`\`
Run TypeScript compiler for type validation
```

---

### 11. Troubleshooting

**Purpose:** Anticipate and document common issues with solutions.

**Pattern:**
```markdown
## Troubleshooting

### Issue: [Error message or symptom]

**Symptoms:**
- Specific error text
- What the user sees or experiences

**Cause:**
[Root cause explanation]

**Solution:**
1. Step-by-step fix
2. With complete commands
3. And expected results

**Verification:**
[How to confirm the issue is resolved]

---

### Issue: Port already in use

**Symptoms:**
\`\`\`
Error: listen EADDRINUSE: address already in use :::5173
\`\`\`

**Cause:**
Another process is using port 5173 (common with Vite dev servers).

**Solution:**

**Option 1: Kill the existing process**
\`\`\`bash
# Find process using port 5173
lsof -i :5173

# Kill the process (replace PID with actual process ID)
kill -9 [PID]
\`\`\`

**Option 2: Use a different port**
\`\`\`bash
# .env
PORT=5174
\`\`\`

**Verification:**
\`\`\`bash
npm run dev
# Should start on port 5174 without errors
\`\`\`
```

---

### 12. Contributing (If Open Source)

**Purpose:** Guide contributors on how to participate.

**Pattern:**
```markdown
## Contributing

We welcome contributions! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/my-feature`
3. **Make your changes** following our [Code Style Guide](./CONTRIBUTING.md)
4. **Write tests** for new functionality
5. **Commit with clear messages:** `git commit -m "feat: Add wine age verification"`
6. **Push to your fork:** `git push origin feature/my-feature`
7. **Open a Pull Request** with description of changes

### Code Style

- Follow existing patterns in the codebase
- Use TypeScript for all new files
- Run `npm run lint` before committing
- Write JSDoc comments for all exported functions

### Pull Request Guidelines

- Reference related issues: `Fixes #123`
- Provide clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass

**Full Guidelines:** See [CONTRIBUTING.md](./CONTRIBUTING.md)
```

---

### 13. License

**Purpose:** Clearly state the project's license.

**Pattern:**
```markdown
## License

This project is licensed under the [MIT License](./LICENSE).

**Summary:** You are free to use, copy, modify, and distribute this software with attribution.

**Full License:** See [LICENSE](./LICENSE) file for complete terms.
```

---

### 14. Credits and Acknowledgments

**Purpose:** Recognize contributors and dependencies.

**Pattern:**
```markdown
## Credits

**Created by:** [Your Name/Organization]

**Contributors:**
- [@username](https://github.com/username) - Feature development
- [@username2](https://github.com/username2) - Design system

**Built With:**
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool

**Special Thanks:**
- [Organization/Person] for [contribution]
```

---

## Visual Content Standards

### Diagrams and Architecture

**Rule:** All diagrams must have detailed text descriptions for AI comprehension.

**Pattern:**
```markdown
![System architecture diagram](./docs/diagrams/architecture.png)

**Diagram Description:**

The application architecture consists of three layers:

1. **Presentation Layer (React):**
   - Header: Navigation, logo, theme toggle
   - Main: Router rendering page components
   - Footer: Links, newsletter signup

2. **Data Layer:**
   - `/data/*.ts` files: Static content and product data
   - Context API: Global state (cart, theme, auth)

3. **External Services:**
   - Supabase: User authentication and database
   - Stripe: Payment processing
   - Cloudinary: Image hosting and optimization

**Data Flow:**
1. User interacts with React components
2. Components read from Context or `/data/` files
3. Actions trigger API calls to external services
4. Responses update Context, triggering re-renders
```

**Why Text Descriptions Matter:**
- AI models cannot "see" images
- Screen readers need text alternatives
- Text is searchable and parseable

### Screenshots

**Rule:** Include alt text and context for all screenshots.

**Pattern:**
```markdown
![Homepage showing hero section with hand-drawn border and wine bottle illustration](./docs/screenshots/homepage.png)

**Screenshot Details:**
- **Page:** Homepage (`/`)
- **Viewport:** Desktop (1440px)
- **Theme:** Light mode
- **Features Shown:**
  - Hero section with organic border radius
  - Hand-drawn wine bottle illustration
  - Dark mode toggle in header
  - Age verification modal overlay
```

---

## Contextual Independence

### Self-Contained Sections

**Rule:** Each major section must be understandable without reading previous sections.

**Pattern for Self-Contained Installation Section:**
```markdown
## Installation

This section explains how to install Handcrafted Wines locally for development.

**Prerequisites:** Node.js 18+, npm 9+, Git

**Steps:**

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/winery/handcrafted-wines.git
   cd handcrafted-wines
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
   
   This installs React, Tailwind CSS, Vite, and all required packages.

3. **Configure environment:**
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   
   Edit `.env` to add your configuration (optional for local development).

4. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   **Expected Output:**
   \`\`\`
   VITE ready in 523 ms
   ➜  Local:   http://localhost:5173/
   \`\`\`

**Verification:** Open `http://localhost:5173/` in your browser. You should see the Handcrafted Wines homepage.

**Next Steps:** See [Usage](#usage) for creating new pages and components.
```

**AI Agent Note:** Self-contained sections include their own context, prerequisites, and expected outcomes, allowing AI to parse them independently.

---

## README for Different Project Types

### Web Application README

**Focus:**
- How to run locally
- Deployment instructions
- Environment configuration
- Browser support

**Example Template:**
```markdown
# [App Name]

Web application for [purpose].

## Quick Start
[Installation steps]

## Deployment
[Deployment instructions]

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
```

### Library/Package README

**Focus:**
- Installation via package manager
- API reference
- Usage examples
- TypeScript types

**Example Template:**
```markdown
# [Library Name]

[Description] for [use case].

## Installation
\`\`\`bash
npm install library-name
\`\`\`

## Usage
\`\`\`typescript
import { Component } from 'library-name';
\`\`\`

## API Reference
[Detailed API docs]
```

### CLI Tool README

**Focus:**
- Installation via package manager
- Command syntax
- Flag reference
- Examples

**Example Template:**
```markdown
# [CLI Name]

Command-line tool for [purpose].

## Installation
\`\`\`bash
npm install -g cli-name
\`\`\`

## Usage
\`\`\`bash
cli-name [command] [options]
\`\`\`

## Commands
\`\`\`bash
cli-name build    # Build project
cli-name deploy   # Deploy to production
\`\`\`
```

---

## Badges and Metadata

### Status Badges

**Common Badges:**
```markdown
![Build Status](https://github.com/user/repo/workflows/CI/badge.svg)
![Version](https://img.shields.io/npm/v/package-name)
![License](https://img.shields.io/github/license/user/repo)
![Coverage](https://img.shields.io/codecov/c/github/user/repo)
```

**Placement:** Immediately after the title.

**Example:**
```markdown
# Handcrafted Wines

![Build Status](https://github.com/winery/handcrafted-wines/workflows/CI/badge.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Boutique wine farm website with hand-drawn aesthetic.
```

---

## README Anti-Patterns

### ❌ Don't: Assume Prior Knowledge

**Bad:**
```markdown
## Installation
\`\`\`bash
npm install
\`\`\`
```

**Why:** No context, no prerequisites, no expected outcome.

**Good:**
```markdown
## Installation

**Prerequisites:** Node.js 18+, npm 9+

**Steps:**
1. Clone: `git clone [url]`
2. Install: `npm install`
3. Run: `npm run dev`

**Expected:** Server starts at `http://localhost:5173/`
```

### ❌ Don't: Use Relative Paths for Links

**Bad:**
```markdown
See [guidelines](../guidelines/README.md)
```

**Why:** Breaks when README is viewed from different locations.

**Good:**
```markdown
See [guidelines](/guidelines/README.md)
```

### ❌ Don't: Omit Error Handling

**Bad:**
```markdown
Run `npm install` to install dependencies.
```

**Good:**
```markdown
Run `npm install` to install dependencies.

**If you see "permission denied":**
\`\`\`bash
sudo chown -R $USER /usr/local/lib/node_modules
\`\`\`
```

---

## Complete README Example

See the example in `/docs/examples/README-EXAMPLE.md` for a fully-formed README following all these guidelines.

---

## Related Guidelines

- [Repository Standards](/guidelines/repository-standards.md)
- [Changelog Guidelines](/guidelines/changelog-guidelines.md)
- [JSDoc Standards](/guidelines/development/jsdoc-standards.md)

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial README guideline created
- Defined required sections and structure
- Established visual content standards
- Created self-contained section pattern
- Added project-type-specific templates
- Included anti-patterns and examples

---

**Questions or Issues?**  
Contact the development team or reference the [Guidelines Index](/guidelines/INDEX.md).

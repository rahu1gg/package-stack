## 🚀 Npm Package Stack
A minimal starter kit designed to build and publish a npm package with ease.

#### The Stack includes
- [Typescript](https://www.typescriptlang.org/) for type safe and maintainable npm package
- [tsup](https://tsup.egoist.dev/) for build the package
- [Biome](https://biomejs.dev/) for formatting and linting
- [pnpm](https://pnpm.io/) as fast, efficient package-manager

#### Installation
1. Clone the repository ```git clone https://github.com/rahu1gg/npm-package-stack.git```
2. Navigate to the directory ```cd npm-package-stack```
3. Make sure you edit the below properties in the `package.json` file
   - name
   - version
   - description
   - homepage
   - repository
   - keywords
   - author
   - license
5. Install dependencies ```pnpm install```
6. Building the package ```pnpm build```

> Make sure you have __Node.js__ and __pnpm__ installed in your machine

#### Project Structure
```
# GitHub
.
├── src
│   ├── functions.ts
│   ├── index.ts
│   └── types.ts
├── .gitignore
├── .npmignore
├── biome.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
└── tsup.config.ts
```
```
# Npm
.
├── dist
│   ├── index.d.mts
│   ├── index.d.ts
│   ├── index.js
│   └── index.mjs
├── package.json
└── README.md
```

#### Support & Contribute
If you found this project helpful or enjoyed using it, please consider giving it a ⭐️ on GitHub! It helps others find the project and motivates us to keep improving.

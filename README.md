## 🚀 Npm Package Stack
A minimal starter kit designed to build and publish a npm package with ease.

#### The Stack includes
- [Git](https://git-scm.com/) for version control
- [Typescript](https://www.typescriptlang.org/) for writing our code and keeping it type-safe
- [@arethetypeswrong/cli](https://arethetypeswrong.github.io/) for checking our exports
- [tsup](https://tsup.egoist.dev/) for compiling our TypeScript code into CJS and ESM
- [Vitest](https://vitest.js.org/) for running our tests 
- [GitHub Actions](https://docs.github.com/en/actions) for running our CI process
- [Changesets](https://github.com/changesets/changesets) for versioning and publishing our package
- [Biome](https://biomejs.dev/) for formatting
- [pnpm](https://pnpm.io/) as fast, efficient package-manager

#### Installation
1. Clone the repository `git clone https://github.com/rahu1gg/npm-package-stack.git`
2. Navigate to the directory `cd npm-package-stack`
3. Make sure you edit the below properties in the `package.json` file
   - name
   - version
   - description
   - homepage
   - repository
   - keywords
   - author
   - license
5. Install dependencies `pnpm install`
6. Building the package `pnpm build`

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

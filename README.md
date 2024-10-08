## 🚀 Npm Package Stack
A minimal starter kit designed to build and publish a npm package with ease.

#### The Stack includes
- [Typescript](https://www.typescriptlang.org/) for writing our code and keeping it type-safe
- [Turborepo](https://turbo.build/repo/docs/guides/single-package-workspaces) for increased performance and faster builds
- [@arethetypeswrong/cli](https://arethetypeswrong.github.io/) for checking our exports
- [tsup](https://tsup.egoist.dev/) for compiling our TypeScript code into CJS and ESM
- [Vitest](https://vitest.js.org/) for running our tests 
- [GitHub Actions](https://docs.github.com/en/actions) for running our CI process
- [Changesets](https://github.com/changesets/changesets) for versioning and publishing our package
- [Biome](https://biomejs.dev/) for formatting
- [pnpm](https://pnpm.io/) as fast, efficient package-manager
- [Git](https://git-scm.com/) for version control

#### Installation
1. Fork the repository
2. Clone the repository `git clone https://github.com/<your_github_username>/npm-starter-kit.git`
3. Navigate to the directory `cd npm-package-stack`
4. Make sure you edit the below properties in the `package.json` file
   - name
   - version
   - description
   - homepage
   - repository
   - keywords
   - author
   - license
5. Install dependencies `pnpm install`
6. For more scripts refer to `package.json` file

> Make sure you have __Node.js__ and __pnpm__ installed in your machine

#### Scripts and Commands
1. `pnpm build` - compiles the typescript code using `tsup` with `tsup.config.ts` file as configuration
2. `pnpm lint` - lints the project using `tsc`
3. `pnpm check-exports` - checks if all `exports` from the package are correct
4. `pnpm run ci` - runs the CI process for GitHub actions
5. `pnpm format` - formats the project using biome
6. `pnpm format:check` - check if all files in the project are formatted correctly
7. `pnpm test` - test the project using `vitest`
8. `pnpm dev` - test the project using `vitest` in **watch** mode
9. `pnpm local-release` - run `changeset version` and publish the package to npm using `pnpm run release`
10. `pnpm release` - run the `publish-package` script using turbo
11. `pnpm publish-package` - publish the package to npm using `changeset publish`

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
├── tsup.config.ts
└── turbo.json
```
```
# Npm
.
├── dist
│   ├── index.d.mts
│   ├── index.d.ts
│   ├── index.js
│   └── index.mjs
├── CHANGELOG.md
├── LICENSE
├── README.md
└── package.json
```

#### Support & Contribute
If you found this project helpful or enjoyed using it, please consider giving it a ⭐️ on GitHub! It helps others find the project and motivates us to keep improving.

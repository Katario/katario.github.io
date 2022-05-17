# Portfolio

This Project is made with Vue.js and ViteJs.

This will be the entrypoints for all my incoming projects.

### Projects Currently Displayed on the site :

- 

## How does it works?
To use in local, you should use docker.
Just type :
```sh
docker exec -it portfolio npm install && npm run dev
```

Et voilà, it should work properly!

Note : To deploy, there is a git subtree linked to the ./dist folder. Just normally
```sh
docker exec -it portfolio npm run build
cd ./dist
git add && git commit -m "My Commit Message"
git push
```


## TODO:

- Clean the readme, use a default template, the simplest possible
- Add clouds in the day part
- Add stars in the night part
- Add sections to display my future works (block below ? Another page ? To be defined)







# DEFAULT README! TO UPDATE

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

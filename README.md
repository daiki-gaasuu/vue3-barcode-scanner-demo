# Vue 3 + TypeScript + Vite + Vuetify3 + pinia のプロジェクト作成チュートリアル

## 前提条件

- node→v14.18.0 || >=16.0.0
- Vue CLI 5.0 以上

## Vite でプロジェクト作成

1. `yarn create vite`でプロジェクト作成
2. プロジェクト名入力
3. Select a framework→Vue
4. Select a variant→TypeScript
5. プロジェクトルートで`yarn`→`yarn dev`で起動

## Vuetify 追加

1. プロジェクトルートで`vue add vuetify`
2. Choose a preset→Vuetify 3 - Vite (preview)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

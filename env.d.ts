/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  readonly VITE_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

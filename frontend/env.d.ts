/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;

  export interface HTMLAttributes {
    vModel?: unknown;
  }
  export default component;
}

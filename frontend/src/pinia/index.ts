import { defineStore } from 'pinia';

export const useStore = defineStore('app', {
  state: () => ({
    colorMode: 0,
  }),
  getters: {},
  actions: {},
});

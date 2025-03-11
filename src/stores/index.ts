import { defineStore } from 'pinia';

export const useSomeStore = defineStore('something', () => {
  const something = ref(false);
  return {
    something,
  };
});

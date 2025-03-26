// stores/apiStore.ts
import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
  state: () => ({
    api: 'https://billkollectcore.sls.com.ng/api/'
  })
})
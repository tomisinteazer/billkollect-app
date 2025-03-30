
// stores/categoriesStore.ts
import { defineStore } from 'pinia'
import { useApiStore } from './api'

export const useBillerStore = defineStore('biller', {
  // State for storing categories
  state: () => ({
    billerId:"",
    billerName:"",
    billerLogo:"",
    biller:{},
    loading: false,
    error: null ,
   
  }),

  // Actions to fetch categories
  actions: {
    async fetchBiller() {
      // Get API URL from apiStore
      const apiStore = useApiStore()
      
      // Set loading state
      this.loading = true
      this.error = null

      try {
        // Fetch categories using native fetch
        const response = await fetch(`${apiStore.api}/Remita/get-biller-products?billerId=${this.billerId}`)
        
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        // Parse JSON response
        let biller = await response.json()
        this.biller = biller.data !== null ? biller.data : [];
        console.log(" product please",biller.data)
   
       
      } catch (error) {
        // Handle potential errors
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})


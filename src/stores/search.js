// stores/categoriesStore.ts
import { defineStore } from 'pinia'
import { useApiStore } from './api'

export const useSearchStore = defineStore('search', {
  // State for storing categories
  state: () => ({
    searchResult: [],
    searchQuery: '',
    loading: false,
    error: null 
  }),

  // Actions to fetch categories
  actions: {
    async searchBillers() {

      if (this.searchQuery === '') {
        return
      }
      // Get API URL from apiStore
      const apiStore = useApiStore()
      
      // Set loading state
      this.loading = true
      this.error = null

      try {
        // Fetch categories using native fetch
        const response = await fetch(`${apiStore.api}/Remita/filter-biller?request=${this.searchQuery}`)
        
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        // Parse JSON response
        let result = await response.json()
        console.log(result.data)
        this.searchResult = result.data
        // this.searchResult = categories.data.sort((a, b) => {
        //     // Compare the lengths of category names
        //     return a.billerName.length - b.billerName.length;
        // });
        // console.log(this.searchResult)

      } catch (error) {
        // Handle potential errors
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})
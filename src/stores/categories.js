// stores/categoriesStore.ts
import { defineStore } from 'pinia'
import { useApiStore } from './api'

export const useCategoriesStore = defineStore('categories', {
  // State for storing categories
  state: () => ({
    categories: [],
    loading: false,
    error: null 
  }),

  // Actions to fetch categories
  actions: {
    async fetchCategories() {
      // Get API URL from apiStore
      const apiStore = useApiStore()
      
      // Set loading state
      this.loading = true
      this.error = null

      try {
        // Fetch categories using native fetch
        const response = await fetch(`${apiStore.api}/Remita/get-billers`)
        
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        // Parse JSON response
        let categories = await response.json()
        console.log(categories.data)
        this.categories = categories.data.sort((a, b) => {
            // Compare the lengths of category names
            return a.billerName.length - b.billerName.length;
        });
      } catch (error) {
        // Handle potential errors
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})
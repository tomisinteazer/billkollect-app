// stores/categoriesStore.ts
import { defineStore } from 'pinia'
import { useApiStore } from './api'
import BillerByCategoryPage from '@/views/billerByCategoryPage.vue'

export const useBillersByCategoryStore = defineStore('billersBycategory', {
  // State for storing categories
  state: () => ({
    categoryId:"",
    categoryName:"",
    billersinCategory:[],
    loading: false,
    error: null ,
   
  }),

  getters: {
    noOfBillers: (state) => state.billersinCategory.length? state.billersinCategory.length : 0,
  },

  // Actions to fetch categories
  actions: {
    async fetchBillersInCategory() {
      // Get API URL from apiStore
      const apiStore = useApiStore()
      
      // Set loading state
      this.loading = true
      this.error = null

      try {
        // Fetch categories using native fetch
        const response = await fetch(`${apiStore.api}/Remita/get-biller-by-category-id?CategoryID=${this.categoryId}`)
        
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        // Parse JSON response
        let billers = await response.json()
        this.billersinCategory = billers.data !== null ? billers.data : [];
        console.log(this.billersinCategory)
       
      } catch (error) {
        // Handle potential errors
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})
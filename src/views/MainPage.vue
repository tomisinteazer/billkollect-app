<template>

    <div class="bg-hard p-4 text-center">
        <p class="text-white font-semibold text-sm">
            Please sign in to get access to more services →
        </p>
    </div>
    <section class="bgmain flex align-center justify-center min-h-screen">

        <section class="w-full bg-black/15 lg:py-20 py-10">



            <!-- Main Content Container -->
            <section class=" ">
                <div class="flex-grow flex flex-col items-center justify-center p-4">
                    <div class="lg:w-5/9 w-full rounded-2xl bg-hard p-4 flex flex-col">
                        <!-- Search Bar -->
                        <div class="flex flex-row">
                            <div class="relative flex items-center flex-grow px-1">
                                <input type="text" placeholder="Find a service" v-model="search.searchQuery"
                                    class="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-tl-xl rounded-bl-xl px-4 py-6 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white lg:text-2xl">

                            </div>

                            <div>
                                <button
                                    class="bg-clifford/80 lg:p-6 p-5 rounded-r-xl hover:bg-clifford border border-zinc-500"
                                    @click="searchBillers()">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  text-white" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Search Results -->

                        <div class="   w-full bg-hard lg:p-12 p-4 flex flex-col rounded-2xl"
                            v-if="search.searchQuery.length > 0">


                            <!-- Categories of Billers -->
                            <h2 class="text-white text-center lg:text-4xl text-xl pb-8 pt-4">Are you looking for ...
                            </h2>
                            <div>
                                <div class="grid lg:grid-cols-4 grid-cols-2 gap-2">
                                    <!-- Biller Category: Utilities -->
                                    <div v-for="category in search.searchResult" :key="category.billerId"
                                        class="flex flex-col items-center justify-center border border-zinc-500 bg-white/10 hover:bg-white/15 hover:text-white text-zinc-300 backdrop-blur-md rounded-lg p-3 text-center transition-all duration-300 cursor-pointer">
                                        <div class="flex justify-center mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <p class=" text-xl my-2"> {{ category.billerName }} </p>
                                    </div>





                                </div>
                            </div>
                        </div>






                    </div>
                </div>

                <div class="flex-grow flex flex-col items-center justify-center p-4"
                    v-if="search.searchQuery.length === 0">
                    <div class="  lg:w-2/3 w-full bg-hard lg:p-12 p-4 flex flex-col rounded-2xl">


                        <!-- Categories of Billers -->
                        <h2 class="text-white text-center lg:text-4xl text-xl pb-8 pt-4">Select a Service</h2>
                        <div>
                            <div class="grid lg:grid-cols-4 grid-cols-2 gap-2">
                                <!-- Biller Category: Utilities -->
                                <div v-for="category in categories" :key="category.billerId"
                                    class="flex flex-col items-center justify-center border border-zinc-500 bg-white/10 hover:bg-white/15 hover:text-white text-zinc-300 backdrop-blur-md rounded-lg p-3 text-center transition-all duration-300 cursor-pointer">
                                    <div class="flex justify-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <p class=" text-xl my-2"> {{ category.billerName }} </p>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>


</template>

<script>

import { useCategoriesStore } from '@/stores/categories'
import { useSearchStore } from '@/stores/search'

export default {
    name: 'CategoryList',
    data() {
        return {
            search: useSearchStore()
        }
    },
    computed: {
        categories() {
            return useCategoriesStore().categories
        }
        ,
        searchResult() {
            return useSearchStore().searchResult
        }
    },

    methods: {
        searchBillers() {
            this.search.searchBillers()
        }
    },
    mounted() {
        // Fetch categories when component is created
        useCategoriesStore().fetchCategories()
    }
}
</script>
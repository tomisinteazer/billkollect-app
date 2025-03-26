<template>

    <div class="bg-clifford p-4 text-center">
        <p class="text-white font-semibold text-sm">
            Please sign in to get access to more services →
        </p>
    </div>
    <section class="bgpolka flex align-center justify-center min-h-screen">




        <section class="w-full lg:py-20 py-10">

            <quicklinksslider></quicklinksslider>

            <!-- quick links -->








            <!-- Main Content Container -->
            <section class="">
                <div class="flex-grow flex flex-col items-center justify-center p-4">
                    <div class="lg:w-5/9 w-full   p-4 flex flex-col lg:shadow bg-white">
                        <!-- Search Bar -->
                        <div class="flex flex-row">
                            <div class="relative flex items-center flex-grow px-1">
                                <input type="text" placeholder="Find a service" v-model="search.searchQuery"
                                    v-on:keyup.enter="searchBillers()"
                                    class="flex-grow bg-blue-100/30 backdrop-blur-md border border-blue-200 rounded-tl-xl rounded-bl-xl lg:p-4 p-5 text-hard placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-hard lg:text-2xl">

                            </div>

                            <div>
                                <button
                                    class="bg-clifford/80 p-4  border border-clifford rounded-r-xl hover:bg-clifford text-white"
                                    @click="searchBillers()">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Search Results -->


                        <div class="   w-full lg:p-12 p-4 flex flex-col rounded-2xl"
                            v-if="search.searchQuery.length > 0">


                            <!-- Categories of Billers -->


                            <div v-if="search.loading">
                                <h2 class="text-hard text-center lg:text-4xl text-xl pb-8 pt-4">Loading ...
                                </h2>
                            </div>
                            <h2 class="text-hard text-center lg:text-4xl text-xl pb-8 pt-4" v-else>
                                <span v-if="search.searchResult.length != 0">Are you looking for
                                    ...</span>
                                <span v-if="search.searchResult.length === 0"> Nothing Found, search for
                                    something</span>
                            </h2>


                            <div>
                                <div class="flex flex-wrap justify-center gap-2">
                                    <!-- Biller Category: Utilities -->
                                    <div v-for="result in search.searchResult" :key="result.billerId"
                                        class="flex flex-col items-center justify-center bg-blue-100/50 hover:bg-clifford hover:text-white text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)] p-4">
                                        <div class="flex justify-center my-2">
                                            <img :src="result.billerLogoUrl" alt="" v-if="result.billerLogoUrl"
                                                class="h-20 w-20 object-center object-contain  rounded-full" />

                                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>


                                        </div>
                                        <p class="text-xl my-2">{{ result.billerName }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>

                <div class="flex-grow flex flex-col items-center justify-center "
                    v-if="search.searchQuery.length === 0">
                    <div class="lg:w-5/9 w-full  lg:p-4 py-4 flex flex-col rounded-2xl lg:shadow bg-white">


                        <!-- Categories of Billers -->
                        <h2 class="text-hard text-center lg:text-4xl text-xl pb-8 pt-4">Select a Service</h2>
                        <div>
                            <div class="flex flex-wrap justify-center p-4 gap-4">
                                <!-- Biller Category: Utilities -->
                                <div v-for="category in categories" :key="category.billerId"
                                    class="flex flex-col items-center justify-center p-4 bg-blue-100/50 hover:bg-clifford hover:text-white text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer w-4/9 lg:w-2/9 ">
                                    <div class="flex justify-center my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <p class="text-xl my-2">{{ category.categoryName }}</p>
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
import quicklinksslider from '@/components/quicklinksslider.vue'
import { useCategoriesStore } from '@/stores/categories'
import { useSearchStore } from '@/stores/search'

export default {
    name: 'CategoryList',
    data() {
        return {
            search: useSearchStore()
        }
    },
    components: {
        quicklinksslider
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
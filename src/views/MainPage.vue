<template>


    <section class="bgpolka flex align-center justify-center min-h-screen">




        <section class="w-full lg:py-20 py-10">

            <quicklinksslider></quicklinksslider>

            <!-- quick links -->


            <search-biller-component></search-biller-component>







            <!-- Main Content Container -->
            <section class="">


                <div class="flex-grow flex flex-col items-center justify-center px-2 "
                    v-if="search.searchQuery.length === 0">
                    <div class="lg:w-5/9 w-full   flex flex-col rounded-2xl lg:shadow bg-white">
                        <h2
                            class="text-white flex justify-center  bg-clifford text-center  rounded-tr-2xl rounded-tl-2xl">
                            <div
                                class="flex  title-font font-medium items-center md:justify-start justify-center text-zinc-100 rounded">

                                <img src="/src/assets/img/100glassIcons/Group 198.svg" alt=""
                                    class="lg:h-24 lg:w-24 animate-pulse hover:rotate-45 hover:translate-x-3 transition-all duration-300">

                                <span class=" lg:text-4xl text-xl">Lets Get Started.</span>
                            </div>
                        </h2>


                        <!-- Categories of Billers -->
                        <div class="my-12">
                            <div class="flex flex-wrap justify-center gap-4">
                                <!-- Biller Category: Utilities -->
                                <div v-for="category in categories" :key="category.categoryId"
                                    @click="setCategory(category.categoryId, category.categoryName)"
                                    class="flex flex-col items-center justify-center p-4 bg-blue-100/50 hover:bg-clifford hover:text-white text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer w-4/9 lg:w-2/9 ">
                                    <div class="flex justify-center my-2">
                                        <img src="https://openglassicons.pages.dev/100glassIcons/Group%20321.svg"
                                            class=" hover:translate-y-3 transition-all duration-300 hover:scale-120"
                                            alt="">
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
import { useBillersByCategoryStore } from '@/stores/billersBycategory'
import searchBillerComponent from '@/components/searchBillerComponent.vue'

export default {
    name: 'CategoryList',
    data() {
        return {
            search: useSearchStore(),
            billersByCat: useBillersByCategoryStore()
        }
    },
    components: {
        quicklinksslider,
        searchBillerComponent
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

        setCategory(categoryId, categoryName) {
            this.billersByCat.categoryName = categoryName
            this.billersByCat.categoryId = categoryId
            this.billersByCat.billersinCategory = []
            this.$router.push('/biller-by-category')
        },
        searchBillers() {
            this.search.searchBillers()
        }
    },

}
</script>
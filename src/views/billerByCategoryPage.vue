<template>


    <section class="bgpolka flex align-center justify-center min-h-screen">




        <section class="w-full lg:py-20 py-10">

            <quicklinksslider></quicklinksslider>
            <search-biller-component></search-biller-component>

            <!-- quick links -->

            <!-- Main Content Container -->
            <section class="">


                <div class="flex-grow flex flex-col items-center justify-center px-2 "
                    v-if="search.searchQuery.length === 0">
                    <div class="lg:w-5/9 w-full   flex flex-col rounded-2xl lg:shadow bg-white">
                        <h2
                            class="text-white flex justify-center  bg-clifford text-center  rounded-tr-2xl rounded-tl-2xl">
                            <div
                                class="flex  title-font font-medium items-center md:justify-start justify-center text-zinc-100 rounded">

                                <img src="https://openglassicons.pages.dev/100glassIcons/Group%20191.svg" alt=""
                                    class="lg:h-24 lg:w-24 animate-pulse">

                                <span class=" lg:text-4xl text-xl">{{ billersByCat.categoryName }}.</span>
                            </div>
                        </h2>

                        <div v-if="billersByCat.loading">
                            <h2 class="text-hard text-center lg:text-4xl text-xl py-8">Loading ...
                            </h2>
                        </div>

                        <div v-if="!billersByCat.loading && billersByCat.billersinCategory.length === 0">
                            <h2 class="text-hard text-center lg:text-4xl text-xl py-8"> No Billers Found in this
                                Category
                            </h2>
                        </div>
                        <div class="my-12">
                            <div class="flex flex-wrap justify-center gap-4">
                                <!-- Biller Category: Utilities -->
                                <div v-for="biller in billersByCat.billersinCategory" :key="biller.billerId"
                                    @click="setBiller(biller.billerId, biller.billerName, biller.billerLogoUrl)"
                                    class="flex flex-col items-center justify-center p-4 bg-blue-100/50 hover:bg-clifford hover:text-white text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer w-4/9 lg:w-2/9 ">
                                    <div class="flex justify-center my-2">

                                        <img :src="biller.billerLogoUrl" alt="" v-if="biller.billerLogoUrl"
                                            class="h-20 w-20 object-center object-contain  rounded-full" />
                                        <img v-else src="https://openglassicons.pages.dev/100glassIcons/Group%20195.svg"
                                            alt="">
                                    </div>
                                    <p class="text-xl my-2">{{ biller.billerName }}</p>
                                </div>


                            </div>
                            <router-link to="/" class="flex justify-center">
                                <button
                                    class="flex my-8 bg-clifford hover:bg-hard title-font font-medium items-center md:justify-start justify-center text-zinc-100 rounded">

                                    <img src="https://openglassicons.pages.dev/100glassIcons/Group%20184.svg" alt=""
                                        class="pl-2">

                                    <span class="text-xl pr-4">Go Back</span>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>


</template>

<script>
import quicklinksslider from '@/components/quicklinksslider.vue'
import searchBillerComponent from '@/components/searchBillerComponent.vue'
import { useCategoriesStore } from '@/stores/categories'
import { useSearchStore } from '@/stores/search'
import { useBillersByCategoryStore } from '@/stores/billersBycategory'
import { useBillerStore } from '@/stores/billerProducts'
export default {
    name: 'CategoryList',
    data() {
        return {
            search: useSearchStore(),
            billersByCat: useBillersByCategoryStore(),
            biller: useBillerStore()
        }
    },
    components: {
        quicklinksslider,
        searchBillerComponent

    },
    computed: {
        billers() {
            return useBillersByCategoryStore().billersinCategory
        }
        ,
        searchResult() {
            return useSearchStore().searchResult
        }
    },


    methods: {

        setBiller(billerId, billerName, logo) {
            this.biller.billerId = billerId
            this.biller.billerName = billerName
            this.biller.billerLogo = logo
            this.$router.push('/biller')
        },
        searchBillers() {
            this.search.searchBillers()
        }
    },
    mounted() {
        // Fetch categories when component is created
        useBillersByCategoryStore().fetchBillersInCategory()
    }
}
</script>
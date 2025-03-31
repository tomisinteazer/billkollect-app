<template>


    <section class="bgpolka flex align-center justify-center ">




        <section class="w-full py-10">


            <!-- quick links -->
            <!-- Main Content Container -->
            <section class="">
                <div class="flex-grow flex flex-col items-center justify-center p-4">
                    <div class="lg:w-5/9 w-full   p-4 flex flex-col lg:shadow bg-white rounded-xl">
                        <!-- Search Bar -->
                        <div class="flex flex-row">
                            <div class="relative flex items-center flex-grow px-1">
                                <input type="text" placeholder="Find a service" v-model="search.searchQuery"
                                    v-on:keyup.enter="searchBillers()"
                                    class="flex-grow bg-blue-100/30 backdrop-blur-md border border-blue-200 rounded-tl-xl rounded-bl-xl lg:p-4 p-5 text-hard placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-hard lg:text-2xl">

                            </div>

                            <div>
                                <button
                                    class="bg-white p-2 border border-clifford rounded-r-xl hover:bg-clifford/20 text-white"
                                    @click="searchBillers()">
                                    <img src="https://openglassicons.pages.dev/100glassIcons/Group%20319.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <!-- Search Results -->
                        <div class="  w-full lg:p-12 p-4 flex flex-col rounded-2xl"
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
                                        @click="setBiller(result.billerId, result.billerName, result.billerLogoUrl)"
                                        class="flex flex-col items-center justify-center bg-blue-100/50 hover:bg-clifford hover:text-white text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)] p-4">
                                        <div class="flex justify-center my-2">
                                            <img :src="result.billerLogoUrl" alt="" v-if="result.billerLogoUrl"
                                                class="h-20 w-20 object-center object-contain  rounded-full" />

                                            <img v-else class="h-20 w-20"
                                                src="https://openglassicons.pages.dev/100glassIcons/Group%20195.svg"
                                                alt="">


                                        </div>
                                        <p class="text-xl my-2">{{ result.billerName }}</p>
                                    </div>
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
        quicklinksslider
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
    }
}
</script>
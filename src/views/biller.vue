<template>


    <section class="bgpolka flex align-center justify-center min-h-screen">




        <section class="w-full lg:py-20 py-10">
            <!-- Main Content Container -->
            <section class="">
                <div class="flex-grow flex flex-col items-center justify-center p-4">

                </div>

                <div class="flex-grow flex flex-col items-center justify-center px-2 ">
                    <div class="lg:w-5/9 w-full   flex flex-col rounded-2xl lg:shadow bg-white">
                        <h2
                            class="text-white flex justify-center  bg-clifford text-center  rounded-tr-2xl rounded-tl-2xl">
                            <div
                                class="flex  title-font font-medium items-center md:justify-start justify-center text-zinc-100 rounded">

                                <img :src="biller.billerLogo" alt="" nss class="lg:h-24  h-16  p-4 ">

                                <span class=" lg:text-4xl text-xl">{{ biller.billerName }}.</span>
                            </div>
                        </h2>

                        <div v-if="biller.loading">
                            <h2 class="text-hard text-center lg:text-4xl text-xl py-8">Loading ...
                            </h2>
                        </div>

                        <div v-if="!biller.loading && !biller.biller.products">
                            <h2 class="text-hard text-center lg:text-4xl text-xl py-8"> No Products from this biller
                            </h2>
                        </div>
                        <div class="my-12">
                            <div class="flex flex-col justify-center gap-4">


                                <!-- {{ biller.biller }} -->

                                <PhoneNumber v-model="phoneNumber" />
                                <!-- Biller Category: Utilities -->
                                <div v-for="product in biller.biller.products" :key="product"
                                    class="flex flex-col items-center justify-center p-4 hover:text-white text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer ">
                                    <div class="flex justify-center my-2">

                                        <section class="text-blue-600 body-font relative">
                                            <div class=" px-8 py-8 ">
                                                <div class="flex flex-col text-center w-full mb-12">
                                                    <h1
                                                        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                                        {{ product.billPaymentProductName }}</h1>
                                                </div>

                                                <div class=" mx-auto">
                                                    <div class="flex flex-wrap m-2">

                                                        <div class="p-2 w-full">
                                                            <div class="relative">

                                                                <input type="number" placeholder="Phone number"
                                                                    class="w-full bg-blue-100/30 backdrop-blur-md border border-blue-200 rounded-xl  p-3 text-hard placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-hard lg:text-2xl">
                                                            </div>
                                                        </div>
                                                        <div class="p-2 w-full">
                                                            <div class="relative">

                                                                <input type="text" placeholder="Amount"
                                                                    class="w-full bg-blue-100/30 backdrop-blur-md border border-blue-200 rounded-xl  p-3 text-hard placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-hard lg:text-2xl">

                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>


                            </div>
                            <router-link to="/biller-by-category" class="flex justify-center">
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
import { useBillerStore } from '@/stores/billerProducts'
import PhoneNumber from '@/components/phonenumber.vue'

export default {
    name: 'CategoryList',
    data() {
        return {
            biller: useBillerStore(),
            phoneNumber: ''
        }
    },
    components: {
        PhoneNumber
    },
    methods: {

    },
    mounted() {
        // Fetch categories when component is created
        useBillerStore().fetchBiller()
    }
}
</script>
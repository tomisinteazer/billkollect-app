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
                            class="text-hard flex justify-center  bg-clifford text-center  rounded-tr-2xl rounded-tl-2xl">
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
                                <div v-for="product in biller.biller.products" :key="product"
                                    class="flex flex-col items-center justify-center p-4 hover:text-hard text-hard backdrop-blur-md rounded-lg text-center transition-all duration-300 cursor-pointer ">
                                    <div class="flex justify-center my-2">

                                        <section class="text-blue-600 body-font relative">

                                            <div class="flex flex-col text-center w-full mb-12">
                                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-hard">
                                                    {{ product.billPaymentProductName }}</h1>
                                            </div>

                                            <section class="text-zinc-600 body-font relative">

                                                <div class="  my-10">
                                                    <div class="flex flex-wrap m-2">

                                                        <div class=" relative m-2 w-full">
                                                            <input type="text" id="name" name="name" @focus="dropdown"
                                                                v-model="searchValue" @blur="slowDropdown"
                                                                autocomplete="off"
                                                                class="peer bg-transparent rounded-xl border border-zinc-600 h-14 text-hard focus:ring-2 focus:ring-hard hover:border-hard  outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full ">
                                                            <label for="name"
                                                                class="input-label text-zinc-900 peer-focus:text-hard peer-hover:text-hard">Country</label>
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512" class="icon"
                                                                :class="dropdownState ? 'rotay' : ''">
                                                                <path :fill="dropdownState ? '#031441' : '#555555'"
                                                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                            </svg>
                                                            <!--<p>Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc</p>.-->

                                                        </div>



                                                        <div class="w-full h-96 bg-clifford rounded-lg shadow overflow-hidden mt-2 transition ease-in-out delay-150"
                                                            :class="dropdownState ? '' : 'hidden'">
                                                            <div class="content h-[calc(100%-0.5rem)] overflow-y-auto ">

                                                                <div class="Menu compact CountryCodeInput">
                                                                    <div class="backdrop"></div>
                                                                    <div role="presentation"
                                                                        class="bubble menu-container custom-scroll opacity-transition fast left top shown open"
                                                                        style="transform-origin: left top">

                                                                        <div role="menuitem" tabindex="0"
                                                                            class="MenuItem compact"
                                                                            v-for="(country, i) in searchedinfo"
                                                                            :key="i" @click="selectCountry(country)">
                                                                            <span class="country-flag">{{
                                                                                country.flag
                                                                            }}</span><span class="country-name">{{
                                                                                    country.name
                                                                                }}</span><span class="country-code">{{
                                                                                    country.code
                                                                                }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>
                                                        <div class="p-2 w-full " :class="dropdownState ? 'hidden' : ''">
                                                            <div class="relative">
                                                                <input type="phone" id="email" name="email"
                                                                    v-model="phone"
                                                                    class=" peer w-full bg-transparent rounded-xl border border-zinc-600 h-14 focus:border-hard focus:ring-2 focus:ring-hardhover:border-hard text-hard outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                                <label for="email"
                                                                    class="input-label peer-focus:text-hard peer-hover:text-hard">Beneficiary
                                                                    Phone Number*</label>
                                                            </div>
                                                        </div>
                                                        <div class="p-2 w-full " :class="dropdownState ? 'hidden' : ''">
                                                            <div class="relative">
                                                                <input type="phone" id="email" name="email"
                                                                    v-model="phone"
                                                                    class=" peer w-full bg-transparent rounded-xl border border-zinc-600 h-14 focus:border-hard focus:ring-2 focus:ring-hardhover:border-hard text-hard outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                                <label for="email"
                                                                    class="input-label peer-focus:text-hard peer-hover:text-hard">
                                                                    Amount to Recharge</label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>



                                            </section>


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

import data from '@/assets/clean.json'

export default {
    name: 'CategoryList',
    data() {
        return {
            biller: useBillerStore(),
            message: 'Hello Vue!',
            dropdownState: false,
            info: data,
            numberScreen: true,
            codeScreen: true,
            tFAScreen: true,
            currentCountry: { name: '', flag: '', code: '' },
            searchValue: '',
            phone: '234456566777',
            specialWords: ''
        }
    },

    computed: {
        searchedinfo() {
            let tempinfo = this.info;

            // Process search input
            if (this.searchValue != "" && this.searchValue) {
                tempinfo = tempinfo.filter((item) => {
                    return item.name
                        .toUpperCase()
                        .includes(this.searchValue.toUpperCase());
                });
            }

            return tempinfo;
        },
    },
    methods: {
        dropdown() {

            this.dropdownState = !this.dropdownState

        },
        slowDropdown() {
            setTimeout(() => {
                this.dropdownState = !this.dropdownState

            }, 300)

        },


        selectCountry(data) {


            console.log(data)
            this.currentCountry = data

            this.searchValue = this.currentCountry.name
            this.phone = this.currentCountry.code.toString()




        },

    },




    mounted() {
        // Fetch categories when component is created
        useBillerStore().fetchBiller()
    }
}
</script>
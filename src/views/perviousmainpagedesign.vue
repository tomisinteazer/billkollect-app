<template>
    <section class="bgmain">
        <div class="bg-clifford p-4 text-center">
            <p class="text-white font-semibold text-sm">
                Please sign in to get access to more services →
            </p>
        </div>
        <section class="bg-hard/90  py-20">
            <!-- Top Banner -->


            <!-- Main Content Container -->
            <section class="">
                <div class="flex-grow flex flex-col items-center justify-center p-4">
                    <div
                        class="lg:w-1/2 w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-6 flex flex-col">
                        <!-- Search Bar -->
                        <div class="">
                            <div class="relative flex items-center">
                                <input type="text" placeholder="Search for what you want to do"
                                    class="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-6 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 absolute right-4 text-white/50"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="flex-grow flex flex-col items-center justify-center p-4">
                    <div
                        class="  lg:w-2/3 w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-6 flex flex-col">


                        <!-- Categories of Billers -->
                        <h2 class="text-white font-bold text-center text-2xl my-8">Select a Service</h2>
                        <div>
                            <div class="grid lg:grid-cols-5 grid-cols-2 gap-4">
                                <!-- Biller Category: Utilities -->
                                <div v-for="x in 25" :key="x"
                                    class="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                                    <div class="flex justify-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <p class="text-white text-xl my-4">Utilities</p>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>


</template>

<style></style>
<template>
    <div class="lg:w-5/9 w-full mx-auto overflow-hidden">
        <div class="flex animate-scroll space-x-4 py-4">
            <!-- First row of items -->
            <div v-for="item in items" :key="item.id"
                :class="['transition-all duration-300 cursor-pointer bg-blue-100 hover:bg-clifford hover:text-white  w-52 h-32 flex flex-col items-center justify-center text-hard font-bold rounded-lg shadow-lg p-4']">
                <div class="flex justify-center m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 " fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <p class="my-2 "> {{ item.text }} </p>
            </div>

            <!-- Duplicate items for infinite scroll effect -->
            <div v-for="item in items" :key="`duplicate-${item.id}`"
                :class="['transition-all duration-300 cursor-pointer bg-blue-100 w-48 h-32 hover:bg-clifford hover:text-white items-center justify-center text-hard font-bold rounded-lg shadow-lg flex flex-col']">
                <div class="flex justify-center  m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 " fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <p class="  my-2 "> {{ item.text }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfiniteHorizontalScroll',
    data() {
        return {
            items: [
                { id: 1, text: 'Airtime & data' },
                { id: 2, text: 'Credit & loans' },
                { id: 3, text: 'Association & Society' },
                { id: 4, text: 'Religious Institutions' }
            ],

        }
    }
}
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    display: flex;
    width: fit-content;
    animation: scroll 20s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>
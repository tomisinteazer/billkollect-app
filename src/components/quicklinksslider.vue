<template>
    <div class="lg:w-5/9 w-full mx-auto overflow-hidden rounded-2xl">
        <div class="flex animate-scroll space-x-4 py-4">
            <!-- First row of items -->
            <div v-for="item in items" :key="item.id"
                :class="['transition-all duration-300 cursor-pointer bg-blue-50 hover:bg-clifford hover:text-white  w-52 h-32 items-center justify-center text-hard font-bold rounded-lg shadow-lg flex flex-col hover:shadow-none']">
                <div class="flex justify-center m-2">
                    <img class="h-16 w-16" src="https://openglassicons.pages.dev/100glassIcons/Group%20195.svg" alt="">
                </div>
                <p class="  "> {{ item.text }} </p>
            </div>

            <!-- Duplicate items for infinite scroll effect -->
            <div v-for="item in items" :key="`duplicate-${item.id}`"
                :class="['transition-all duration-300 cursor-pointer bg-blue-50 w-52 h-32 hover:bg-clifford hover:text-white items-center justify-center text-hard font-bold rounded-lg shadow-lg flex flex-col hover:shadow-none']">
                <div class="flex justify-center  m-2">
                    <img class="h-16 w-16" src="https://openglassicons.pages.dev/100glassIcons/Group%20195.svg" alt="">
                </div>
                <p class="  "> {{ item.text }} </p>
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
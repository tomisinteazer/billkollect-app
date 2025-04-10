<template>
    <div class="lg:w-5/9 w-full mx-auto overflow-hidden rounded-2xl">
        <div class="flex animate-scroll space-x-4 py-4">
            <!-- First row of items -->
            <div v-for="item in categories" :key="item.categoryId"
                @click="setCategory(item.categoryId, item.categoryName)"
                :class="['transition-all duration-300 cursor-pointer bg-blue-50 hover:bg-clifford hover:text-white  w-52 h-32 items-center justify-center text-hard font-bold rounded-lg shadow-lg flex flex-col hover:shadow-none']">
                <div class="flex justify-center m-2">
                    <img class="h-16 w-16" :src="`/src/assets/img/100glassIcons/${item.categoryIcon}`" />

                </div>
                <p class="  "> {{ item.categoryName }} </p>
            </div>

            <!-- Duplicate items for infinite scroll effect -->
            <div v-for="item in categories" :key="`duplicate-${item.categoryId}`"
                @click="setCategory(item.categoryId, item.categoryName)"
                :class="['transition-all duration-300 cursor-pointer bg-blue-50 w-52 h-32 hover:bg-clifford hover:text-white items-center justify-center text-hard font-bold rounded-lg shadow-lg flex flex-col hover:shadow-none']">
                <div class="flex justify-center  m-2">
                    <img class="h-16 w-16" :src="`/src/assets/img/100glassIcons/${item.categoryIcon}`" />
                </div>
                <p class="  "> {{ item.categoryName }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import { useCategoriesStore } from '@/stores/categories';
import { useBillersByCategoryStore } from '@/stores/billersBycategory';
export default {
    name: 'InfiniteHorizontalScroll',
    data() {
        return {
            billersByCat: useBillersByCategoryStore()

        }

    },

    computed: {
        categories() {
            return [useCategoriesStore().categories[0], useCategoriesStore().categories[1], useCategoriesStore().categories[2], useCategoriesStore().categories[3]]
        }
    },
    methods: {
        setCategory(categoryId, categoryName) {
            this.billersByCat.categoryName = categoryName
            this.billersByCat.categoryId = categoryId
            this.billersByCat.billersinCategory = []
            useBillersByCategoryStore().fetchBillersInCategory()
            this.$router.push('/biller-by-category')

        },
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
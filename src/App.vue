<template>
  <section class="bgpolka">


    <router-link to="/login">
      <div class="bg-clifford  hover:bg-hard p-4 text-center">
        <p class="text-white font-semibold text-sm">
          Please sign in to get access to more services →
        </p>
      </div>
    </router-link>


    <router-link to="/" class="flex justify-center" v-if="this.$route.path !== '/' && this.$route.path !== '/login'">
      <button
        class="flex mt-8 bg-clifford hover:bg-hard title-font p-4 font-medium items-center md:justify-start justify-center text-zinc-100 rounded">
        <img src="https://openglassicons.pages.dev/100glassIcons/Group%20202.svg" alt="" class="pl-2">
        <span class="text-xl pr-4">Home</span>
      </button>
    </router-link>


    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>

  </section>
</template>

<script>

import { useCategoriesStore } from './stores/categories'
export default {
  name: 'App',

  mounted: async function () {
    try {
      await useCategoriesStore().fetchCategories()
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }
}

</script>

<!-- <script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useUsersStore } from './stores/users';
import { useProductsStore } from './stores/products';
import Footer from './components/Footer.vue';
import { onBeforeMount, onMounted } from 'vue';


export default {

  setup() {


    const productsStore = useProductsStore()
    const usersStore = useUsersStore()


    onBeforeMount(() => {

      console.log("Before Mount")
      usersStore.fetchUsers()
      productsStore.fetchProducts()
    })



    return { productsStore, usersStore }





  },
  data() {
    return {

      siteName: "Sol✤store",

      loading: true,

    }
  },

  components: {
    navigationbar: Navbar,
    Footer: Footer
  },
  mounted() {

    setTimeout(() => {
      this.loading = false
    }, 3000)


  }
}

</script> -->



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap');


body {
  font-family: "Space Grotesk", serif;
  font-optical-sizing: auto;

}




.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.fade-in-left {
  animation: fadeInLeft 1.5s ease-in-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

body {
  margin: 0;
}

.thissvg {
  height: 100vmin;
  left: calc(50% - 50vmin);
  position: relative;
  width: 100vmin;
}

.ball-top {
  animation: BallTopMove 4s both infinite;
  motion-path: path("m 66.2,39.264578 c 0,0 -5.195345,-18.056477 -20.4,-18.056477 -15.204655,0 -20.4,17.930208 -20.4,17.930208");
  offset-path: path("m 66.2,39.264578 c 0,0 -5.195345,-18.056477 -20.4,-18.056477 -15.204655,0 -20.4,17.930208 -20.4,17.930208");
  motion-offset: 0%;
  offset-distance: 0%;
}

.ball-bottom {
  animation: BallBottomMove 4s both infinite;
  motion-path: path("m 66.2,58.979615 c 0,0 -5.195345,18.056477 -20.4,18.056477 -15.204655,0 -20.4,-17.930208 -20.4,-17.930208");
  offset-path: path("m 66.2,58.979615 c 0,0 -5.195345,18.056477 -20.4,18.056477 -15.204655,0 -20.4,-17.930208 -20.4,-17.930208");
  motion-offset: 100%;
  offset-distance: 100%;
}

.thinkMaskCircle {
  animation: ClipSmallMove 4s both infinite;
}

.createMaskCircle {
  animation: ClipBigMove 4s both infinite;
}

@keyframes BallTopMove {
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
    transform: scale(0);
  }

  10% {
    transform: scale(1);
  }

  42.5% {
    transform: scale(1);
  }

  50% {
    motion-offset: 100%;
    offset-distance: 100%;
    transform: scale(0);
  }

  100% {
    motion-offset: 100%;
    offset-distance: 100%;
    transform: scale(0);
  }
}

@keyframes BallBottomMove {
  0% {
    motion-offset: 100%;
    offset-distance: 100%;
    transform: scale(0);
  }

  50% {
    motion-offset: 100%;
    offset-distance: 100%;
    transform: scale(0);
  }

  60% {
    transform: scale(1);
  }

  92.5% {
    transform: scale(1);
  }

  100% {
    motion-offset: 0%;
    offset-distance: 0%;
    transform: scale(0);
  }
}

@keyframes ClipSmallMove {
  0% {
    transform: translateY(-63%);
  }

  17.5% {
    transform: translateY(-63%);
  }

  50% {
    transform: translateY(0%);
  }

  62.5% {
    transform: translateY(63%);
  }

  100% {
    transform: translateY(63%);
  }
}

@keyframes ClipBigMove {
  0% {
    transform: translateY(0%);
  }

  17.5% {
    transform: translateY(-63%);
  }

  50% {
    transform: translateY(-63%);
  }

  62.499% {
    transform: translateY(-63%);
  }

  62.5% {
    transform: translateY(63%);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>

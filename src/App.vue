<template>


  <section>

    <section class="fade-in-left">
      <navigationbar title=" me" />
      <transition name="slide-fade">

        <RouterView />

      </transition>



      <Footer />


    </section>


  </section>
</template>

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

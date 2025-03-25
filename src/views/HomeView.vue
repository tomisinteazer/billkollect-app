<template>
  <div class="flex h-screen bgmain flex-row-reverse">
    <!-- Left Side: Login Panel -->

    <div class="lg:flex w-1/2 flex-row items-center justify-center h-screen hidden">

    </div>


    <!-- Right Side: Background Image -->

    <div class="lg:w-1/2 w-full bg-hard lg:px-40 px-10 flex flex-col justify-center h-screen ">

      <div>
        <div class="mb-6 text-center">
          <h2 class="text-white text-2xl font-bold mb-2">Welcome! to</h2>
          <h1 class="text-white text-6xl font-bold mb-2">BillKollect</h1>
          <p class="text-zinc-100 text-sm">Sign in with your email or continue without sign-in to get started.</p>

          <router-link to="/app">

            <button class="bg-white my-4 w-full  px-12 py-4 text-black lg:text-2xl text-xl "> Continue without
              sign-In</button>


          </router-link>


        </div>

        <!-- Social Login Icons -->
        <div class="flex space-x-2 mb-4">
          <button class="bg-zinc-100 p-4  flex-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.613 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.869 0 .507 5.387.507 12s5.362 12 11.973 12c3.607 0 6.32-1.187 8.427-3.413 2.107-2.107 2.907-5.067 2.907-7.467 0-.72-.053-1.387-.173-1.947z" />
            </svg>
          </button>
          <button class="bg-zinc-100 p-4  flex-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black">
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </button>

        </div>

        <!-- OR Divider -->
        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-zinc-100"></div>
          <span class="px-3 text-zinc-100 text-xs">OR</span>
          <div class="flex-grow border-t border-zinc-100"></div>
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <input type="email" placeholder="Email"
            class="w-full bg-zinc-100 text-black p-4 -lg text-lg border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>

        <!-- password Input -->
        <div class="mb-4">
          <input type="Password" placeholder="Password"
            class="w-full bg-zinc-100 text-black p-4 -lg text-lg border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>


      </div>

      <!-- Footer Links -->
      <div class="text-zinc-400 text-xs flex justify-between mt-4">
        <div>
          <a href="#" class="mr-4 hover:text-white">Privacy</a>
          <a href="#" class="hover:text-white">Terms</a>
        </div>
        <div>
          <a href="#" class="mr-4 hover:text-white">Twitter</a>
          <a href="#" class="hover:text-white">linkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeFiLoginScreen',
}
</script>
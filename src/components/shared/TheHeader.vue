<template>
  <div
    class="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500"
  >
    <div class="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
    <div class="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
    <div class="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
    <div class="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
    <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
  </div>

  <div class="min-h-screen">
    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div
        class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
      >
        <div
          class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
              href="/"
              class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >COMIFY</a
            >

            <button
              class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              @click="isOpen = !isOpen"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  v-show="!isOpen"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
                <path
                  v-show="isOpen"
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <nav
            :class="isOpen ? 'flex' : 'hidden'"
            class="bg-gray-200 flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
          >
            <a
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/"
              >Home</a
            >
            <a
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >About</a
            >
            <a
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >About</a
            >
            <a
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >Contact</a
            >
          </nav>

          <div
            @click="isOpen == !isOpen"
            class="invisible relative md:visible lg:visible xl:visible"
          >
            <button
              @click="isOpen = !isOpen"
              class="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span class="">More</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="isOpen ? 'rotate-180' : 'rotate-0'"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              v-show="isOpen"
              transition="transition ease-out duration-100"
              class="absolute al:hidden right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right"
            >
              <div
                class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div class="sm:hidden bg-teal-500 text-white rounded-lg p-3">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="md:h-6 md:w-6 h-4 w-4"
                      >
                        <path
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="font-semibold">Appearance</p>
                      <p class="text-sm">Easy customization</p>
                    </div>
                  </a>
                  <a
                    class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div class="bg-teal-500 text-white rounded-lg p-3">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="md:h-6 md:w-6 h-4 w-4"
                      >
                        <path
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="font-semibold">Comments</p>
                      <p class="text-sm">Check your latest comments</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isOpen = ref(false);

    const toggle = () => {
      isOpen = !isOpen;
    };

    return {
      isOpen,
      toggle,
    };
  },
};
</script>

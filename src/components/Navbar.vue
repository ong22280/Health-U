<template>
  <div>
    <div class="bg-green-700 shadow-2xl">
      <nav class="py-2">
        <div class="flex justify-end pl-4 ty-4">
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="pr-3">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="px-4">
          <ul :class="showMenu ? 'flex justify-end' : 'hidden'"
            class="flex-col space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <a href="/Health-U/home" class="text-2xl font-serif text-white">
              HOME
            </a>
            <li>
              <router-link to="/profile" class="text-2xl font-serif text-white">PROFILE</router-link>
            </li>
            <a href="/Health-U/history" class="text-2xl font-serif text-white">
              HISTORY
            </a>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>

</style>

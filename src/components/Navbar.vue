<template>
  <div>
    <div class="bg-white">
      <nav class="py-2">
        <div class="flex justify-start pl-4 ty-4">
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="pr-3">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="px-4 flex justify-end">
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 justify-end"
          >
            <li class="text-2xl font-bold text-black hover:animate-pulse">
              <router-link to="/">HOME</router-link>
            </li>
            <li class="text-2xl font-bold text-black hover:animate-pulse">
              <router-link to="/profile">PROFILE</router-link>
            </li>
            <li class="text-2xl font-bold text-black hover:animate-pulse">
              <router-link to="/todo">TODO</router-link>
            </li>
            <li>
              <button
            id="sign_out"
            class="btn btn-danger "
            @click="signOut"
          >
            Logout
          </button>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style></style>

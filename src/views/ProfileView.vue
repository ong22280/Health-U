<template>
    <div>
      <Navbar />
    </div>
    <div class="flex h-full w-full">
      <div class="flex flex-col p-[2%] w-full items-center">
        <div class="h-96 w-[1250px] bg-slate-500 rounded-t-2xl"></div>
        <div class="h-[1500px] w-[1250px] bg-white rounded-b-2xl"></div>
        <div class="absolute left-[23%] top-[275px] w-[1250px] h-fit flex items-center space-x-8">
          <div class="rounded-full bg-white w-[25
          %] max-h-[50%] border-slate-900 border-3 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2021/02/10/16/55/lion-6002783_960_720.png" alt="Lion.png">
          </div>
          <div class="text-[300%] text-gray-200">
            Hello World
          </div>
        </div>
        
      </div>
    </div>
    
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  export default {
    components: {
      Navbar
    }
  };
  </script>
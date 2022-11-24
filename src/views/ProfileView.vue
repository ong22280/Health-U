<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <div>
      <Navbar />
    </div>
    <div class="flex h-full w-full">
      <div class="flex flex-col p-[2%] w-full items-center">
        <div class="min-h-[25%] w-[68%] theme rounded-t-2xl" @mouseover="showEditBg(true)" @mouseleave="showEditBg(false)">
          <button id="editBg" class="opacity-0 relative left-[96.5%] w-[2.5%] top-[2.5%] hover:text-white" @click="toggleColor();">
            <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
          </button>
        </div>
        <div class="min-h-fit w-[68%] bg-white">
          <div class="relative left-[10%] top-[-7%] h-fit w-[70%] flex items-center space-x-[5%]">
            <div class="rounded-full bg-white w-[70%] h-[70%] border-slate-900 border-3 overflow-hidden" @mouseover="showEditImage(true)" @mouseout="showEditImage(false)">
              <img :src=image alt="profile.png">
            </div>
            <div id="editImageButton" class="absolute left-[13%] text-[200%] opacity-0" @mouseover="showEditImage(true)">
              <button @click="toggleImage()">
                <font-awesome-icon icon="fa-solid fa-user-pen" class="hover:text-white"/>
              </button>
            </div>
            <div class="w-full theme-text flex-wrap text-[300%]">
              Hello, {{userName}}
            </div>
          </div>
          <div class="relative top-[-10%]">
          <div class="flex flex-col items-center mb-[3%]">
            <div class="relative text-[30px]">
              Personal Infomation
            </div>
            <div class=" bg-slate-400 h-fit w-[30%] p-[2%] rounded-lg" @mouseover="showEditInfo(true)" @mouseleave="showEditInfo(false)">
              <div id ="info" class="text-white flex-col space-y-[3%] text-[20px]">
                <div class="shadow-lg flex p-[2%]">
                  <div class="basis-1/2">
                    Height :
                  </div>
                  <div class="basis-1/2 text-right">
                    {{ height }} cm
                  </div>
                </div>
                <div class="shadow-lg flex p-[2%]">
                  <div class="basis-1/2">
                    Weight :
                  </div>
                  <div class="basis-1/2 text-right">
                    {{ weight }} kg
                  </div>
                </div>
                <div>
                  <div class="shadow-lg flex p-[2%]">
                    <div class="basis-1/2">
                      BMI :
                    </div>
                    <div class="basis-1/2 text-right">
                      {{ bmi }}
                    </div>
                  </div>
                </div>
              </div>
              <div id="editInfo" class="text-white text-[20px] flex-col d-none">
                <div class="flex-col">
                  <label for="height" class="basis2/3 mr-[20px]">Height :</label>
                  <input type="number" name="height" value="{{this.height}}" class="text-slate-500 basis-1/3">
                </div>
                <div class="flex-col">
                  <label for="weight" class="basis2/3 mr-[16px]">Weight :</label>
                  <input type="number" name="weight" value="{{this.weight}}" class="text-slate-500 basis-1/3 ">
                </div>
                <button class="bg-white text-slate-500 p-[2%] text-[75%] rounded-md mt-[4%]" @click="saveInfo()">Save</button>
              </div>
              <div id="showEditInfo" class="text-center pt-[3%] d-none">
                  <button @click="editInfo()" id="editButton">
                    <font-awesome-icon icon="fa-solid fa-user-pen" class=" hover:text-black"/>
                  </button>
              </div>
            </div>
          </div>
          <div class="">
            <canvas id="myChart" class="w-[50%]"></canvas>
          </div>
          <div class="mt-[30px] text-center text-[20px]">
            Target Calories / Day : {{ informationUser.myCalorie }} kcal
          </div>
          <div class="text-center text-[20px] mt-[25px]">
            Calories till reach target : {{ informationUser.leftCalorie }} kcal
          </div>
        </div>
        </div>
        
      </div>
    </div>
</template>

<script>
import { useUserInfoStore } from '../stores/userInfo.js'
import Navbar from '../components/Navbar.vue';
import Chart from 'chart.js/';

export default {
  data() {
    return {
      image : "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/306148111_1880034558867492_7239761071913403261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoF0YqNgK8AB2DTFgx2sNe3vZh_X94_pHe9mH9f3j-kYWzRkPEDIBGgSm7ar7PiQSRm8tCygSvk6Jrhui3u3fd&_nc_ohc=Yj3xcRYEa8gAX8I8Tet&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCWHJb6PfuP02Qf1GpfpbN0JwEcynbVtAkQTVgPOaVgLw&oe=63842DB6",
      imageNo : 1,
      r : 255,
      g : 0,
      b : 0,
      color : 1,
      hex : '#FE0000',
      userInformation : [],
      height : 0,
      weight : 0,
      editInfoBox : 0,
      userName : "Ong",
      informationUser: [],
    }
  },
  async created() {
    await useUserInfoStore().fetchInformationUser()
    this.informationUser = useUserInfoStore().informationUser
    this.height = this.informationUser.height
    this.weight = this.informationUser.weight
    this.bmi = this.weight / (this.height / 100)
    this.bmi = this.bmi.toFixed(2)
  },

  components: {
    Navbar,
  },

  methods: {
    showEditBg(bool) {
      let editBg = document.querySelector("#editBg");
      if (bool) {
        editBg.classList.remove("opacity-0");
      }
      else {
        editBg.classList.add("opacity-0");
      }
    },
    toggleColor(){
      if (this.color == 1) {
        this.r = 0; this.g = 0; this.b = 255;
        this.color = 2 ;
      } else if(this.color == 2) {
        this.r = 0; this.g = 255; this.b = 0;
        this.color = 3;
      }
      else{
        this. r = 255; this.g = 0; this.b = 0;
        this.color = 1;
      }
      this.hex = this.rgbToHex(this.r,this.g,this.b);
    },
    componentToHex(c) {
      let hex = c.toString(16).toUpperCase();
      return hex.length == 1 ? "0" + hex : hex;
    },
    rgbToHex(r, g, b) {
      return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    },
    showEditInfo(bool){
      let edit = document.querySelector('#showEditInfo');
      if (this.editInfoBox == 1){
        edit.classList.add('d-none')
        return
      }
      if (bool) {
        edit.classList.remove('d-none');
      }else{
        edit.classList.add('d-none')
      }
    },
    saveInfo(){
      let height = document.querySelector("input[name=height]").value;
      let weight = document.querySelector("input[name=weight]").value;
      let info = document.querySelector("#info");
      let editInfo = document.querySelector("#editInfo");
      let editButton = document.querySelector('#editButton');

      if (height == "" || weight == ""){
        return
      }
      this.editInfoBox = 0;

      this.height = height;
      this.weight = weight;
      this.bmi = this.weight / (this.height / 100)
      this.bmi = this.bmi.toFixed(2)

      editButton.classList.remove('d-none')
      editInfo.classList.add('d-none')
      info.classList.remove('d-none')
    },
    editInfo(){
      let info = document.querySelector("#info");
      let editInfo = document.querySelector("#editInfo");
      let editButton = document.querySelector('#editButton');
      this.editInfoBox = 1

      editButton.classList.add('d-none')
      info.classList.add('d-none')
      editInfo.classList.remove('d-none')
    },
    showEditImage(bool){
      let button = document.querySelector("#editImageButton");
      if (bool) {
        button.classList.remove('opacity-0');
      }
      else{
        button.classList.add('opacity-0')
      }
    },
    toggleImage(){
      if (this.imageNo == 1) {
        this.image = "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/314996702_793191231783542_1834186024487866866_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFaLLZjMv8Y1ZA7CLRnavfuRiieUlpupj9GKJ5SWm6mPxx30nKgEkNRh8clPgaJpgXW7fyJgx8hIDua54wMdUM9&_nc_ohc=Ij2ISD3ShFsAX9zZqW8&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdSYXinCXSfm2eBGdCoLfblPeTbBQjxqRdavwor0qDO3SQ&oe=63A66C08"
        this.imageNo = 2;
      }else if (this.imageNo == 2) {
        this.image = "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/310835510_684981289522964_3461760171192846605_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGxoJHkMrnl41VeoGDgpsDsW5LDlWiKMQlbksOVaIoxCfCMzVgXd3oKYaw_wBsYEpHRwxGaPSMo-uNwPYT0vg_P&_nc_ohc=c77njFiVCgEAX_kjfLw&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdQR8psjFXUXpMrPgJ4OWqnuuIDe7aZCeVfCfe5omN1VhQ&oe=63A689E4"
        this.imageNo = 3;
      }else {
        this.image = "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/306148111_1880034558867492_7239761071913403261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoF0YqNgK8AB2DTFgx2sNe3vZh_X94_pHe9mH9f3j-kYWzRkPEDIBGgSm7ar7PiQSRm8tCygSvk6Jrhui3u3fd&_nc_ohc=Yj3xcRYEa8gAX8I8Tet&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCWHJb6PfuP02Qf1GpfpbN0JwEcynbVtAkQTVgPOaVgLw&oe=63842DB6"
        this.imageNo = 1;
      }
    }
  },
  
  mounted() {
    const ctx = document.getElementById('myChart');
    const option = {
      scales: {
        y: {
          beginAtZero: true,
          max: 300,
        }
      },
      layout: {
        padding: {
          top: 0,
          left: 100,
          right: 100,
        },
      },
      annotation: {
        annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 2000,
            borderColor: 'tomato',
            borderWidth: 1
        }],
        drawTime: "afterDraw" // (default)
      }
    }
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Calories per day',
          data: [2022, 2340, 1670, 2105, 2555, 1740, 2100],
          backgroundColor : this.rgbToHex(this.r,this.g,this.b), 
          borderColor : "black",
          borderWidth: 2
        }]
      },
      options: option
    });
  }
};
</script>

<style>

:root {
  --theme: rgb(148, 163, 184);
}
.theme {
  background-color: rgb(v-bind(r),v-bind(g),v-bind(b));
  
}
.theme-text {
  color: rgb(v-bind(r),v-bind(g),v-bind(b));
}

</style>
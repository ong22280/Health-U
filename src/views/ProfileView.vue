<template>
  <div>
    <Navbar />
  </div>
  <div class="flex h-full w-full">
    <div class="flex flex-col p-[2%] w-full items-center">
      <div class="min-h-[25%] w-[68%] bg-slate-500 rounded-t-2xl" @mouseover="showEditBg(true)"
        @mouseleave="showEditBg(false)">
        <button id="editBg" class="opacity-0 relative left-[96.5%] w-[2.5%] top-[2.5%] hover:text-white">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </button>
      </div>
      <div class="min-h-fit w-[68%] bg-white">
        <div class="relative left-[10%] top-[-10%] h-fit w-[70%] flex items-center space-x-[5%]">
          <div class="rounded-full bg-white max-w-[80%] max-h-[100%] border-slate-900 border-3 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2021/02/10/16/55/lion-6002783_960_720.png" alt="Lion.png">
          </div>
          <div class="w-full text-slate-500 flex-wrap ">
            {{ informationUser.email }}
          </div>
        </div>
        <div class="relative top-[-10%]">
          <div class="flex flex-col items-center">
            <div class="relative text-[20px]">
              Personal Infomation
            </div>
            <div class=" bg-slate-400 h-fit w-[20%] p-[2%] rounded-lg">
              <div class="text-white flex-col space-y-[3%]">
                <div class="shadow-lg flex p-[2%]">
                  <div class="basis-1/2">
                    Height :
                  </div>
                  <div class="basis-1/2 text-right">
                    {{ informationUser.height }} cm
                  </div>
                </div>
                <div class="shadow-lg flex p-[2%]">
                  <div class="basis-1/2">
                    Weight :
                  </div>
                  <div class="basis-1/2 text-right">
                    {{ informationUser.weight }} kg
                  </div>
                </div>
                <div class="shadow-lg flex p-[2%]">
                  <div class="basis-1/2">
                    BMI :
                  </div>
                  <div class="basis-1/2 text-right">
                    20.5
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="">
            <canvas id="myChart" class="w-[50%]"></canvas>
          </div>
          <div class="mt-[30px] text-center text-[20px]">
            Target Calories / Day :
          </div>
          <div class="text-center text-[20px] mt-[25px]">
            Current Calories / Day :
          </div>
          <div class="text-center text-[20px] mt-[25px]">
            Calories till reach target :
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { useUserInfoStore } from '../stores/userInfo.js'
import Navbar from '../components/Navbar.vue';
import Chart from 'chart.js/'
import { endAt } from '@firebase/firestore';

export default {
  data() {
    return {
      informationUser: [],
    }
  },
  async created() {
    await useUserInfoStore().fetchInformationUser()
    this.informationUser = useUserInfoStore().informationUser
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
    }
  },
  mounted() {

    const ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Calories in a week',
          data: [12, 19, 3, 5, 2, 3, 30],
          backgroundColor: '#FE0000',
          borderColor: "black",
          borderWidth: 2
        }]
      },
      options: {
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
        }
      },
    });
  }
};
</script>

<style>

</style>
<template>

    <div class="mb-12 flex justify-center">

        <div class=" container  shadow-2xl rounded-xl fade-in" id="content-food"
            style="width: 48rem; max-width: 80%;">
            <img :src="image" class="card-img-top rounded-xl shadow-2xl w-full">
            <div class="">
                <h5 class="card-title font-black text-3xl">{{ name }}</h5>
                <span class="font-bold text-2xl">calorie : </span>
                <span class="font-semibold text-2xl">{{ calorie }}</span>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Food Name'
        },
        calorie: {
            type: String,
            default: 'Calorie'
        },
        image: {
            type: String,
            default: 'https://www.lays.com/sites/lays.com/files/2020-11/lays-Classic-small.jpg'
        }
    },

}
</script>

<style scoped>
#content-food {
  position: relative;
  top: 40px;
  border: 1px solid lightgray;
  padding: 3rem 2rem;
  background: #fefefe;
}
</style>
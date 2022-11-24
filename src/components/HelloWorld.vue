<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <VueMultiselect
        :multiple="true"
        :close-on-select="true"
        v-model="selected"
        :options="options"
      />
    </div>
    <div>
      <GameCardStack
        :cards="stacks"
        @cardAccepted="handleCardAccepted"
        @cardRejected="handleCardRejected"
        @cardSkipped="handleCardSkipped"
        @hideCard="removeCardFromDeck"
      />
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import GameCardStack from "./GameCardsStack.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    VueMultiselect,
    GameCardStack,
  },
  data() {
    return {
      selected: null,
      options: ["list", "of", "options"],
      stacks: [
        { keyword: "Card-A" },
        { keyword: "Card-B" },
        { keyword: "Card-C" },
        { keyword: "Card-D" },
        { keyword: "Card-E" },
      ],
      foods: [],
      i: 0,
    };
  },
  async created() {
    await useFoodStore().fetchFood();
    this.foods = useFoodStore().getRandFood;
    console.log(this.foods[0].name);
  },
  methods: {
    incrementI() {
      this.i = this.i + 1
    },
    handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.stacks.shift();
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

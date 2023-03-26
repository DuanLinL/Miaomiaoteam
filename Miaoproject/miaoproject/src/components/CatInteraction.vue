<template>
    <div class="cat-interaction">
      <h3>猫咪互动</h3>
      <div class="cat">
        <img :src="catImage" alt="猫咪" @click="petCat" />
      </div>
      <div class="interaction-buttons">
        <button class="button is-primary" @click="feedCat">喂食</button>
        <button class="button is-primary" @click="playWithCat">玩耍</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CatInteraction",
    data() {
      return {
        catMood: "normal",
      };
    },
    computed: {
      catImage() {
        const imgList = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];
        const index = Math.floor(Math.random() * imgList.length);
        const imagePath = `@/assets/${imgList[index]}`;
        if (this.catFood >= 100) {
          return require(imagePath);
        } else if (this.catFood >= 50) {
          return require(imagePath.replace("cat", "hungry-cat"));
        } else {
          return require("@/assets/default-cat.png");
        }
      },
    },
    methods: {
      petCat() {
        if (this.catMood === "normal") {
          this.catMood = "happy";
        }
      },
      feedCat() {
        if (this.catMood === "hungry") {
          this.catMood = "normal";
          this.$emit("updateCatReward", 3);
        }
      },
      playWithCat() {
        if (this.catMood === "happy") {
          this.catMood = "normal";
          this.$emit("updateCatReward", 5);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .cat-interaction {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .cat {
    text-align: center;
  }
  
  .cat img {
    max-width: 200px;
    cursor: pointer;
  }
  
  .interaction-buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .button.is-primary {
    background-color: #4a90e2;
    border-color: transparent;
    color: #ffffff;
    margin-right: 1rem;
  }
  
  .button.is-primary:hover {
    background-color: #3a78c3;
    border-color: transparent;
  }
  </style>
  
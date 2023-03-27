<template>
    <div class="cat-reward">
      <h3>猫咪奖励</h3>
      <div class="reward-count">
        <p>
          当前猫粮数：
          <span class="count">{{ catFood }}</span>
        </p>
      </div>
      <div class="cat">
        <img :src="catImage" alt="猫咪" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CatReward",
    props: {
      catFood: {
        type: Number,
        default: 0,
      },
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
  };
  </script>
  
  <style scoped>
  .cat-reward {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .reward-count {
    margin-bottom: 1rem;
  }
  
  .count {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4a90e2;
  }
  
  .cat {
    text-align: center;
  }
  
  .cat img {
    max-width: 200px;
  }
  </style>
  
<template>
    <div class="cat-shop">
      <h3>猫咪商店</h3>
      <div class="item-list">
        <div class="item" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="商品图片" />
          <div class="item-name">{{ item.name }}</div>
          <div class="item-price">{{ item.price }} 猫粮</div>
          <button class="button is-primary" @click="buyItem(item)">购买</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CatShop",
    data() {
      return {
        items: [
          {
            id: 1,
            name: "猫咪玩具1",
            image: require("@/assets/cat-toy1.png"),
            price: 10,
          },
          {
            id: 2,
            name: "猫咪玩具2",
            image: require("@/assets/cat-toy2.png"),
            price: 20,
          },
          {
            id: 3,
            name: "猫咪玩具3",
            image: require("@/assets/cat-toy3.png"),
            price: 30,
          },
        ],
      };
    },
    methods: {
      buyItem(item) {
        if (this.$parent.catFood >= item.price) {
          this.$emit("updateCatReward", -item.price);
          alert(`购买成功：${item.name}`);
        } else {
          alert(`猫粮不足，无法购买：${item.name}`);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .cat-shop {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .item-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  
  .item {
    margin-right: 1rem;
    margin-bottom: 1rem;
    width: calc(33.33% - 1rem);
    text-align: center;
  }
  
  .item img {
    max-width: 100%;
  }
  
  .item-name {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .item-price {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  
  .button.is-primary {
    background-color: #4a90e2;
    border-color: transparent;
    color: #ffffff;
  }
  
  .button.is-primary:hover {
    background-color: #3a78c3;
    border-color: transparent;
  }
  </style>
  
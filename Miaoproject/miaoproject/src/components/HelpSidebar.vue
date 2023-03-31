<!-- HelpSidebar.vue -->
<template>
  <div class="help-sidebar" :class="{ show: show }">
    <div class="sidebar-header">
        <h2> 项目成员信息</h2>
        <button @click="$emit('close')">X</button>
    </div>
    <div class="team-members">
      <div
        class="member-card"
        v-for="(member, index) in members"
        :key="index"
        @mouseover="onMouseOver(index)"
        @mouseleave="onMouseLeave(index)"
        :style="{ backgroundColor: member.backgroundColor }"
      >
        <img class="member-avatar" :src="member.avatar" :alt="member.name" />
        <div class="member-info">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-bio">{{ member.bio }}</p>
          <p class="member-contact">{{ member.contact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpSidebar",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      members: [
        {
          avatar: require('@/assets/pre/pre1.png'),
          name: "兔兔林",
          bio: "理想主义摆烂人",
          contact: "1090902861@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre2.png'),
          name: "狗狗施",
          bio: "当地小有名气的穷光蛋",
          contact: "2404065053@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre3.png'),
          name: "蛙蛙悦",
          bio: "三好女人",
          contact: "2392132705@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre4.png'),
          name: "鼠鼠多",
          bio: "如你所见 我是个人",
          contact: "1518007648@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre5.png'),
          name: "猫猫渠",
          bio: "代码持续输出中~",
          contact: "784193126@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre6.png'),
          name: "猫猫Chisato",
          bio: "宇宙第一鸽王",
          contact: "996157117@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre7.png'),
          name: "猫猫斌",
          bio: "已读不回专业户",
          contact: "1052241367@qq.com",
          backgroundColor: "#f5f5f5",
        },
        {
          avatar: require('@/assets/pre/pre8.png'),
          name: "猫猫罗",
          bio: "这里介绍不了我",
          contact: "1640509501@qq.com",
          backgroundColor: "#f5f5f5",
        },
      ],
    };
  },
  methods: {
    onMouseOver(index) {
      this.members[index].backgroundColor = "#ffff85";
    },
    onMouseLeave(index) {
      this.members[index].backgroundColor = "#ffffff";
    },
  },
};
</script>

<style scoped>
.help-sidebar {
  position: fixed;
  top: 70px;
  right: -300px;
  width: 300px;
  height: 900px;
  background-color: #ffffff;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.146);
  transition: right 0.3s ease-out;
}

.show {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 22px;
}

button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;
}

.member-card {
  position: relative; /* 添加相对定位 */
  border: 2px dashed #f5f505;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.member-avatar {
  width: 90px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px; /* 移除右边距 */
  margin-left: 0; /* 移除左边距 */
  position: absolute; /* 使用绝对定位 */
  left: 5px; /* 设置左边距为负值，将图片向左移动 */
}

.member-info {
  margin-left: 85px; /* 调整左边距，为图片和文字之间留出空间 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* 设置左对齐 */
}

.member-info h3,
.member-info p {
  margin: 0; /* 移除默认的外边距 */
}

.member-info h3 {
  font-size: 20px;
  font-family: 'Arial', sans-serif; /* 设置字体 */
  margin-bottom: 5px; /* 调整姓名和简介之间的距离 */
}

.member-name {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

.member-bio,
.member-contact {
  font-size: 8px;
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>



  
  
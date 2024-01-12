<template>
  <div class="cMenu">
    <div @click="toggleMenu" class="cMenu_title">
      <h3>Мой кабинет</h3>
      <img
        class="cMenu_title-arrow"
        src="/images/arrow_right.svg"
        :class="{ show: showMenu }"
      />
    </div>
    <div :class="{ show: showMenu }" class="cMenu_list">
      <a
        v-for="(menu, index) in menuList"
        class="cMenu_list-item"
        @click="toggleActive(menu)"
        :href="menu.link"
        :class="{ active: activeMenu == menu.id }"
        :key="index"
      >
        <img class="cMenu_item-img" :src="`/images/${menu.icon}`" alt="" />
        <p class="cMenu_item-text">{{ menu.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     menuList: Array,
  //   },

  data() {
    return {
      showMenu: true,
      activeMenu: 1,
      menuList: [
        {
          id: 1,
          name: "Персональные данные",
          icon: "user.svg",
          link: "#!",
        },
        {
          id: 2,
          name: "Работа и образование",
          icon: "work_edu.svg",
          link: "#!",
        },
        {
          id: 3,
          name: "Достижения",
          icon: "cup.svg",
          link: "#!",
        },
        {
          id: 4,
          name: "Способы оплаты",
          icon: "p_card.svg",
          link: "#!",
        },
        {
          id: 5,
          name: "Безопасность",
          icon: "shield.svg",
          link: "#!",
        },
      ],
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleActive(item) {
      this.activeMenu = item.id;
    },
  },
};
</script>

<style>
.cMenu {
  max-width: 300px;
}
.cMenu_title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  user-select: none;
  cursor: pointer;
}
.cMenu_title h3 {
  color: var(---Black, #040404);
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.48px;
}
.cMenu_title-arrow {
  transition: all 0.3s ease;
}
.cMenu_title-arrow.show {
  transform: rotate(90deg);
}
.cMenu_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.4s ease;
}
.cMenu_list.show {
  max-height: 300px;
  /* transition: all 0.4s ease; */
}
.cMenu_list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(---White, #fff);
  height: 60px;
  max-height: 60px;
  min-height: 60px;
  padding: 0 20px;
  user-select: none;
  transition: 0.3s;
}
.cMenu_list-item.active {
  background-color: #f2f7ff;
  color: #1e75f8;
}
.cMenu_list-item.active .cMenu_item-img {
  filter: invert(29%) sepia(98%) saturate(1875%) hue-rotate(207deg)
    brightness(101%) contrast(94%);
}
.cMenu_list-item.active .cMenu_item-text {
  color: #1e75f8;
}
.cMenu_item-text {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
}
</style>

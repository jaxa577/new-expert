<template>
  <div class="cMenu">
    <div class="cMenu_title">
      <h3>Мой кабинет</h3>
      <img class="cMenu_title-arrow" src="/images/arrow_right.svg" />
    </div>
    <div class="cMenu_list">
      <div
        v-for="(menu, index) in menuList"
        class="cMenu_list-item"
        @click="toggleActive(menu)"
        :class="{ active: activeMenu == menu.id }"
        :key="index"
      >
        <div class="cMenu_item-header">
          <p class="cMenu_item-text">
            <img class="cMenu_item-img" :src="`/images/${menu.icon}`" alt="" />
            {{ menu.name }}
          </p>
          <img class="cMenu_title-arrow" src="/images/arrow_right.svg" />
        </div>
        <div class="cMenu_subs">
          <a
            class="cMenu_subs-item"
            v-for="(subItem, index) in menu.subs"
            href="#!"
          >
            {{ subItem.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: 1,
      menuList: [
        {
          id: 1,
          name: "Персональные данные",
          icon: "user.svg",
          link: "#!",
          subs: [
            {
              id: 1,
              name: "Аватарка",
              link: "#!",
            },
            {
              id: 2,
              name: "Основная информация",
              link: "#!",
            },
            {
              id: 3,
              name: "Дополнительно",
              link: "#!",
            },
          ],
        },
        {
          id: 2,
          name: "Работа и образование",
          icon: "work_edu.svg",
          link: "#!",
          subs: [
            {
              id: 1,
              name: "Аватарка",
              link: "#!",
            },
            {
              id: 2,
              name: "Основная информация",
              link: "#!",
            },
            {
              id: 3,
              name: "Дополнительно",
              link: "#!",
            },
          ],
        },
        {
          id: 3,
          name: "Достижения",
          icon: "cup.svg",
          link: "#!",
          subs: [
            {
              id: 1,
              name: "Аватарка",
              link: "#!",
            },
            {
              id: 2,
              name: "Основная информация",
              link: "#!",
            },
            {
              id: 3,
              name: "Дополнительно",
              link: "#!",
            },
          ],
        },
        {
          id: 4,
          name: "Способы оплаты",
          icon: "p_card.svg",
          link: "#!",
          subs: [
            {
              id: 1,
              name: "Аватарка",
              link: "#!",
            },
            {
              id: 2,
              name: "Основная информация",
              link: "#!",
            },
            {
              id: 3,
              name: "Дополнительно",
              link: "#!",
            },
          ],
        },
        {
          id: 5,
          name: "Безопасность",
          icon: "shield.svg",
          link: "#!",
          subs: [
            {
              id: 1,
              name: "Аватарка",
              link: "#!",
            },
            {
              id: 2,
              name: "Основная информация",
              link: "#!",
            },
            {
              id: 3,
              name: "Дополнительно",
              link: "#!",
            },
          ],
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
      this.$emit("toggle-page", item);
    },
  },
};
</script>

<style>
.cMenu {
  max-width: 300px;
  width: 100%;
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
.cMenu_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.4s ease;
}
.cMenu_list-item {
  max-height: 50px;
  padding: 14px 20px;
  overflow: hidden;
  transition: 0.4s;
}
.cMenu_item-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 20px;
  background: var(---White, #fff);
  margin-bottom: 30px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
}
.cMenu_item-header p {
  font-size: 16px;
}
.cMenu_list-item.active {
  /* background-color: #f2f7ff; */
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
  display: flex;
  align-items: center;
  gap: 10px;
}
.cMenu_subs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 34px;
}
.cMenu_subs-item {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.cMenu_subs-item.active {
  color: #040404;
}
.cMenu_list-item.active {
  max-height: 500px;
  min-height: fit-content;
}
.cMenu_title-arrow {
  transition: all 0.3s ease;
}
.cMenu_list-item.active .cMenu_title-arrow {
  transform: rotate(90deg);
  filter: invert(40%) sepia(62%) saturate(5300%) hue-rotate(207deg)
    brightness(101%) contrast(94%);
}
</style>

<template>
  <div class="pcModules">
    <div class="pcModules_container container">
      <div class="pcModules_title">
        <h2>Модули</h2>
        <img src="/images/arrow_right.svg" alt="" />
      </div>
      <div ref="scrollContainer" class="pcModules_list">
        <div
          v-for="(pcModule, index) in modulesList"
          :key="index"
          class="pcModules_item"
        >
          <div
            class="pcModules_item-main"
            @click="toggleSubMenu(pcModule)"
            :class="[{ active: avtiveModule == pcModule.id }, pcModule.type]"
          >
            <img
              class="pcModules_icon"
              :src="`/images/${pcModule.icon}`"
              alt=""
            />
            {{ pcModule.name }}
          </div>
          <div class="pcModules_item-layer"></div>
          <div
            class="pcModules_item-submenus"
            :class="{ closed: avtiveModule !== pcModule.id }"
          >
            <a
              v-for="(sub, index) in pcModule.subMenus"
              :key="index"
              :href="sub.link"
              class="pcModules_item-submenu"
              >{{ sub.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modulesList: [
        {
          id: 1,
          name: "Обучения",
          type: "course",
          icon: "edu_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 2,
          name: "Вакансии",
          type: "vacancy",
          icon: "vacancy_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 3,
          name: "Сообщество",
          type: "experts",
          icon: "experts_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 4,
          name: "Резюме",
          type: "resume",
          icon: "cv_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 5,
          name: "Стартапы",
          type: "startups",
          icon: "startups_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 6,
          name: "Сертификаты",
          type: "certificates",
          icon: "certificates_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 7,
          name: "Тесты",
          type: "tests",
          icon: "tests_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
        {
          id: 8,
          name: "Фриланс",
          type: "freelance",
          icon: "freelance_original.svg",
          subMenus: [
            {
              name: "Чат",
              id: 1,
              link: "#!",
            },
            {
              name: "Каталог",
              id: 2,
              link: "#!",
            },
            {
              name: "Сообщество",
              id: 3,
              link: "#!",
            },
          ],
          showSubMenus: false,
        },
      ],
      avtiveModule: 0,
    };
  },

  methods: {
    toggleSubMenu(item) {
      this.avtiveModule = item.id;
    },
  },
};
</script>

<style>
.pcModules {
  margin: 50px 0;
}
.pcModules_container {
  /* display: flex;
  align-items: flex-start; */
  /* gap: 50px; */
}
.pcModules_title {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 12px;
  margin-bottom: 20px;
}
.pcModules_title h2 {
  color: var(---Black, #040404);
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.48px;
}
.pcModules_list {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  overflow: visible;
}
.pcModules_list::-webkit-scrollbar {
  display: none;
}
.pcModules_item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: fit-content;
  user-select: none;
}
.pcModules_item-main {
  border-radius: 20px;
  background: var(---White, #fff);
  padding: 0 20px 0 18px;
  height: 50px;
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.pcModules_item:hover .pcModules_item-main {
  color: var(---White, #fff);
}
.pcModules_item:hover .pcModules_icon {
  filter: brightness(0) invert(1);
}
/* .pcModules_item-main.active {
  color: var(---White, #fff);
}
.pcModules_item-main.active .pcModules_icon {
  filter: brightness(0) invert(1);
} */
.pcModules_item:hover .pcModules_item-main.course {
  background: var(---, #2f80f8);
}
.pcModules_item:hover .pcModules_item-main.vacancy {
  background-color: #872ff8;
}
.pcModules_item:hover .pcModules_item-main.resume {
  background-color: #2f4ff8;
}
.pcModules_item:hover .pcModules_item-main.experts {
  background-color: #2f80f8;
}
.pcModules_item:hover .pcModules_item-main.startups {
  background-color: #fbb732;
}
.pcModules_item:hover .pcModules_item-main.certificates {
  background-color: #00b06c;
}
.pcModules_item:hover .pcModules_item-main.tests {
  background-color: #5115b8;
}
.pcModules_item:hover .pcModules_item-main.freelance {
  background-color: #ff2a54;
}

.pcModules_item-submenus {
  position: absolute;
  flex-direction: column;
  top: calc(100% + 10px);
  left: 0;
  border-radius: 20px;
  display: flex;
  gap: 30px;
  height: 50px;
  height: fit-content;
  overflow: hidden;
  backdrop-filter: blur(10px);
  z-index: 9999;
  max-height: 0;
  padding: 0;
  /* margin-top: 10px; */
  transition: all 0.4s ease;
  min-width: 100%;
}
.pcModules_item-layer {
  position: absolute;
  flex-direction: column;
  top: calc(100%);
  left: 0;
  height: 10px;
  width: 100%;
}
.pcModules_item-main.course ~ .pcModules_item-submenus {
  background: #ebf3ff;
}
.pcModules_item-main.vacancy ~ .pcModules_item-submenus {
  background-color: rgba(135, 47, 248, 0.05);
}
.pcModules_item-main.resume ~ .pcModules_item-submenus {
  background: rgba(47, 79, 248, 0.05);
}
.pcModules_item-main.experts ~ .pcModules_item-submenus {
  background-color: rgb(47, 128, 248, 0.05);
}
.pcModules_item-main.startups ~ .pcModules_item-submenus {
  background: rgba(251, 183, 50, 0.05);
}
.pcModules_item-main.certificates ~ .pcModules_item-submenus {
  background: rgba(0, 176, 108, 0.05);
}
.pcModules_item-main.tests ~ .pcModules_item-submenus {
  background: rgba(81, 21, 184, 0.05);
}
.pcModules_item-main.freelance ~ .pcModules_item-submenus {
  background: rgba(255, 42, 84, 0.05);
}
.pcModules_item:hover .pcModules_item-submenus {
  padding: 36px 30px;
  max-height: 400px;
}
.pcModules_item:hover .pcModules_item-submenu {
  opacity: 1;
}
.pcModules_item-submenu {
  color: #040404;
  font-size: 20px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.2px;
  max-height: 50px;
  opacity: 0;
  transition: all 0.4s;
}
.pcModules_item-submenu:hover {
  opacity: 0.7 !important;
}
</style>

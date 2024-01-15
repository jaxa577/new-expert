<template>
  <!-- <section class="pcModules">
    <div class="pcModules_container container">
      <div class="pcModules_title">
        <h2>Модули</h2>
        <img src="/images/arrow_right.svg" alt="" />
      </div>
      <div
        ref="scrollContainer"
        @mousedown="($event) => startDrag($event, index)"
        class="pcModules_list"
      >
        <div
          v-for="(pcModule, index) in modulesList"
          class="pcModules_item"
          ref="draggableContent"
          :key="index"
        >
          <div
            class="pcModules_item-main"
            @click="toggleSubMenu(index)"
            :class="[{ active: pcModule.showSubMenus }, pcModule.type]"
          >
            <img
              class="pcModules_icon"
              :src="`/images/${pcModule.icon}`"
              alt=""
            />
            {{ pcModule.name }}
          </div>
          <div
            class="pcModules_item-submenus"
            :class="{ closed: !pcModule.showSubMenus }"
          >
            <a
              v-for="(sub, index) in pcModule.subMenus"
              class="pcModules_item-submenu"
              :key="index"
              :href="sub.link"
              >{{ sub.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <section class="pcModules">
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
            @mousedown="($event) => startDrag($event, index)"
            @click="toggleSubMenu(index)"
            :class="[{ active: pcModule.showSubMenus }, pcModule.type]"
          >
            <img
              class="pcModules_icon"
              :src="`/images/${pcModule.icon}`"
              alt=""
            />
            {{ pcModule.name }}
          </div>
          <div
            class="pcModules_item-submenus"
            :class="{ closed: !pcModule.showSubMenus }"
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
  </section>
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
    };
  },

  methods: {
    toggleSubMenu(i) {
      this.modulesList[i].showSubMenus = !this.modulesList[i].showSubMenus;
    },
    startDrag(event, index) {
      let isDragging = true;
      let startPosition = event.clientX;
      let startScrollLeft = this.$refs.scrollContainer.scrollLeft;

      const handleDrag = (event) => {
        if (isDragging) {
          const delta = startPosition - event.clientX;
          this.$refs.scrollContainer.scrollLeft = startScrollLeft + delta;
        }
      };

      const stopDrag = () => {
        isDragging = false;
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
      };

      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", stopDrag);
    },
  },
};
</script>

<style>
.pcModules {
  margin: 50px 0;
}
.pcModules_container {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}
.pcModules_title {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 12px;
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
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 20px;
}
.pcModules_list::-webkit-scrollbar {
  display: none;
}
.pcModules_item {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: fit-content;
  white-space: nowrap;
  cursor: grab;
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
  transition: all 0.3s ease;
}
.pcModules_item-main.active {
  color: var(---White, #fff);
}
.pcModules_item-main.active .pcModules_icon {
  filter: brightness(0) invert(1);
}
.pcModules_item-main.course.active {
  background: var(---, #2f80f8);
}
.pcModules_item-main.vacancy.active {
  background-color: #872ff8;
}
.pcModules_item-main.resume.active {
  background-color: #2f4ff8;
}
.pcModules_item-main.experts.active {
  background-color: #2f80f8;
}
.pcModules_item-main.startups.active {
  background-color: #fbb732;
}
.pcModules_item-main.certificates.active {
  background-color: #00b06c;
}
.pcModules_item-main.tests.active {
  background-color: #5115b8;
}
.pcModules_item-main.freelance.active {
  background-color: #ff2a54;
}
.pcModules_item-submenus {
  border-radius: 20px;
  background: #f2f7ff;
  display: flex;
  align-items: center;
  gap: 30px;
  height: 50px;
  padding: 0 30px;
  max-width: 500px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.pcModules_item-submenus.closed {
  max-width: 0;
  padding: 0;
}
.pcModules_item-submenu {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
}
</style>

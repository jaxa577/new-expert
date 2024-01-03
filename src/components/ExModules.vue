<template>
  <section class="modules">
    <div class="modules_container container">
      <div class="mini_modules-list">
        <miniModuleCard v-for="(item, i) in miniModules" :item="item" />
      </div>
      <div class="modules_list">
        <moduleCard v-for="(item, i) in modules" :module="item" />
      </div>
    </div>
  </section>
</template>

<script>
import moduleCard from "./ExModuleCard.vue";
import miniModuleCard from "./ExMiniModuleCard.vue";
export default {
  components: {
    moduleCard,
    miniModuleCard,
  },

  data() {
    return {
      miniModules: [
        {
          icon: "all-modules.svg",
          title: "Все",
        },
        {
          icon: "mini_edu.svg",
          title: "Обучение",
        },
        {
          icon: "mini_vacancy.svg",
          title: "Вакансии",
        },
        {
          icon: "mini_resume.svg",
          title: "Резюме",
        },
        {
          icon: "mini_startups.svg",
          title: "Стартапы",
        },
        {
          icon: "mini_certificates.svg",
          title: "Сертификаты",
        },
        {
          icon: "mini_tests.svg",
          title: "Тесты",
        },
        {
          icon: "mini_freelance.svg",
          title: "Фрилансер",
        },
      ],
      modules: [
        {
          id: 1,
          type: "course",
          name: "Обучение",
          icon: "mini_edu.svg",
          title: "Обучающие курсы по разным направлениям",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "/courses",
          button: "Курсы",
          img: "course.png",
        },
        {
          id: 2,
          type: "vacancy",
          name: "Вакансии",
          icon: "mini_vacancy.svg",
          title: "Находите вакансии и резюме на разные позиции",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Вакансии",
          img: "course.png",
        },
        {
          id: 3,
          type: "resume",
          name: "Резюме",
          icon: "mini_resume.svg",
          title: "Находите вакансии и резюме на разные позиции",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Резюме",
          img: "course.png",
        },
        {
          id: 4,
          type: "startups",
          name: "Стартапы",
          icon: "mini_startups.svg",
          title: "Инвестируйте в стартапы и создавайте свои",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Стартапы",
          img: "course.png",
        },
        {
          id: 5,
          type: "certification",
          name: "Сертификаты",
          icon: "mini_certificates.svg",
          title: "Получайте сертификацию подтверждающий вашу Экспертность",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Сертификаты",
          img: "course.png",
        },
        {
          id: 6,
          type: "tests",
          name: "Тесты",
          icon: "mini_tests.svg",
          title: "Психологические тесты и диагностика",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Тесты",
          img: "course.png",
        },
        {
          id: 7,
          type: "freelance",
          name: "Фрилансер",
          icon: "mini_freelace.svg",
          title: "Находите заказы для фриланса",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Фрилансер",
          img: "course.png",
        },
        {
          id: 8,
          type: "freelance",
          name: "Фриланс подрядчики",
          icon: "mini_tests.svg",
          title: "Находите заказы и подрядчиков для фриланс заказов",
          text: "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.",
          courseNumber: 100,
          practicsNumber: 132,
          teachers: 20,
          link: "#!",
          button: "Подрядчики",
          img: "course.png",
        },
      ],
    };
  },
};
</script>

<style>
.modules {
  margin-bottom: 100px;
}
.mini_modules-list {
  display: flex;
  gap: 20px;
  margin-bottom: 100px;
  overflow-x: scroll;
}
.modules_list {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

@media only screen and (max-width: 1024px) {
  .mini_module {
    min-width: 200px;
  }
  .mini_modules-list {
    overflow-x: scroll;
  }
  .modules_list {
    gap: 30px;
  }
}
</style>

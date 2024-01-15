<template>
  <pcModules />
  <section class="pcLayout">
    <div class="container pcLayout_container">
      <pcMenuBar @toggle-page="togglePage" class="menu_bar" />
      <div class="pcDynamic_page">
        <pcInfo v-if="activePage == 1" />
        <jobEdu v-if="activePage == 2" />
      </div>
    </div>
  </section>
</template>

<script>
import pcModules from "../components/personal_cabinet/Modules.vue";
import pcMenuBar from "../components/personal_cabinet/CustomMenuBar.vue";
import pcInfo from "../components/personal_cabinet/PersonaInfo.vue";
import jobEdu from "../components/personal_cabinet/JobEdu.vue";

export default {
  components: {
    pcModules,
    pcMenuBar,
    pcInfo,
    jobEdu,
  },

  data() {
    return {
      activePage: 1,
    };
  },

  methods: {
    togglePage(item) {
      this.activePage = item.id;
    },
  },
};
</script>

<style>
.pcLayout {
  padding-bottom: 100px;
}
.pcLayout_container {
  display: flex;
  align-items: flex-start;
  gap: 100px;
  position: relative;
}
.menu_bar {
  position: sticky;
  /* top: 0px; */
}
.pcDynamic_page {
  max-width: 750px;
  width: 100%;
}
.pcInfo {
  /* height: 150vh; */
}
</style>

<template>
  <pcModules />
  <section class="pcLayout">
    <div class="container pcLayout_container">
      <pcMenuBar @toggle-page="togglePage" class="menu_bar" />
      <div class="pcDynamic_page">
        <pcInfo v-if="activePage == 1" />
        <jobEdu v-if="activePage == 2" />
        <pcSecurity v-if="activePage == 5" />
      </div>
    </div>
  </section>
</template>

<script>
import pcModules from "../components/personal_cabinet/Modules.vue";
import pcMenuBar from "../components/personal_cabinet/CustomMenuBar.vue";
import pcInfo from "../components/personal_cabinet/PersonaInfo.vue";
import jobEdu from "../components/personal_cabinet/JobEdu.vue";
import pcSecurity from "../components/personal_cabinet/Security.vue";



export default {
  components: {
    pcModules,
    pcMenuBar,
    pcInfo,
    jobEdu,
    pcSecurity,
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



button {
    transition: 0.3s;
}
button:hover {
    opacity: 0.7;
}
.pcInput{
    border-radius: 10px;
    background: var(--light-grey);
    height: 50px;
    padding: 0 14px;
    width: 100%;
    font-size: 20px;
}
.pcButton-def{
    border-radius: 10px;
    background: var(--c-accent-1);
    width: 100%;
    height: 50px;
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.16px;
}
.pcButton-red{
    border-radius: 10px;
    background: #F43834;
    width: 100%;
    height: 50px;
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.16px;
}
</style>

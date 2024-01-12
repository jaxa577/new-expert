<template>
  <pcModules />
  <section class="pcLayout">
    <div class="container pcLayout_container">
      <pcMenuBar />
      <div class="pcInfo"></div>
    </div>
  </section>
</template>

<script>
import pcModules from "../components/personal_cabinet/Modules.vue";
import pcMenuBar from "../components/personal_cabinet/CustomMenuBar.vue";

export default {
  components: {
    pcModules,
    pcMenuBar,
  },

  data() {
    return {};
  },
};
</script>

<style>
.pcLayout_container {
  display: flex;
  align-items: flex-start;
  gap: 100px;
}
</style>

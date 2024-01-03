<script>
import { RouterLink, RouterView } from "vue-router";
import mainHeader from "./components/ExHeader.vue";
import mainFooter from "./components/ExFooter.vue";

export default {
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>

<template>
  <mainHeader v-if="$route.meta.showHeader" />
  <main>
    <RouterView />
  </main>
  <mainFooter v-if="$route.meta.showFooter" />
</template>

<style></style>

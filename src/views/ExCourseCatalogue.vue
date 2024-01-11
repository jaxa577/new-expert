<template>
  <cHero />
  <cRecs />
  <cCatalogue />
</template>

<script>
import cHero from "../components/course/CHero.vue";
import cRecs from "../components/course/CRecommendatio.vue";
import cCatalogue from "../components/course/ExCatalogue.vue";

export default {
  components: {
    cHero,
    cRecs,
    cCatalogue,
  },
};
</script>

<style></style>

<script>
import cBanner from "../components/course/CBanner.vue";
import cContent from "../components/course/CContent.vue";

export default {
  components: {
    cBanner,
    cContent,
  },
};
</script>

<template>
    <div class="course-page">
        <cBanner/>
        <cContent/>
    </div>
</template>

<style scoped>
    .course-page{
        display: flex;
        flex-direction: column;
        gap: 180px;
        margin: 50px 0;
    }
</style>
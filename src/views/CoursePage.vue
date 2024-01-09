<script>
import cBanner from "../components/course/CBanner.vue";

export default {
  components: {
    cBanner,
  },
};
</script>

<template>
    <div class="course-page">
        <cBanner/>
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
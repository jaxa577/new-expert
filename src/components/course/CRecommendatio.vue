<template>
  <section class="cRecs">
    <div class="cRecs_container container">
      <div class="cRecs_header">
        <h2 class="cRecs_tilte">Рекомендуем Вам!</h2>
        <p class="cRecs_text">Исходя из востребованности и рейтинга курсов</p>
      </div>
      <swiper class="cRecs_swiper" :slides-per-view="3" space-between="20">
        <swiper-slide>
          <courseCard />
        </swiper-slide>
        <swiper-slide>
          <courseCard />
        </swiper-slide>
        <swiper-slide>
          <courseCard />
        </swiper-slide>
        <swiper-slide>
          <courseCard />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import courseCard from "./ExCourseCard.vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    courseCard,
  },
};
</script>

<style>
.cRecs_container {
  border-radius: 30px;
  background: var(---Light-Grey, #f3f3f3);
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cRecs_header {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
}
.cRecs_tilte {
  color: var(---Black, #040404);
  font-size: 42px;
  font-weight: 700;
  line-height: 110%; /* 46.2px */
  letter-spacing: -0.84px;
}
.cRecs_text {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
}
.cRecs {
  margin-bottom: 150px;
}
.cRecs_swiper {
  max-width: 1285px;
}
</style>

<template>
  <section class="hero">
    <div class="hero_container container">
      <swiper class="hero_swiper" :slides-per-view="1">
        <swiper-slide>
          <div class="hero_item">
            <img src="/images/main.png" alt="" />
            <div class="hero_desc">
              <h2>Универсальная платформа Все что нужно, в одном!</h2>
              <p>
                Платформа которая собрала в себе множество инструментов для
                профессиональной деятельности, начните прямо сейчас и получите
                все возможности
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hero_item">
            <img src="/images/main.png" alt="" />
            <div class="hero_desc">
              <h2>Универсальная платформа Все что нужно, в одном!</h2>
              <p>
                Платформа которая собрала в себе множество инструментов для
                профессиональной деятельности, начните прямо сейчас и получите
                все возможности
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hero_item">
            <img src="/images/main.png" alt="" />
            <div class="hero_desc">
              <h2>Универсальная платформа Все что нужно, в одном!</h2>
              <p>
                Платформа которая собрала в себе множество инструментов для
                профессиональной деятельности, начните прямо сейчас и получите
                все возможности
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.hero {
  margin-bottom: 32px;
}
.hero_swiper {
  height: 525px;
  width: 100%;
}
.hero_item {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.hero_item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
}
.hero_desc {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.hero_desc h2 {
  color: var(---Light-Grey, #fafaf9);
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  line-height: 100%; /* 60px */
  letter-spacing: -1.2px;
}
.hero_desc p {
  color: var(---Light-Grey, #fafaf9);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
}

/* ------------------ RESPONSIVE ------------------ */

@media only screen and (max-width: 1024px) {
  .hero_desc {
    width: 80%;
  }
  .hero_desc h2 {
    font-size: 50px;
  }
}

@media only screen and (max-width: 768px) {
  .hero_container {
    padding: 0;
  }
  .hero_desc {
    width: 100%;
    padding: 0 32px;
  }
  .hero_item img {
    border-radius: 0;
    width: 100%;
  }
  .hero_swiper {
    height: 300px;
  }
  .hero_desc h2 {
    font-size: 26px;
    line-height: 100%;
  }
  .hero_desc p {
    font-size: 14px;
    line-height: 100%;
  }
}
</style>

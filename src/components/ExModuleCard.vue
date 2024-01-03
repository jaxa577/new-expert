<template>
  <div
    data-aos="fade-bottom"
    data-aos-duration="600"
    data-aos-delay="500"
    class="module_card"
    :class="module.type"
  >
    <div class="module_card-desc">
      <span
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="500"
        class="module_card-type"
        ><img :src="`/images/${module.icon}`" alt="" /> {{ module.name }}
      </span>

      <h3
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="500"
        class="module_title"
      >
        {{ module.title }}
      </h3>

      <p
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="500"
        class="module_text"
      >
        {{ module.text }}
      </p>
      <div
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="500"
        class="module_extra-details"
      >
        <p class="module_extra-text">
          <span class="module_marked-text"> {{ module.courseNumber }}+</span>
          курсов
        </p>
        <p class="module_extra-text">
          <span class="module_marked-text">{{ module.practicsNumber }}+</span>
          практических заданий
        </p>
        <p class="module_extra-text">
          <span class="module_marked-text">{{ module.teachers }}+</span>
          Преподователей
        </p>
      </div>
      <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
        <a :href="module.link" class="module_btn">
          {{ module.button }}
        </a>
      </div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-delay="500"
      class="module_img-box"
    >
      <img src="/images/course.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    module: Object,
  },
};
</script>

<style>
.module_card {
  width: 100%;
  border-radius: 20px;
  background: var(---Light-Grey, #fafaf9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
}
.module_card-desc {
  max-width: 45%;
  width: 100%;
}
.module_card-type {
  border-radius: 200px;
  background: var(---White, #fff);
  padding: 10px;
  color: var(---Accent, #1e75f8);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  letter-spacing: 0.32px;
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
}
.module_card-type img {
  filter: brightness(0) saturate(100%) invert(32%) sepia(63%) saturate(3410%)
    hue-rotate(209deg) brightness(103%) contrast(94%);
}
.module_title {
  color: var(---Black, #040404);
  font-size: 42px;
  font-weight: 700;
  line-height: 100%; /* 42px */
  letter-spacing: -0.84px;
  margin-bottom: 27px;
  margin-top: 38px;
}
.module_text {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 20px;
  font-weight: 400;
  line-height: 100%; /* 20px */
  margin-bottom: 27px;
}
.module_extra-details {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 38px;
}
.module_extra-text {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
}
.module_marked-text {
  color: var(---Accent, #1e75f8);
  font-weight: 700;
}
.module_btn {
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 200px;
  background: var(---, #2f80f8);
  padding: 20px 10px;
  color: var(---White, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  letter-spacing: 0.32px;
  transition: all 0.3s ease;
}
.module_btn:hover {
  opacity: 0.7;
  color: #fff;
}
.module_img-box {
  width: 45%;
}
.module_img-box img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  border-radius: 20px;
}

/* ----------------- VACANCY -----------------*/
.module_card.vacancy .module_card-type,
.module_card.vacancy .module_marked-text {
  color: #872ff8;
}
.module_card.vacancy .module_card-type img {
  filter: brightness(0) saturate(100%) invert(25%) sepia(89%) saturate(5010%)
    hue-rotate(261deg) brightness(97%) contrast(100%);
}
.module_card.vacancy .module_btn {
  background: #872ff8;
}
/* ----------------- VACANCY -----------------*/

/* ----------------- RESUME -----------------*/
.module_card.resume .module_card-type,
.module_card.resume .module_marked-text {
  color: #2f4ff8;
}
.module_card.resume .module_card-type img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(53%) saturate(7451%)
    hue-rotate(231deg) brightness(100%) contrast(95%);
}
.module_card.resume .module_btn {
  background: #2f4ff8;
}
/* ----------------- RESUME -----------------*/

/* ----------------- STARTUPS -----------------*/
.module_card.startups .module_card-type,
.module_card.startups .module_marked-text {
  color: #fbb732;
}
.module_card.startups .module_card-type img {
  filter: brightness(0) saturate(100%) invert(72%) sepia(97%) saturate(902%)
    hue-rotate(334deg) brightness(107%) contrast(97%);
}
.module_card.startups .module_btn {
  background: #fbb732;
}
/* ----------------- STARTUPS -----------------*/

/* ----------------- CERTIFICATION -----------------*/
.module_card.certification .module_card-type,
.module_card.certification .module_marked-text {
  color: #00b06c;
}
.module_card.certification .module_card-type img {
  filter: brightness(0) saturate(100%) invert(52%) sepia(86%) saturate(3563%)
    hue-rotate(129deg) brightness(95%) contrast(101%);
}
.module_card.certification .module_btn {
  background: #00b06c;
}
/* ----------------- CERTIFICATION -----------------*/

/* ----------------- TESTS -----------------*/
.module_card.tests .module_card-type,
.module_card.tests .module_marked-text {
  color: #5115b8;
}
.module_card.tests .module_card-type img {
  filter: brightness(0) saturate(100%) invert(9%) sepia(74%) saturate(5686%)
    hue-rotate(267deg) brightness(100%) contrast(96%);
}
.module_card.tests .module_btn {
  background: #5115b8;
}
/* ----------------- TESTS -----------------*/

/* ----------------- FREELANCE -----------------*/
.module_card.freelance .module_card-type,
.module_card.freelance .module_marked-text {
  color: #ff2a54;
}
.module_card.freelance .module_card-type img {
  filter: brightness(0) saturate(100%) invert(42%) sepia(65%) saturate(7499%)
    hue-rotate(333deg) brightness(103%) contrast(101%);
}
.module_card.freelance .module_btn {
  background: #ff2a54;
}
/* ----------------- FREELANCE -----------------*/

/* ----------------- RESPONSIVE -----------------*/
@media only screen and (max-width: 1024px) {
  .module_card {
    flex-direction: column-reverse;
    gap: 30px;
  }
  .module_card-desc {
    max-width: 100%;
  }
  .module_img-box {
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .module_card {
    padding: 40px 20px;
  }
  .module_img-box img {
    height: 230px;
  }
  .module_title {
    font-size: 24px;
    margin-bottom: 14px;
    margin-top: 20px;
  }
  .module_text {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .module_extra-details {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

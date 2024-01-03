<template>
  <section class="cHero">
    <div class="cHero_container container">
      <div class="cHero_header">
        <h2 class="cHero_header-title">Обучение</h2>
        <div class="cHero_header-btns">
          <a class="cHero_course-btn" href="#!">Найти курс</a>
          <a class="cHero_course-btn" href="#!">Мои курсы</a>
          <a class="cHero_main-btn" href="#!">Добавить свой курс</a>
        </div>
      </div>

      <div class="cHero_main">
        <div class="cHero_main-inner">
          <h2 class="cHero_main-title">Хотите зарабатывать на своем курсе ?</h2>
          <button class="cHero_main-btn">Поехали</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
.cHero {
  margin-bottom: 150px;
}
.cHero_container {
}
.container {
}
.cHero_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0;
}
.cHero_header-title {
  color: var(---Black, #040404);
  font-size: 30px;
  font-weight: 700;
  line-height: 120%; /* 36px */
  letter-spacing: -0.6px;
}
.cHero_header-btns {
  display: flex;
  gap: 20px;
}
.cHero_course-btn {
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  padding: 20px 10px;
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
}
.cHero_main-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 185px;
  border-radius: 200px;
  background: var(---Accent, #1e75f8);
  padding: 20px 10px;
  color: var(---White, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  transition: all 0.3s ease;
}
.cHero_main-btn:hover {
  color: #fff;
  opacity: 0.7;
}
.cHero_main {
  width: 100%;
  height: 490px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/cHero_cover.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}
.cHero_main-inner {
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.cHero_main-title {
  color: var(---Light-Grey, #fafaf9);
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  line-height: 100%; /* 60px */
  letter-spacing: -1.2px;
}
</style>

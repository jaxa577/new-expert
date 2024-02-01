<template>
  <div class="operCard">
    <div class="operCard_main">
      <div class="operCard_main-left">
        <div class="operCard_icon">
          <img src="/media/store/svgs/edu_original.svg" />
        </div>
        <div class="operCard_main-desc">
          <h3>Веб дизайн для начинающих</h3>
          <p>
            20 Декабря 2023
            <span>+200 000 сум</span>
          </p>
        </div>
      </div>
      <button class="openCard_main-btn">
        <p>Закрыть</p>
        <p>Подробнее</p>
      </button>
    </div>
    <div class="operCard_info">
      <div class="operCard_info-desc">
        <h3>Веб дизайн для начинающих</h3>
        <p>User_90 купил этот курс</p>
      </div>
      <a>Аналитика курса</a>
    </div>
    <div class="operCard_info">
      <div class="operCard_info-desc">
        <h3>200 000 сум</h3>
        <p>Сумма платежа</p>
      </div>
      <a>Вывод</a>
    </div>
  </div>
</template>

<script></script>

<style>
.operCard {
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: #fff;
  padding: 20px;
}
.operCard_main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.operCard_main-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.operCard_icon {
  border-radius: 10px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: var(---White, #fff);
  width: 60px;
  min-width: 60px;
  max-width: 60px;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
}
.operCard_main-desc h3,
.operCard_info-desc h3 {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 700;
  line-height: 110%; /* 22px */
  margin-bottom: 20px;
}
.operCard_main-desc p,
.operCard_info-desc p {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 130%; /* 26px */
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.operCard_main-desc p span {
  color: var(---Accent, #1e75f8);
  font-weight: 700;
}
.openCard_main-btn {
  border-radius: 200px;
  background: var(---Light-Grey, #f3f3f3);
  min-width: 130px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.operCard_info {
  padding: 30px 0;
}
.operCard_info.center {
  border: 1px 0 1px 0 solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.operCard_info-desc a {
  color: var(---Accent, #1e75f8);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
  text-decoration-line: underline;
}
</style>

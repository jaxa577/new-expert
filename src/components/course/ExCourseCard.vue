<template>
  <div class="course_card">
    <div class="course_img-box">
      <img class="course_img" src="/images/course_cover.png" alt="" />
      <span class="course_rating"
        >4.1 <img src="/images/star.svg" alt=""
      /></span>
      <button class="course_like-btn">
        <img src="/images/heart.svg" alt="" />
      </button>
    </div>

    <div class="course_card-main">
      <div class="course_card-header">
        <h3 class="course_name">Графический дизайн для новичков</h3>

        <div class="course_company-info">
          <div class="company_logo">
            <img src="/images/comp_logo.svg" alt="" />
          </div>
          <div class="course_comp-desc">
            <h4>Meta inc.</h4>
            <p>ИТ компания</p>
          </div>
        </div>
      </div>

      <div class="course_card-details">
        <h4 class="course_details-title">Курс включает:</h4>
        <ul class="course_details-list">
          <li>120 видео уроков</li>
          <li>90 практических заданий</li>
          <li>24/7 онлайн чат</li>
        </ul>
      </div>

      <div class="course_price-box">
        <h4>999 000 сум</h4>
        <p>1 999 000 сум</p>
      </div>

      <button class="course_card-btn">Подробнее</button>
    </div>
  </div>
</template>

<script>
</script>

<style>
.course_card {
  border-radius: 20px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  background: var(---White, #fff);
  overflow: hidden;
}
.course_img-box {
  position: relative;
  height: 215px;
  width: 100%;
}
.course_img {
  width: 100%;
  height: 215px;
  object-fit: cover;
}
.course_rating {
  position: absolute;
  top: 25px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(---Black, #040404);
  font-size: 14px;
  font-weight: 700;
  line-height: 100%; /* 14px */
  letter-spacing: 0.14px;
  border-radius: 8px;
  background: var(---Light-Grey, #f3f3f3);
  padding: 8px 13px;
}
.course_like-btn {
  position: absolute;
  right: 30px;
  bottom: -25px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: var(---Light-Grey, #f3f3f3);
}
.course_card-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px 30px 30px;
  margin-top: 30px;
}
.course_name {
  color: var(---Black, #040404);
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.48px;
  margin-bottom: 20px;
}
.course_company-info {
  display: flex;
  align-items: center;
  gap: 20px;
}
.company_logo {
  width: 40px;
  height: 40px;
}
.course_comp-desc p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}
.course_comp-desc h4 {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.2px;
  margin-bottom: 8px;
}
.course_details-title {
  color: var(---Black, #040404);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 14px;
}
.course_details-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: disc;
  padding-left: 30px;
}
.course_details-list li {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}
.course_price-box {
  display: flex;
  align-items: center;
  gap: 15px;
}
.course_price-box h4 {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 700;
  line-height: 110%;
}
.course_price-box p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  text-decoration: line-through;
}
.course_card-btn {
  border-radius: 200px;
  background: var(---Accent, #1e75f8);
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(---White, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.16px;
  transition: all 0.3s ease;
}
.course_card-btn:hover {
  opacity: 0.7;
}
</style>

<template>
  <div class="pCard">
    <img class="pCard_bottom_bckg" src="/images/pCard_bottom_bckg.svg" alt="" />
    <img class="pCard_top_bckg" src="/images/pCard_top_bckg.svg" alt="" />
    <div class="pCard_main">
      <div class="pCard_inner">
        <div class="pCard_image">
          <img src="/images/visa.svg" alt="" />
        </div>
        <div class="pCard_numbers">
          <p class="num">9876 5432 1098 7654</p>
          <p>06/24 <span>Chris Glasser</span></p>
        </div>
      </div>

      <button class="pCard_del-btn">
        <img src="/images/trashcan_red.svg" alt="" />
      </button>
    </div>

    <div class="pCard_bottom">
      <button class="pCard_main-btn">Основная</button>
      <button class="pCard_edit">Изменить</button>
    </div>
  </div>
</template>

<script></script>

<style>
.pCard {
  position: relative;
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: var(---Light-Grey, #f3f3f3);
  max-width: 450px;
  min-width: 450px;
  width: 450px;
  padding: 20px 14px;
}
.pCard_bottom_bckg {
  position: absolute;
  right: 40px;
  bottom: 0;
}
.pCard_top_bckg {
  position: absolute;
  right: 40px;
  top: 0;
}
.pCard_main {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 17px;
  border-bottom: 1px solid #ffffff;
}
.pCard_inner {
  display: flex;
  align-items: center;
  gap: 20px;
}
.pCard_image {
  width: 110px;
  height: 80px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pCard_image img {
  width: 90px;
  height: 30px;
  object-fit: contain;
}
.pCard_numbers p {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  gap: 17px;
}
.pCard_numbers .num {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 700;
  line-height: 110%; /* 22px */
  margin-bottom: 17px;
}
.pCard_del-btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  background: var(---White, #fff);
}
.pCard_bottom {
  margin-top: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
.pCard_bottom button {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
}
.pCard_main-btn {
  border-radius: 20px;
  background: var(---White, #fff);
  padding: 20px 16px;
}
</style>

<template>
  <div class="pcPM">
    <div class="pcPM_balance">
      <h3 class="pcPM_title">Баланс</h3>

      <div class="pcPM_box">
        <div class="pcPM_balance-wallet">
          <img
            class="wallet_top-bckg"
            src="/images/wallet_top_bckg.svg"
            alt=""
          />
          <img
            class="wallet_bottom-bckg"
            src="/images/wallet_bottom_bckg.svg"
            alt=""
          />
          <div class="pcPM_wallet-extra">
            <p class="pcPM_wallet-date">с 20 Марта 2023</p>
            <span class="pcPM_wallet-income-state">
              <img src="/images/arrow_top.svg" alt="" />
              +0.5%
            </span>
          </div>

          <div class="pcPM_wallet-main">
            <div class="pcPM_wallet-balance">
              <h3>1 200 000 <span>сум</span></h3>
              <p>Заработано</p>
            </div>

            <div class="pcPM_wallet-btns">
              <button>Пополнить</button>
              <button>Вывод</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pcPM_cards">
      <swiper class="hero_swiper" :slides-per-view="1.5">
        <swiper-slide>
          <plasticCard />
        </swiper-slide>
        <swiper-slide>
          <plasticCard />
        </swiper-slide>
        <swiper-slide>
          <plasticCard />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import plasticCard from "./PlasticCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    plasticCard,
  },

  data() {
    return {};
  },
};
</script>

<style>
.pcPM {
  width: 100%;
}
.pcPM_balance {
  width: 100%;
  margin-bottom: 100px;
}
.pcPM_title {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
  margin-bottom: 20px;
}
.pcPM_box {
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  padding: 24px 20px;
}
.pcPM_balance-wallet {
  position: relative;
  border-radius: 20px;
  background: var(---Accent, #1e75f8);
  padding: 25px 20px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pcPM_wallet-extra {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pcPM_wallet-date {
  color: var(---Light-Grey, #f3f3f3);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.pcPM_wallet-income-state {
  color: var(---White, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.pcPM_wallet-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}
.pcPM_wallet-balance h3 {
  color: var(---White, #fff);
  font-size: 42px;
  font-weight: 700;
  line-height: 110%; /* 46.2px */
  letter-spacing: -0.84px;
  margin-bottom: 20px;
}
.pcPM_wallet-balance p {
  color: var(---Light-Grey, #f3f3f3);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
}
.pcPM_wallet-balance span {
  font-size: 20px;
}
.pcPM_wallet-btns {
  display: flex;
  gap: 10px;
  position: relative;
  z-index: 9;
}
.pcPM_wallet-btns button {
  border-radius: 200px;
  background: var(---White, #fff);
  padding: 20px 10px;
  color: var(---Accent, #1e75f8);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
}
.wallet_top-bckg {
  position: absolute;
  top: 0;
  right: 105px;
}
.wallet_bottom-bckg {
  position: absolute;
  bottom: 0;
  right: 85px;
}
</style>

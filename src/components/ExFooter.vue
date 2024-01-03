<template>
  <footer class="footer">
    <div class="footer_container container">
      <div class="footer_inner">
        <div class="footer_main">
          <div class="footer_left">
            <a class="footer_logo" href="#!"
              ><img src="/images/dark-logo.svg" alt=""
            /></a>
            <p>
              Все содержимое, размещенное на нашем сайте, защищено авторскими
              правами. Мы являемся владельцами исключительных прав на тексты,
              изображения, видео, аудио и другие материалы, размещенные на
              сайте, если не указано иное.
            </p>
            <div class="footer_payments">
              <p>Денежные переводы через:</p>
              <div class="footer_payments-logo">
                <img src="/images/paypal.svg" alt="" />
                <img src="/images/mastercard.svg" alt="" />
                <img src="/images/realpay.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="footer_right">
            <div class="footer_nav">
              <h3 class="footer_title">Навигация</h3>
              <div class="footer_nav-list">
                <a href="#!">О нас</a>
                <a href="#!">Модули</a>
                <a href="#!">Компаниям</a>
                <a href="#!">Новости</a>
              </div>
            </div>

            <div class="footer_dirs">
              <h3 class="footer_title">Направлении</h3>
              <div class="footer_dirs-list">
                <a href="#!"
                  ><img src="/images/mini_edu.svg" alt="" />Обучение</a
                >
                <a href="#!"
                  ><img src="/images/mini_vacancy.svg" alt="" />Вакансии</a
                >
                <a href="#!"
                  ><img src="/images/mini_resume.svg" alt="" />Резюме</a
                >
                <a href="#!"
                  ><img src="/images/mini_tests.svg" alt="" />Тесты</a
                >
                <a href="#!"
                  ><img
                    src="/images/mini_certificates.svg"
                    alt=""
                  />Сертификаты</a
                >
                <a href="#!"
                  ><img src="/images/mini_freelance.svg" alt="" />Фрилансер</a
                >
                <a href="#!"
                  ><img src="/images/mini_freelances.svg" alt="" />Фриланс
                  подрядчики</a
                >
              </div>
            </div>

            <div class="footer_contact">
              <h3 class="footer_title">Контакты</h3>
              <div class="footer_contacts-list">
                <a href="#!"
                  >100084, Узбекистан, г. Ташкент, Малая кольцевая дорога, 35</a
                >
                <a href="#!">info@realsoft.uz</a>
                <a tel href="#!">+998 71 205 84 84</a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bottom">
          <a class="footer_real-soft" href="https://realsoft.uz/home"
            ><img src="/images/c.svg" alt="" />2023 Realsoft</a
          >
          <div class="footer_bottom-list">
            <a href="#!">Офферта</a>
            <a href="#!">Платежная информация</a>
            <a href="#!">Публичный договор</a>
            <a href="#!">Политика конфедициальности</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style>
.footer_inner {
  border-radius: 30px;
  background: var(---Black, #040404);
  padding: 100px 80px 50px 80px;
}
.footer_main {
  display: flex;
  gap: 70px;
  justify-content: space-between;
  padding-bottom: 22px;
  border-bottom: 1px solid #6c6c6c;
}
.footer_right {
  display: flex;
  gap: 70px;
}
.footer_left {
  max-width: 30%;
  width: 100%;
}
.footer_left p {
  color: var(---Light-Grey, #f3f3f3);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
  margin-top: 30px;
}
.footer_payments {
  margin-top: 50px;
}
.footer_payments p {
  margin-top: 0;
}
.footer_payments-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
}
.footer_title {
  color: var(---Accent, #1e75f8);
  font-size: 20px;
  font-weight: 700;
  line-height: 100%; /* 20px */
  margin-bottom: 40px;
}
.footer_nav-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer_nav-list a {
  color: var(---Light-Grey, #f3f3f3);
  font-size: 16px;
  font-weight: 400;
  line-height: 100%; /* 16px */
}
.footer_dirs {
  max-width: 40%;
  width: 100%;
}
.footer_dirs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.footer_dirs-list a {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 15px 10px;
  border-radius: 200px;
  border: 1px solid var(---Dark-grey, #292929);
  color: var(---Light-Grey, #f3f3f3);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  letter-spacing: 0.32px;
}
.footer_contacts-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer_contacts-list a {
  color: var(---Light-Grey, #f3f3f3);
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
}
.footer_bottom {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer_real-soft {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 100%; /* 16px */
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  gap: 6px;
}
.footer_real-soft:hover {
  opacity: 0.7;
}
.footer_bottom-list {
  display: flex;
  align-items: center;
  gap: 43px;
}
.footer_bottom-list a {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 0.28px;
}
a {
  transition: all 0.3s ease;
}
a:hover {
  opacity: 0.7;
}

@media only screen and (max-width: 1440px) {
  .footer_main {
    flex-direction: column;
  }
  .footer_left {
    max-width: fit-content;
    width: 100%;
  }
}
@media only screen and (max-width: 1024px) {
  .footer_inner {
    padding: 40px 20px;
  }
  .footer_right {
    flex-wrap: wrap;
  }
  .footer_dirs {
    max-width: fit-content;
    width: 100%;
  }
  .footer_bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 40px;
  }
  .footer_bottom-list {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  .footer_container {
    padding: 0;
  }
  .footer_inner {
    border-radius: 0;
  }
  .footer_main,
  .footer_right {
    gap: 40px;
  }
  .footer_logo img {
    height: 23px;
  }
  .footer_bottom-list {
    gap: 20px;
  }
}
</style>

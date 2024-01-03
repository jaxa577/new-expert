<template>
  <header class="header">
    <div :class="{ scrolled: isScrolled, opened: isMobile }" class="header">
      <div class="header_container container">
        <div class="header_left">
          <a class="header_logo" href="#!"
            ><img
              class="header_main-logo"
              src="/images/header-logo.svg"
              alt="" />
            <img class="header_mob-logo" src="/images/mobile_logo.svg" alt=""
          /></a>
          <button
            @click="toggleNavState"
            :class="{ cross: !isNavOpened }"
            class="header_burger"
          >
            <!-- <img src="/images/burger.svg" alt="" /> -->
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
          <button class="header_tooltip">
            <img src="/images/tooltip.svg" alt="" />
          </button>
        </div>

        <div
          :class="{ mobOpenMenu: !isNavOpened }"
          class="header_nav_search-wrapper"
        >
          <div :class="{ 'nav-close': isNavOpened }" class="header_nav-bar">
            <a class="header_nav-item" href="#!">О нас</a>
            <a class="header_nav-item" href="#!">Модули</a>
            <a class="header_nav-item" href="#!">Обучаем компании</a>
            <a class="header_nav-item" href="#!">Медиа</a>
            <a class="header_nav-item" href="#!">Контакты</a>
          </div>
          <div :class="{ 'search-close': !isNavOpened }" class="header_search">
            <input
              placeholder="Поиск по названию"
              type="text"
              name="global_search"
            />
            <button class="search_btn">
              <img src="/images/search.svg" alt="" />
            </button>
          </div>
        </div>

        <div
          @mouseover="isContactHovered = true"
          @mouseout="isContactHovered = false"
          class="header_contact-holder"
        >
          <div class="header_contact-icon">
            <img src="/images/phone.svg" alt="" />
          </div>
          <div :class="{ hovered: isContactHovered }" class="header_contact">
            <div
              :class="{ hovered: isContactHovered }"
              class="header_contact-desc"
            >
              <h3>Номер телефона</h3>
              <p>+998 (90) 123 45 67</p>
            </div>
          </div>
        </div>

        <div class="header_login-btns">
          <button class="mob_user">
            <img src="/images/accaunt.svg" alt="" />
          </button>
          <button class="header_reg">Регистрация</button>
          <button class="header_login">Вход</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpened: true,
      isScrolled: false,
      isContactHovered: false,
      isMobile: false,
    };
  },

  mounted() {
    ["mousewheel", "scroll"].forEach((evt) =>
      window.addEventListener(evt, this.handleScroll, false)
    );
  },

  methods: {
    toggleContactStaste() {
      this.isContactHovered = !this.isContactHovered;
      console.log(this.isContactHovered);
    },
    toggleNavState() {
      this.isNavOpened = !this.isNavOpened;
    },
    handleScroll() {
      let screenWidth = window.innerWidth;
      if (screenWidth < 577) return;

      if (window.pageYOffset > 140) {
        this.isScrolled = true;
      } else if (
        this.isScrolled &&
        window.pageYOffset <= 140 &&
        window.pageYOffset > 0
      ) {
        return;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<style>
/* .header {
  height: 100px;
  display: flex;
  align-items: center;
} */
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  height: 100px;
  display: flex;
  align-items: center;
  transition: 0.3s;
}
.header.scrolled {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-100px);
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.1);
  animation: headerAppear 0.3s 1 ease-in-out forwards;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}
.header_mob-logo {
  display: none;
}
.header_container {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}
.header_left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header_logo {
  padding: 0 38px;
  border-radius: 15px;
  background: var(---Light-Grey, #f3f3f3);
  height: 60px;
  display: flex;
  align-items: center;
}
.header_burger {
  border-radius: 15px;
  background: var(---Light-Grey, #f3f3f3);
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.burger-line {
  display: block;
  width: 27px;
  height: 3px;
  border-radius: 200px;
  background: #040404;
  transition: all 0.3s ease;
}
.header_burger.cross .burger-line:nth-child(1) {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}
.header_burger.cross .burger-line:nth-child(3) {
  transform: rotate(-45deg) translateY(-5px) translateX(6px);
}
.header_burger.cross .burger-line:nth-child(2) {
  opacity: 0;
}
.header_tooltip {
  border-radius: 15px;
  background: var(---Light-Grey, #f3f3f3);
  width: 60px;
  height: 60px;
}
.header_nav_search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 60px;
  overflow: hidden;
}
.header_nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  border-radius: 15px;
  background: var(---Light-Grey, #f3f3f3);
  height: 60px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transform: translateX(0);
  transition: all 0.3s linear;
  opacity: 1;
}
.header_nav-bar.nav-close {
  transform: translateX(-100%);
  opacity: 0;
}
.header_nav-item {
  color: var(---Dark-grey, #6c6c6c);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.header_search {
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  transition: all 0.3s linear;
  opacity: 1;
  transform: translateX(0);
}
.header_search.search-close {
  transform: translateX(100%);
  opacity: 0;
}
.header_search input {
  width: 100%;
  border-radius: 15px 0 0 15px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  padding: 0 20px;
  height: 60px;
}
.search_btn {
  border-radius: 0 15px 15px 0;
  background: var(---Light-Grey, #f3f3f3);
  width: 60px;
  height: 60px;
}
.header_contact-holder {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  background: #ffffff;
  padding-right: 10px;
}
.header_contact-icon {
  width: 60px;
  height: 60px;
  margin-left: -3px;
  border-radius: 15px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: var(---Light-Grey, #f3f3f3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_contact-desc {
  display: flex;
  flex-direction: column;
}
.header_contact-desc h3 {
  color: var(---Black, #040404);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
}
.header_contact-desc p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.header_login-btns {
  display: flex;
  align-items: center;
  gap: 16px;
}
.header_reg {
  padding: 0 28px;
  height: 60px;
  border-radius: 200px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  color: var(---Accent, #1e75f8);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  background: #ffffff;
  transition: all 0.3s ease;
}
.header_reg:hover {
  /* background: var(---Light-Grey, #f3f3f3); */
  opacity: 0.7;
}
.header_login {
  padding: 0 28px;
  height: 60px;
  border-radius: 200px;
  background: #f3f3f3;
  color: var(---Accent, #1e75f8);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  transition: all 0.3s ease;
}
.header_login:hover {
  /* background-color: #fff; */
  opacity: 0.7;
}
.mob_user {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 0.725px solid var(---Light-Grey, #f3f3f3);
  background: var(---Light-Grey, #f3f3f3);
  transition: all 0.3s ease;
  display: none;
}
.mob_user:hover {
  opacity: 0.7;
}
@keyframes headerAppear {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}

/* ------------- RESPONSIVE -------------*/

@media screen and (max-width: 1440px) {
  .header_contact-holder {
    padding-right: 0;
    position: relative;
  }
  .header_contact {
    position: absolute;
    width: 350px;
    top: calc(100% + 20px);
    left: -145px;
    overflow: hidden;
    display: none;
  }
  .header_contact.hovered {
    display: block;
  }
  .header_contact-desc {
    border-radius: 15px;
    background: var(---Light-Grey, #f3f3f3);
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
  }
  .header_contact-desc.hovered {
    transform: translate(0);
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  .header_left {
    flex-grow: 1;
  }
  .header_nav_search-wrapper {
    position: absolute;
    top: 80px;
    left: 0;
    width: calc(100% - 40px);
    border-radius: 0 30px 30px 0;
    border: 2px solid var(---Light-Grey, #f3f3f3);
    background: var(---White, #fff);
    padding: 50px 18px 22px 30px;
    height: fit-content;
    flex-direction: column;
    gap: 30px;
    transform: translateX(calc(-100% - 40%));
    /* opacity: 0; */
    transition: all 0.4s ease;
  }
  .header_nav_search-wrapper.mobOpenMenu {
    transform: translate(0);
    opacity: 1;
  }
  .header_nav-bar,
  .header_nav-bar.nav-close {
    position: static;
    flex-direction: column;
    height: fit-content;
    background-color: unset;
    align-items: flex-start;
    transform: translateX(0) !important;
    opacity: 1;
  }
  .header_search,
  .search-close.search-close {
    position: static;
    transform: translateX(0) !important;
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  .header_left,
  .header_container {
    gap: 10px;
  }
  .mob_user {
    display: flex;
  }
  .header_main-logo {
    display: none;
  }
  .header_mob-logo {
    display: block;
  }
  .header_nav_search-wrapper {
    top: 75px;
  }
  .header_logo {
    padding: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header_burger {
    width: 50px;
    height: 50px;
    gap: 4px;
  }
  .burger-line {
    width: 18px;
    height: 2px;
  }
  .header_burger.cross .burger-line:nth-child(3) {
    transform: rotate(-45deg) translateY(-3.5px) translateX(5px);
  }
  .header_burger.cross .burger-line:nth-child(1) {
    transform: rotate(45deg) translateY(4px) translateX(5px);
  }
  .header_tooltip,
  .header_contact-icon {
    width: 50px;
    height: 50px;
  }
  .header_tooltip img {
    width: 20px;
  }
  .header_contact-holder {
    border: none;
    background: none;
  }
  .header_contact-icon {
    border-radius: 50%;
    background: var(---Accent, #1e75f8);
    border: none;
  }
  .header_contact-icon img {
    filter: brightness(0) invert(1);
  }
  .header_login,
  .header_reg {
    display: none;
  }
}
</style>

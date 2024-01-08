<template>
  <section class="login">
    <div class="login_container container">
      <div class="login_inner">
        <div class="login_tab">
          <div
            v-for="(tab, index) in tabs"
            class="login_tab-item"
            @click="toggleTab(tab.id)"
            :class="{ active: currentTab == tab.id }"
            :key="index"
          >
            <p>{{ tab.name }}</p>
          </div>
        </div>

        <div v-if="currentTab == 1" class="signin">
          <div class="login-inputs">
            <div class="input-section login_input">
              <label for="login-login" class="input_title">Логин</label>
              <div class="input_field">
                <input
                  class="input__field default-input"
                  id="login-login"
                  placeholder="+998 (90) 123 45 67"
                  type="text"
                />
              </div>
            </div>
            <div class="input-section login_input">
              <label for="password-password" class="input_title">Пароль</label>
              <div class="input_field">
                <input
                  class="input__field default-input"
                  id="password-password"
                  placeholder="Пароль"
                  type="password"
                />
              </div>
              <div class="reset-pass_btn underlined-btn">
                <span>Забыли пароль ?</span>
              </div>
            </div>
          </div>
          <div class="login-control">
            <button class="login_btn">Войти</button>
            <div class="devider">
              <div class="devider-line"></div>
              <span>или</span>
              <div class="devider-line"></div>
            </div>
            <div class="login-ways">
              <a href="#" class="outlined-btn">
                <img class="login-icon" src="../assets/img/E-IMZO.png" />
                <span>Войти через ЭЦП</span>
              </a>
              <a href="#" class="outlined-btn">
                <img class="login-icon" src="../assets/img/Google.png" />
                <span>Войти через Google</span>
              </a>
            </div>
          </div>
        </div>

        <div v-if="currentTab == 2" class="signup">
          <div class="dropdowns_list">
            <div
              :class="{ active: isPhisOpened }"
              class="inner_dropdown-wrapper"
            >
              <div @click="toggleDrops(1)" class="dropdown_btn">
                <div class="dropdown_btn-left">
                  <img src="/images/user.svg" alt="" />
                  Физическое лицо
                </div>
                <img src="/images/arrow_right.svg" alt="" />
              </div>

              <div class="dropdown_content">
                <div class="login_input">
                  <label for="physic_login">Логин</label>
                  <input
                    type="text"
                    placeholder="+998 (90) 123 45 67"
                    id="physic_login"
                  />
                </div>
                <div class="login_input">
                  <label for="physic_login">Пароль</label>
                  <input
                    type="text"
                    placeholder="Пароль"
                    id="physic_password"
                  />
                </div>
                <div class="login_input">
                  <label for="physic_login">Ник</label>
                  <input
                    type="text"
                    placeholder="Smart_boy_01"
                    id="physic_nick"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div
              :class="{ active: isCompOpened }"
              class="inner_dropdown-wrapper"
            >
              <div @click="toggleDrops(2)" class="dropdown_btn">
                <div class="dropdown_btn-left">
                  <img src="/images/users.svg" alt="" />
                  Юридическое лицо
                </div>
                <img src="/images/arrow_right.svg" alt="" />
              </div>

              <div class="dropdown_content">
                <div class="login_input">
                  <label for="comp_login">Логин</label>
                  <input
                    type="text"
                    placeholder="+998 (90) 123 45 67"
                    id="comp_login"
                  />
                </div>
                <div class="login_input">
                  <label for="comp_password">Пароль</label>
                  <input type="text" placeholder="Пароль" id="comp_password" />
                </div>
                <div class="login_input">
                  <label for="comp_nick">Название компании</label>
                  <input type="text" placeholder="Wargaming" id="comp_nick" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="agreements">
            <div class="radio_wrapper">
              <input type="radio" name="" id="offer" />
              <label for="offer">Ознакомился с предложением</label>
            </div>
            <div class="radio_wrapper">
              <input type="radio" name="" id="confed" />
              <label for="confed"
                >Ознакомился с политикой конйедециальности</label
              >
            </div>
          </div>
          <button class="login_btn">Войти</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script >
export default {
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "Вход",
        },
        {
          id: 2,
          name: "Регистрация",
        },
      ],
      currentTab: 1,
      isPhisOpened: false,
      isCompOpened: false,
      isDropdownVisible: false,
      isAgreeOffer: false,
      isAgreeConf: false,
    };
  },

  methods: {
    toggleTab(id) {
      this.currentTab = id;
    },

    toggleDrops(id) {
      this.isPhisOpened = id == 1 ? true : false;
      this.isCompOpened = id == 2 ? true : false;
    },
  },
};
</script>

<style>
.login {
  margin-top: 70px;
}
.login_container {
  display: flex;
  justify-content: center;
}
.login_inner {
  border-radius: 25px;
  border: 1.4px solid var(---Light-Grey, #f3f3f3);
  background: var(---White, #fff);
  padding: 60px 50px;
  max-width: 500px;
  width: 100%;
}
.login_tab {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: var(---Light-Grey, #f3f3f3);
  padding: 2px 4px;
  margin-bottom: 50px;
}
.login_tab-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  border-radius: 200px;
  background: var(---, #f6f6f6);
  cursor: pointer;
  color: var(---, #757575);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  transition: all 0.3s ease-in-out;
}
.login_tab-item.active {
  background: var(---Accent, #1e75f8);
  color: var(---White, #fff);
}
.dropdowns_list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.inner_dropdown-wrapper {
  max-height: 50px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.inner_dropdown-wrapper.active {
  max-height: 500px;
}
.inner_dropdown-wrapper.active .dropdown_btn {
  opacity: 1;
}
.dropdown_btn {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  border-radius: 14px;
  background: var(---Light-Grey, #f3f3f3);
  height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;
  opacity: 0.6;
  cursor: pointer;
}
.dropdown_btn-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.dropdown_content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  padding: 28px 21px;
}
.login_input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login_input input {
  width: 100%;
  border-radius: 14px;
  background: var(---Light-Grey, #f3f3f3);
  height: 50px;
  padding: 0 20px;
}
.login_input label {
  color: var(---Black, #040404);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
}
.login_input p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 0.14px;
}
.agreements {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 0;
}
.radio_wrapper {
}
.login_btn {
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: var(---Accent, #1e75f8);
  color: var(---White, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  transition: 0.3s;
}
.login_btn:hover {
  opacity: 0.7;
}

/* -------------------- sigin -------------------- */
.content_wrapp {
  display: flex;
  justify-content: center;
}
.log-reg_board {
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex: 1;
  max-width: 500px;
  padding: 60px 50px;
  border-radius: 25px;
  border: 1.4px solid var(--light-grey);
}
.login {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.login-inputs {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.input-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input_title {
  font-size: 16px;
  font-weight: 700;
}
.default-input {
  padding: 10px 20px;
  height: 50px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 400;
  background: var(--light-grey);
}
.underlined-btn {
  display: flex;
  align-self: baseline;
  color: var(--c-accent-1);
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.login-control {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-ways {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.login-ways .login-icon {
  width: 20px;
  height: 20px;
  object-fit: cover;
  flex-shrink: 0;
}

.default-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 50px;
  background: var(--c-accent-1);
  cursor: pointer;

  width: 100%;
  height: 50px;
}
.default-btn > *,
.default-btn {
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
}

.outlined-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 5px;
  border-radius: 50px;
  background: var(--white);
  border: 2px solid var(--light-grey);
  cursor: pointer;

  width: 100%;
  height: 50px;
}
.outlined-btn > *,
.outlined-btn {
  font-size: 16px;
  font-weight: 400;
  color: var(--black);
}

.devider {
  display: flex;
  align-items: center;
  padding: 0 40px;
  gap: 20px;
  color: var(--grey);
  font-size: 16px;
  font-weight: 400;
}
.devider-line {
  height: 1px;
  flex: 1;
  background: linear-gradient(
    0.25turn,
    var(--white),
    var(--light-grey),
    var(--white)
  );
}
</style>

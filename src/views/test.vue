<template>
  <section class="login">
    <div class="login_container container">
      <div class="login_inner">
        <div class="login_tab">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="login_tab-item"
            @click="toggleTab(tab.id)"
            :class="{ active: currentTab === tab.id }"
          >
            <p>{{ tab.name }}</p>
          </div>
        </div>

        <div v-if="currentTab === 1" class="signin">
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

        <div v-if="currentTab === 2" class="signup">
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
                    v-model="physicLogin"
                    type="text"
                    placeholder="+998 (90) 123 45 67"
                    id="physic_login"
                  />
                  <span v-if="!isValidPhysicLogin" class="error-message"
                    >Please enter a valid login</span
                  >
                </div>
                <div class="login_input">
                  <label for="physic_password">Пароль</label>
                  <input
                    v-model="physicPassword"
                    type="password"
                    placeholder="Пароль"
                    id="physic_password"
                  />
                  <span v-if="!isValidPhysicPassword" class="error-message"
                    >Password must be at least 6 characters</span
                  >
                </div>
                <div class="login_input">
                  <label for="physic_nick">Ник</label>
                  <input
                    v-model="physicNick"
                    type="text"
                    placeholder="Smart_boy_01"
                    id="physic_nick"
                  />
                  <span v-if="!isValidPhysicNick" class="error-message"
                    >Please enter a valid nickname</span
                  >
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
                    v-model="compLogin"
                    type="text"
                    placeholder="+998 (90) 123 45 67"
                    id="comp_login"
                  />
                  <span v-if="!isValidCompLogin" class="error-message"
                    >Please enter a valid login</span
                  >
                </div>
                <div class="login_input">
                  <label for="comp_password">Пароль</label>
                  <input
                    v-model="compPassword"
                    type="password"
                    placeholder="Пароль"
                    id="comp_password"
                  />
                  <span v-if="!isValidCompPassword" class="error-message"
                    >Password must be at least 6 characters</span
                  >
                </div>
                <div class="login_input">
                  <label for="comp_nick">Название компании</label>
                  <input
                    v-model="compName"
                    type="text"
                    placeholder="Wargaming"
                    id="comp_nick"
                  />
                  <span v-if="!isValidCompName" class="error-message"
                    >Please enter a valid company name</span
                  >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="isCompOpened || isPhisOpened" class="agreements">
            <p class="agreement_item">
              <input type="radio" id="test1" name="radio-group" />
              <label for="test1">Ознакомился с предложением</label>
            </p>
            <p class="agreement_item">
              <input type="radio" id="test2" name="radio-group2" />
              <label for="test2"
                >Ознакомился с политикой конйедециальности</label
              >
            </p>
          </div>
          <button @click="handleRegistration" class="login_btn">Войти</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const tabs = [
      { id: 1, name: "Вход" },
      { id: 2, name: "Регистрация" },
    ];

    const currentTab = ref(1);
    const isPhisOpened = ref(false);
    const isCompOpened = ref(false);
    const isEmail = ref(null);

    const isValidPhysicLogin = ref(true);
    const isValidPhysicPassword = ref(true);
    const isValidPhysicNick = ref(true);

    const isValidCompLogin = ref(true);
    const isValidCompPassword = ref(true);
    const isValidCompName = ref(true);

    const physicLogin = ref("");
    const physicPassword = ref("");
    const physicNick = ref("");

    const compLogin = ref("");
    const compPassword = ref("");
    const compName = ref("");

    const toggleTab = (id) => {
      currentTab.value = id;
    };

    const toggleDrops = (id) => {
      isPhisOpened.value = id === 1 ? true : false;
      isCompOpened.value = id === 2 ? true : false;
    };

    const validateEmailOrPhone = (value) => {
      // Validate if the input is an email or a phone number
      if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
        isEmail = true;
      } else if (/^[0-9\s+\-\(\)]+$/.test(value)) {
        isEmail = false;
      }
      console.log("isEmail"), isEmail;
      return (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
        /^[0-9\s+\-\(\)]+$/.test(value)
      );
    };

    const validatePhysicRegistrationInputs = () => {
      isValidPhysicLogin.value = validateEmailOrPhone(physicLogin.value);
      isValidPhysicPassword.value = physicPassword.value.length >= 6;
      isValidPhysicNick.value = /^[a-zA-Z0-9_]+$/.test(physicNick.value);

      return (
        isValidPhysicLogin.value &&
        isValidPhysicPassword.value &&
        isValidPhysicNick.value
      );
    };

    const validateCompRegistrationInputs = () => {
      isValidCompLogin.value = validateEmailOrPhone(compLogin.value);
      isValidCompPassword.value = compPassword.value.length >= 6;
      isValidCompName.value = /^[a-zA-Z0-9_]+$/.test(compName.value);

      return (
        isValidCompLogin.value &&
        isValidCompPassword.value &&
        isValidCompName.value
      );
    };

    const handleRegistration = () => {
      if (isPhisOpened.value) {
        if (validatePhysicRegistrationInputs()) {
          postDataToApi(codeSendApi, {
            login_type: "user",
            login: physicLogin.value,
            nick_name: physicNick.value,
            registr_type: "user",
          });
          console.log("Physical entity registration successful!");
        } else {
          console.log("Physical entity registration inputs are not valid");
        }
      } else if (isCompOpened.value) {
        if (validateCompRegistrationInputs()) {
          console.log("Legal entity (company) registration successful!");
          postDataToApi(codeSendApi, {
            login_type: "user",
            login: compLogin.value,
            nick_name: compName.value,
            registr_type: "user",
          });
        } else {
          console.log(
            "Legal entity (company) registration inputs are not valid"
          );
        }
      }
    };

    async function postDataToApi(url, dataObj) {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Basic YXV0aDoxIlVWNGZiUFkpLSI0JTE2cj9qPw=="
      );
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(dataObj);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://new.expert.uz/services/platon-core/api/v1/registration/user",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      // try {
      //   const basicAuthToken = "YXV0aDoxIlVWNGZiUFkpLSI0JTE2cj9qPw=="; // Replace with your actual Basic Auth token
      //   const response = await fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Basic ${basicAuthToken}`,
      //     },
      //     body: JSON.stringify(dataObj),
      //   });

      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }

      //   const responseData = await response.json();
      //   return responseData;
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      //   throw error;
      // }
    }

    // async function postDataToApi(url, dataObj) {
    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(dataObj),
    //     });

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const responseData = await response.json();
    //     return responseData;
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     throw error;
    //   }
    // }

    const codeSendApi =
      "https://new.expert.uz/services/platon-auth/api/v1/registration/user";

    // postDataToApi(codeSendApi, postData)
    //   .then((data) => {
    //     console.log("API Response:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    return {
      tabs,
      currentTab,
      isPhisOpened,
      isCompOpened,
      isValidPhysicLogin,
      isValidPhysicPassword,
      isValidPhysicNick,
      isValidCompLogin,
      isValidCompPassword,
      isValidCompName,
      physicLogin,
      physicPassword,
      physicNick,
      compLogin,
      compPassword,
      compName,
      toggleTab,
      toggleDrops,
      handleRegistration,
    };
  },
};
</script>

<!-- <script>
import { ref } from "vue";

export default {
  setup() {
    const tabs = [
      { id: 1, name: "Вход" },
      { id: 2, name: "Регистрация" },
    ];

    const currentTab = ref(1);
    const isPhisOpened = ref(false);
    const isCompOpened = ref(false);

    const isValidPhysicLogin = ref(true);
    const isValidPhysicPassword = ref(true);
    const isValidPhysicNick = ref(true);

    const isValidCompLogin = ref(true);
    const isValidCompPassword = ref(true);
    const isValidCompName = ref(true);

    const physicLogin = ref("");
    const physicPassword = ref("");
    const physicNick = ref("");

    const compLogin = ref("");
    const compPassword = ref("");
    const compName = ref("");

    const toggleTab = (id) => {
      currentTab.value = id;
    };

    const toggleDrops = (id) => {
      isPhisOpened.value = id === 1 ? true : false;
      isCompOpened.value = id === 2 ? true : false;
    };

    const validatePhysicRegistrationInputs = () => {
      isValidPhysicLogin.value = /^[0-9\s+\-\(\)]+$/.test(physicLogin.value);
      isValidPhysicPassword.value = physicPassword.value.length >= 6;
      isValidPhysicNick.value = /^[a-zA-Z0-9_]+$/.test(physicNick.value);

      return (
        isValidPhysicLogin.value &&
        isValidPhysicPassword.value &&
        isValidPhysicNick.value
      );
    };

    const validateCompRegistrationInputs = () => {
      isValidCompLogin.value = /^[0-9\s+\-\(\)]+$/.test(compLogin.value);
      isValidCompPassword.value = compPassword.value.length >= 6;
      isValidCompName.value = /^[a-zA-Z0-9_]+$/.test(compName.value);

      return (
        isValidCompLogin.value &&
        isValidCompPassword.value &&
        isValidCompName.value
      );
    };

    const handleRegistration = () => {
      if (isPhisOpened.value) {
        if (validatePhysicRegistrationInputs()) {
          // Perform physical entity registration logic here
          console.log("Physical entity registration successful!");
        } else {
          console.log("Physical entity registration inputs are not valid");
        }
      } else if (isCompOpened.value) {
        if (validateCompRegistrationInputs()) {
          // Perform legal entity (company) registration logic here
          console.log("Legal entity (company) registration successful!");
        } else {
          console.log(
            "Legal entity (company) registration inputs are not valid"
          );
        }
      }
    };

    return {
      tabs,
      currentTab,
      isPhisOpened,
      isCompOpened,
      isValidPhysicLogin,
      isValidPhysicPassword,
      isValidPhysicNick,
      isValidCompLogin,
      isValidCompPassword,
      isValidCompName,
      physicLogin,
      physicPassword,
      physicNick,
      compLogin,
      compPassword,
      compName,
      toggleTab,
      toggleDrops,
      handleRegistration,
    };
  },
};
</script> -->

<style scoped>
/* ... (existing styles) ... */
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
  margin-top: 50px;
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
  margin-top: 50px;
}
.login_btn:hover {
  opacity: 0.7;
}
.agreement_item {
  display: flex;
  align-items: center;
  gap: 20px;
}
.agreement_item label {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  color: #1e75f8;
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
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #1e75f8;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>

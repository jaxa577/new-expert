<template>
  <div class="pcSecurity">
    <div class="change-pw pcSecurity-sec">
      <h3 class="pcSecurity_title">Изменить</h3>
      <div class="change-pw_inputs pcSecurity-sec_cboard">
        <div class="pw-change-input">
          <input class="pcInput" type="password" placeholder="Старый пароль" />
        </div>
        <div class="pw-change-input">
          <input class="pcInput" type="password" placeholder="Новый пароль" />
        </div>
        <div class="pw-change-input">
          <input class="pcInput" type="password" placeholder="Повторите новый пароль" />
        </div>
        <button class="change-pw_btn pcButton-def">Изменить</button>
      </div>
    </div>
    <div class="profile-privacy pcSecurity-sec">
      <h3 class="pcSecurity_title">Профиль</h3>
      <div class="privacy_btns pcSecurity-sec_cboard">
        <div class="privacy-btn">
            <input 
                v-model="ProfilePrivacy"
                type="radio" 
                name="ProfilePrivacy" 
                id="ProfilePrivacy-val1"
                value="1"
                checked
            >
            <label class="privacy-btn_label" for="ProfilePrivacy-val1">
                <div class="privacy__btn">Открытый</div>
            </label>
        </div>
        <div class="privacy-btn">
            <input 
                v-model="ProfilePrivacy"
                type="radio" 
                name="ProfilePrivacy" 
                id="ProfilePrivacy-val2"
                value="2"
            >
            <label class="privacy-btn_label" for="ProfilePrivacy-val2">
                <div class="privacy__btn">Только подписчикам и подпискам</div>
            </label>
        </div>
        <div class="privacy-btn">
            <input 
                v-model="ProfilePrivacy"
                type="radio" 
                name="ProfilePrivacy" 
                id="ProfilePrivacy-val3"
                value="3"
            >
            <label class="privacy-btn_label" for="ProfilePrivacy-val3">
                <div class="privacy__btn">Закрытый</div>
            </label>
        </div>
      </div>
    </div>
    <div class="control-pannel pcSecurity-sec_cboard">
      <button class="pcButton-red">Удалить аккаунт</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        password: null,
        ProfilePrivacy: '1',
    };
  },


  methods: {

  },
};
</script>

<style scoped>
.pcSecurity {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.pcSecurity_title {
  color: var(--black);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.pcSecurity-sec {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pcSecurity-sec_cboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid var(--light-grey);
  padding: 20px;
}

/* .change-pw_btn{
    border-radius: 10px;
    background: var(--light-grey);
    width: 100%;
    height: 50px;
    color: var(--grey);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.16px;
} */

.privacy-btn input[type="radio"]{
    display: none;
}

.privacy-btn{
    display: flex;
    flex-direction: column;
}

.privacy-btn_label{
    cursor: pointer;
    transition: .3s ease;
}

.privacy-btn_label:hover{
    opacity: 0.7;
    transition: .3s ease;
}

.privacy__btn{
    padding: 14px;
    font-size: 20px;
    color: var(--grey);
    background: var(--light-grey);
    border-radius: 10px;
    transition: .3s ease;
}

.privacy-btn input[type="radio"]:checked + label .privacy__btn{
    color: #2F80F8 !important;
    background: rgba(30, 117, 248, 0.10);
    transition: .3s ease;
}


</style>

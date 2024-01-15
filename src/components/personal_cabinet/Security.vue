<template>
<div class="pcSecurity">
    <div class="change-pw pcSecurity-sec">
        <h3 class="pcSecurity_title">Изменить</h3>
        <div class="change-pw_inputs pcSecurity-sec_cboard">
            <div class="pw-conf-input">
                <input class="pcInput" type="password" placeholder="Пароль">
            </div>
            <button class="pcButton-def">Изменить</button>
        </div>
    </div>
    <div class="profile-privacy pcSecurity-sec">
        <h3 class="pcSecurity_title">Профиль</h3>
        <div class="profile-privacy_inputs pcSecurity-sec_cboard">
            
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
    
    };
},

methods: {
    
},
};
</script>

<style scoped>
.pcSecurity{
    display: flex;
    flex-direction: column;
    gap: 100px;
}

.pcSecurity_title{
    color: var(--black);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.2px;
}

.pcSecurity-sec{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.pcSecurity-sec_cboard{
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid var(--light-grey);
    padding: 20px;
}

</style>
<script>


    export default{
        data(){
            return{
                PaymentType: 1,
            }
        },

        components: {
            
        },

        methods:{
            
        }
    }
</script>

<template>
    <div class="payment-form">
        <div class="form-header">
            <h3 class="form-title title-3">Выберите варианты оплаты</h3>
            <div class="payment-type">
                <div class="Ptype-btn">
                    <input 
                        v-model="PaymentType"
                        type="radio" 
                        name="PaymentType" 
                        id="PaymentType-val1"
                        value="1"
                    >
                    <label class="Ptype-btn_label" for="PaymentType-val1">
                        <div class="Ptype__btn">Оставить заявку на бесплатную консультацию</div>
                    </label>
                </div>
                <div class="Ptype-btn">
                    <input 
                        v-model="PaymentType"
                        type="radio" 
                        name="PaymentType" 
                        id="PaymentType-val2"
                        value="2"
                    >
                    <label class="Ptype-btn_label" for="PaymentType-val2">
                        <div class="Ptype__btn">Оплатить всю сумму сразу</div>
                    </label>
                </div>
            </div>
        </div>
        <div class="form-main">
            <h4 class="f-main-title">Заполните контактные данные</h4>
            <div class="form-inputs">
                <input type="text" class="form__input" name="name" placeholder="Имя">
                <input type="text" class="form__input" name="email" placeholder="Email">
                <input type="text" class="form__input" placeholder="Номер телефона">
            </div>
            <button class="form-send_btn default-btn">Отправить</button>
        </div>
        <div class="form-agreement">
            <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
        </div>
    </div>
</template>

<style scoped>
    .payment-form{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 40px 30px;
        border-radius: 30px;
        background: var(--white);
        max-width: 580px;
        width: 100%;
    }

    .form-header{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .payment-type{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .Ptype-btn input[type="radio"]{
        display: none;
    }

    .Ptype-btn{
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 215px;
    }

    .Ptype-btn_label{
        height: 100%;
        cursor: pointer;
        transition: .3s ease;
    }

    .Ptype-btn_label:hover{
        opacity: 0.7;
        transition: .3s ease;
    }

    .Ptype__btn{
        display: flex;
        align-items: center;
        height: 100%;
        padding: 25px 20px;

        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;

        border-radius: 15px;
        border: 2px solid var(--light-grey);
        transition: .3s ease;
    }

    .Ptype-btn input[type="radio"]:checked + label .Ptype__btn{
        border-color: var(--c-accent-1);
        transition: .3s ease;
    }


    .form-main{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .f-main-title{
        font-size: 16px;
        color: var(--black);
        font-weight: 700;
        line-height: 120%;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .form__input{
        padding: 0 20px;
        height: 50px;
        background: var(--light-grey);
        color: var(--black);
        font-size: 16px;
        border-radius: 15px;
        border: 1.5px solid transparent;
        transition: .3s ease;
    }

    .form__input:focus{
        border-color: var(--c-accent-1);
    }

    .form-send_btn{
        height: 58px;
        transition: .3s ease;
    }

    .form-send_btn:hover{
        opacity: 0.7;
    }

    .form-agreement p{
        font-size: 16px;
        color: var(--grey);
        font-weight: 400;
        line-height: 150%;
    }
</style>
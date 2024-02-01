<script>

</script>

<template>
    <section class="feedback-form">
        <div class="form-picture">
            <img class="form__picture" src="@/assets/img/form-pic.jpg">
        </div>
        <div class="form-content">
            <div class="form-context">
                <div class="form-title">
                    <h2 class="form__title title-2">Нужна помощь в выборе курса  ?</h2>
                    <p class="form__subtitle pragraph-def">Админы всегда на старте чтобы поговорить с вами!</p>
                </div>
                <div class="sm-list">
                    <a href="#" class="sm_link">
                        <img class="sm_icon" src="@/assets/img/Linkedin.svg">
                    </a>
                    <a href="#" class="sm_link">
                        <img class="sm_icon" src="@/assets/img/Telegram.svg">
                    </a>
                    <a href="#" class="sm_link">
                        <img class="sm_icon" src="@/assets/img/Phone.svg">
                    </a>
                </div>
            </div>
            <div class="form_form">
                <div class="form-inputs">
                    <input type="text" class="form__input" id="fback-form_name" placeholder="Имя">
                    <input type="text" class="form__input" id="fback-form_phone" placeholder="Номер телефона">
                </div>
                <button class="request-fd_btn default-btn">Отправить</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .feedback-form{
        display: flex;
        gap: 20px;
    }
    .form-picture{
        position: relative;
        display: flex;
        flex: 1;
        max-width: 786px;
    }
    .form__picture{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        flex-basis: 100%;
        border-radius: 20px;
    }

    .form-content{
        display: flex;
        flex: 1;
        gap: 50px;
        justify-content: space-between;
        padding: 60px 48px;
        border-radius: 20px;
        border: 2px solid var(--light-grey);
        background: var(--white);
        max-width: 914px;
        min-width: 825px;
    }

    .form__subtitle{
        font-size: 16px;
        line-height: 24px;
    }

    .form-title{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .form-context{
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 348px;
    }

    .sm-list{
        display: flex;
        gap: 10px;
    }

    .sm_link{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;    
    }

    .form_form{
        display: flex;
        flex-direction: column;
        gap: 30px;
        flex: 1;
        max-width: 350px;
        justify-content: center;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .form__input{
        height: 50px;
        padding: 16px 20px;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 400;
        background: var(--light-grey);
    }

    .request-fd_btn{
        height: 58px;
        transition: all 0.3s ease;
    }
    .request-fd_btn:hover{
        opacity: 0.7;
    }

    @media screen and (max-width: 1440px) {
        .form-content{
            flex: 1.5;
            padding: 55px 50px;
            max-width: 867px;
            gap: 40px;
            min-width: 755px;
        }
    }
    @media screen and (max-width: 1150px) {
        .form-picture{
            display: none;
        }
        .form-content{
            max-width: 100%;
        }
    }
    @media screen and (max-width: 1024px) {
        .feedback-form{
            gap: 30px;
            border-radius: 20px;
            border: 2px solid var(--light-grey);
            background: var(--white);
            padding: 45px 40px;
            flex-direction: column;
        }
        .form_form{
            max-width: 400px;
        }
        .form-picture{
            display: flex;
            max-width: 100%;
            aspect-ratio: 290/118;
        }
        .form-content{
            min-width: 0;
            border: none;
            padding: 0;
        }
    }
    @media screen and (max-width: 768px) {
        .feedback-form{
            padding: 30px 20px;
        }
        .form-content{
            flex-direction: column;
        }
        .form_form{
            max-width: 100%;
        }
        .form-title{
            gap: 10px;
        }
        .form-content, .form-context{
            gap: 30px;
        }
    }
</style>
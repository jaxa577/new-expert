<script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Navigation } from 'swiper/modules';


    export default{
        data(){
            return{modules: [Navigation],}
        },

        components: {
            Swiper,
            SwiperSlide,
        },

        methods:{
            
        }
    }
</script>

<template>
    <section class="course-feedback">
        <div class="fb-title sec-title">
            <h2 class="title-2">Отзывы учеников</h2>
            <p class="paragraph-def">Истории выпускников, которые уже занимаются любимым делом</p>
        </div>
        <swiper 
            class="fb-swiper" 
            :slides-per-view="'auto'"
            :space-between="20"
            :navigation="true"
            :modules="modules"
        >
            <swiper-slide v-for="index in 6">
                <div class="feedback-card">
                    <div class="fb-card_details">
                        <div class="fb-profile">
                            <div class="profile-photo">
                                <img src="@/assets/img/user.png">
                            </div>
                            <div class="fb-profile_details">
                                <h4 class="fb-profile_name">Екатерина</h4>
                                <div class="fb-profile_age">23 лет</div>
                            </div>
                        </div>
                        <div class="fb-company">AlifTech</div>
                    </div>
                    <div class="fb-card-rate">
                        <div class="fb_star">
                            <img src="@/assets/icons/star_icon.svg">
                        </div>
                        <div class="fb_star">
                            <img src="@/assets/icons/star_icon.svg">
                        </div>
                        <div class="fb_star">
                            <img src="@/assets/icons/star_icon.svg">
                        </div>
                    </div>
                    <div class="fb-card-content">
                        <p class="paragraph-def">Чтобы добиться большего и реализовать свои профессиональные цели, я решил пройти профессиональные курсы по программированию. Я углубил свои знания и освоил новые языки программирования, а также научился применять их на практике</p>
                    </div>
                    <div class="vmore-btn">Дальше</div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<style scoped>
    .course-feedback{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    .fb-title{
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
    }

    .fb-feed{
        display: flex;
        gap: 20px;
        width: 100%;
    }

    .feedback-card{
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 415px;
        max-height: 317px;
        min-height: 317px;
        padding: 25px 20px;
        gap: 20px;
        border-radius: 20px;
        border: 2px solid var(--light-grey);
    }

    .fb-card_details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .fb-profile{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .profile-photo{
        aspect-ratio: 40/40;
        width: 40px;
        height: 40px;
        display: flex;
    }
    
    .profile-photo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        flex-basis: 100%;
    }

    .fb-profile_name{
        font-size: 20px;
        font-weight: 700;
        line-height: 110%;
        color: var(--black);
    }

    .fb-profile_age, .fb-company{
        font-size: 16px;
        color: var(--grey);
        font-weight: 400;
    }

    .fb-profile_details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .fb-card-rate{
        display: flex;
        gap: 10px;
        align-items: center;
        align-self: baseline;
    }

    .fb_star{
        display: flex;
    }
    .fb_star svg{
        width: 19px;
        height: 19px;
    }

    .fb-card-content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
    }
    .fb-card-content p{
        overflow: hidden;
    }

    .vmore-btn{
        display: flex;
        align-self: baseline;
        cursor: pointer;
        font-size: 20px;
        color: var(--c-accent-1);
    }

    .fb-swiper{
        position: relative;
        overflow: visible;
        width: 100%;
    }

    .swiper-slide{
        width: fit-content;
    }


    :deep(.swiper-button-disabled){
        opacity: 0.4;
    }
    :deep(.swiper-button-next){
        background: url('@/assets/img/chevron-right.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        cursor: pointer;
        transition: .3s ease;
        top: -96px;
        right: 0;
        height: 48px;
        width: 48px;
    }
    :deep(.swiper-button-prev){
        background: url('@/assets/img/chevron-left.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        cursor: pointer;
        transition: .3s ease;
        top: -96px;
        right: 62px;
        height: 48px;
        width: 48px;
    }

    
    @media screen and (max-width: 1440px) {
        
    }
</style>
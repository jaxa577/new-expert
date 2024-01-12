<script>
import info_icon from '@/assets/icons/info_icon.vue'
import online_icon from '@/assets/icons/online_icon.vue'
import star_icon from '@/assets/icons/star_icon.vue'
import date_icon from '@/assets/icons/date_icon.vue'
import caution_icon from '@/assets/icons/caution_icon.vue'

export default{
    components: {
        info_icon,
        online_icon,
        star_icon,
        date_icon,
        caution_icon,
    },
}
</script>

<template>
    <div class="banner">
        <div class="banner_content">
            <div class="course-info">
                <div class="course_author">
                    <img src="@/assets/img/realsoft-inc.svg" alt="Realsoft.inc"/>
                    <span class="info-btn">
                        <info_icon/>
                    </span>
                </div>
                <div class="course_details">
                    <div class="detail">
                        <online_icon/>
                        <span>Онлайн</span>
                    </div>
                    <div class="detail">
                        <star_icon/>
                        <span>4.5</span>
                        <span>(102)</span>
                    </div>
                    <div class="detail">
                        <date_icon/>
                        <span>12 Месяцев</span>
                    </div>
                </div>
            </div>
            <div class="course-title">
                <h1 class="course__title">Курс “Знакомство и первая программа на платформе Platon”</h1>
                <p class="course__subtitle">Универсальное программирование для всех: изучите основы кода и станьте мастером универсальной платформы</p>
                <div class="caution-sign">
                    <caution_icon/>
                </div>
            </div>
            <div class="course-btns">
                <a class="take-course-btn default-btn" href="#">Записаться</a>
                <div class="course-price">
                    <div class="price_discount">-30%</div>
                    <div class="price_value">
                        <span class="actual-price">9 900 000 сум</span>
                        <span class="profit-price">-29 900 000</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner_picture">
            <img class="banner__picture" src="@/assets/img/course-banner.jpg"/>
        </div>
    </div>
</template>

<style scoped>
    .banner{
        display: flex;
        gap: 30px;
    }
    .banner_content{
        flex: 0.6437869822485207;
        min-height: 605px;
        border-radius: 40px;
        background: var(--black);
        color: var(--white);
        position: relative;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        gap: 60px;
        padding: 80px 50px 75px 50px;
    }

    .banner_content::after, .banner_content::before{
        content: "";
        display: block;
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: rgba(30, 117, 248, 0.19);
        filter: blur(74px);
    }

    .banner_content::before{
        top: -1%;
        left: -2%;
        transform: translateX(-50%) translateY(-50%);
        animation: 3s glowing infinite ease;
        animation-delay: 1s;
    }
    .banner_content::after{
        bottom: 0;
        right: 2%;
        transform: translateX(50%) translateY(50%);
        animation: 4s glowing infinite ease;
    }

    .banner_picture{
        display: flex;
        flex: 0.3562130177514793;
    }
    .banner__picture{
        width: inherit;
        height: inherit;
        object-fit: cover;
        flex-basis: 100%;
        border-radius: 40px;
    }
    
    .course-info{
        display: flex;
        align-items: center;
        gap: 30px;
        z-index: 1;
    }

    .course_author{
        padding: 12px 0;
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .course_author > img{
        max-width: 116px;
    }

    .info-btn{
        display: flex;
        max-height: fit-content;
        max-width: fit-content;
    }

    .course_details{
        display: flex;
        align-items: center;
        gap: 18px;
    }

    .course_details .detail{
        padding: 7px 10px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .course-title{
        display: flex;
        flex-direction: column;
        gap: 30px;
        z-index: 1;
    }
    .course__title{
        max-width: 985px;
        font-size: 60px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -1.2px;
    }
    .course__subtitle{
        max-width: 609px;
        font-size: 20px;
        line-height: 24px;
    }

    .caution-sign{
        display: flex;
        width: fit-content;
        height: fit-content;
    }

    .course-btns{
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 1;
    }

    .course-btns .default-btn{
        height: 60px;
        max-width: 348px;
    }

    .course-price{
        display: flex;
        align-items: center;
        gap: 14px;
    }
    
    .price_discount{
        display: flex;
        padding: 10px;
        height: 60px;
        font-weight: 700;
        font-size: 16px;
        background: var(--c-accent-1);
        border-radius: 60px;
        align-items: center;
        justify-content: center;
    }

    .price_value{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .actual-price{
        font-size: 20px;
        font-weight: 700;
    }

    .profit-price{
        font-size: 16px;
        color: var(--grey);
    }

    @keyframes glowing {
    0% {
        filter: blur(74px);
    }
    50% {
        filter: blur(104px);
    }
    100% {
        filter: blur(74px);
    }
    }
</style>
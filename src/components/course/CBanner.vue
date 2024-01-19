<script>

export default{
    components: {
        
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
                        <img src="@/assets/icons/info_icon.svg">
                    </span>
                </div>
                <div class="course_details">
                    <div class="detail">
                        <img src="@/assets/icons/online_icon.svg">
                        <span>Онлайн</span>
                    </div>
                    <div class="detail">
                        <img src="@/assets/icons/star_icon.svg">
                        <span>4.5</span>
                        <span>(102)</span>
                    </div>
                    <div class="detail">
                        <img src="@/assets/icons/date_icon.svg">
                        <span>12 Месяцев</span>
                    </div>
                </div>
            </div>
            <div class="course-title">
                <h1 class="course__title title-1">Курс “Знакомство и первая программа на платформе Platon”</h1>
                <p class="course__subtitle">Универсальное программирование для всех: изучите основы кода и станьте мастером универсальной платформы</p>
                <div class="report-btn">
                    <img src="@/assets/icons/caution_icon.svg">
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
            <div class="bg-assets"></div>
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

    .banner svg{
        flex-shrink: 0;
    }

    .banner_content{
        flex: 0.6437869822485207;
        min-height: 605px;
        border-radius: 40px;
        background: var(--black);
        color: var(--white);
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 80px 50px 75px 50px;
    }


    .bg-assets{
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .bg-assets::after, .bg-assets::before{
        content: "";
        display: block;
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: rgba(30, 117, 248, 0.19);
        filter: blur(74px);
    }

    .bg-assets::before{
        top: -1%;
        left: -2%;
        transform: translateX(-50%) translateY(-50%);
        animation: 3s glowing infinite ease;
        animation-delay: 1s;
    }
    .bg-assets::after{
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
    }
    .course__subtitle{
        max-width: 609px;
        font-size: 20px;
        line-height: 120%;
    }

    .report-btn{
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

    .take-course-btn{
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



    @media screen and (max-width: 1440px) {
        .banner{
            gap: 20px;
        }
        .banner_content{
            min-width: 675px;
        }
    }
    @media screen and (max-width: 1024px) {
        .banner{
            flex-direction: column-reverse;
        }
        .banner_picture{
            display: none;
        }
        .banner_content{
            flex: 1;
        }
    }
    @media screen and (max-width: 768px) {
        .banner__picture{
            border-radius: 25px;
        }
        .banner_picture{
            aspect-ratio: 362/210;
            max-height: 350px;
            min-height: 0;
            display: flex;
            flex: 1;
        }
        .banner_content{
            border-radius: 25px;
            padding: 50px 30px;
            margin-bottom: 80px;
            min-width: 0;
            min-height: 0;
        }
        .course_details .detail{
            padding: 0;
        }
        .banner_content{
            gap: 40px;
        }
        .report-btn svg{
            width: 25px;
            height: 25px;
        }
        .report-btn{
            position: absolute;
            top: 50px;
            right: 30px;
        }
        .course-info{
            gap: 40px;
            flex-direction: column;
            align-items: flex-start;
        }

        .course-price{
            display: none;
        }
        .course__subtitle{
            font-size: 17px;
            letter-spacing: 0.34px;
        }

        .course-btns{
            width: 100%;
            left: 0;
            bottom: -80px;
            position: absolute;
        }
        .take-course-btn{
            max-width: none;
        }
    }

    @media screen and (max-width: 425px){
        .course-title{
            gap: 16px;
        }
        .banner_content{
            padding: 30px 15px 45px 15px;
        }
    }
</style>
<script>
    

    export default{
        data(){
            return{}
        },

        components: {
            
        },

        methods:{
            
        }
    }
</script>

<template>
    <section class="course-certificate">
        <div class="c-content-cont">
            <div class="c-certificate-pic">
                <img src="@/assets/img/certificate.png">
            </div>
            <div class="certificate-content">
                <div class="certificate_content">
                    <h2 class="title-2">Диплом о профессиональной переподготовке</h2>
                    <p class="paragraph-def">Пройдите наши курсы и получите престижный диплом о профессиональной 
                    переподготовке, который подтвердит вашу экспертизу в сфере программирования. 
                    Наша программа обучения разработана с учетом актуальных требований индустрии,
                    и мы гарантируем качественное и глубокое погружение
                    в мир программирования.</p>
                </div>
                <div class="cmore-btn">
                    <a href="#" class="white-btn">Подробнее</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .course-certificate{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
        background: var(--light-grey);
        border-radius: 30px;
        min-height: 611px;
    }

    .c-content-cont{
        display: flex;
        justify-content: space-between;
        gap: 50px;
        align-items: center;
        flex: 1;
        max-width: 1488px;
    }

    .c-certificate-pic{
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 460/381;
        background: var(--white);
        border-radius: 20px;
        flex: 1;
        min-width: 460px;
        max-height: 471px;
        max-width: 676px;
        padding: 42px 0;
    }

    .c-certificate-pic img{
        max-width: 442px;
        max-height: 100%;
        object-fit: fill;
    }

    .certificate-content{
        display: flex;
        flex-direction: column;
        gap: 70px;
        flex: 1.5;
        max-width: 631px;
    }

    .certificate_content{
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 631px;
        gap: 30px;
    }

    .cmore-btn{
        max-width: 194px;
    }


    
    @media screen and (max-width: 1440px) {
        
    }
</style>
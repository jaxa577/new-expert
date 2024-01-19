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
    <div class="ad-banner">
        <div class="banner-pic"></div>
        <div class="banner-body">
            <div class="banner-content">
                <div class="banner_content">
                    <div class="discount-block">
                        <div class="discount-period">до 23 декабря</div>
                        <h2 class="discount-title">-50%</h2>
                    </div>
                    <h3 class="banner_title title-3">Не упустите возможность обучиться программированию с большой скидкой!</h3>
                </div>
                <div class="banner-btn">
                    <a class="default-btn" href="#">Поехали!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .ad-banner{
        display: flex;
        border-radius: 30px;
        background: var(--black);
        border: 2px solid var(--black);
        min-height: 544px;
        overflow: hidden;
    }

    .banner-pic{
        flex: 1;
        max-width: 772px;
        background: url('@/assets/img/banner1.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .banner-body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1.1;
    }

    .banner-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 90px;
        max-width: 570px;
    }

    .banner_content{
        display: flex;
        flex-direction: column;
        gap: 70px;
        align-items: center;
    }

    .discount-block{
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    .discount-period{
        display: flex;
        color: var(--light-grey);
        font-size: 20px;
    }

    .discount-title{
        font-size: 100px;
        font-weight: 700;
        letter-spacing: -2px;
        color: var(--white);
        line-height: 90%;
    }

    .banner_title{
        
        letter-spacing: -0.6px;
        color: var(--white);
        text-align: center;
    }

    .banner-btn{
        display: flex;
        max-width: 330px;
        width: 100%;
    }




    
    @media screen and (max-width: 1440px) {
        
    }
</style>
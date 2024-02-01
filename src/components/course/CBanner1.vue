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
        position: relative;
        display: flex;
        border-radius: 30px;
        background: var(--black);
        border: 2px solid var(--black);
        min-height: 544px;
        overflow: hidden;
    }

    .banner-pic{
        /* border-radius: 30px 0 0 30px; */
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
        flex: 1;
        padding: 0 20px;
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




    
    @media screen and (max-width: 1024px) {
        .ad-banner{
            flex-direction: column;
            padding: 4px 4px 50px 4px;
            overflow: visible;
            margin-bottom: 60px;
            gap: 20px;
            border-radius: 20px;
        }
        .banner-pic{
            aspect-ratio: 360/269;
            border-radius: 20px;
            max-width: 100%;
            max-height: 580px;
        }
        .banner-btn{
            position: absolute;
            bottom: -60px;
            left: 0;
            max-width: 100%;
        }
        .banner_content, .discount-block{
            gap: 15px;
        }
    }
    @media screen and (max-width: 768px) {
        .ad-banner{
            min-height: 0;
        }
        .banner-pic{
            max-height: 330px;
        }
        .discount-period{
            font-size: 17px;
        }
        .discount-title{
            font-size: 64px;
        }
        .banner_content{
            max-width: 430px;
        }
    }
    @media screen and (max-width: 425px) {
        .discount-period{
            font-size: 14px;
        }
        .discount-title{
            font-size: 42px;
        }
        .ad-banner{
            padding: 4px 4px 20px 4px;
        }
    }
</style>
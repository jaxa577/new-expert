<script>

    export default{
        data(){
            return{}
        },

        components: {
            
        },

        methods:{}
    }
</script>

<template>
    <section class="course-priorities">
        <div class="priorities-title sec-title">
            <h2 class="title-2">Основные цели <img src="@/assets/icons/target_icon.svg" class="title_icon"> и преимущества нашего курса</h2>
            <p class="paragraph-light">Обучение навыкам, востребованным на рынке, и поддержка студентов в достижении успеха</p>
        </div>
        <div class="priorities-card_wrapp">
            <div class="priority-card">
                <div class="pr-card-title">
                    <div class="pr-card_icon">
                        <img src="@/assets/icons/folder_icon.svg">
                    </div>
                    <h3 class="pr-card_title">Множество карьерных возможностей</h3>
                </div>
                <div class="pr-card-content">
                    <p class="paragraph-light">Программирование является одной из наиболее востребованных профессий в современном мире. Овладение навыками программирования открывает широкий спектр карьерных возможностей, включая работу в IT-индустрии, разработку программного обеспечения, веб-разработку, мобильное приложение, аналитику данных и многое другое.</p>
                </div>
            </div>
            <div class="priority-card">
                <div class="pr-card-title">
                    <div class="pr-card_icon">
                        <img src="@/assets/icons/spark_icon.svg">
                    </div>
                    <h3 class="pr-card_title">Творческий потенциал</h3>
                </div>
                <div class="pr-card-content">
                    <p class="paragraph-light">Программирование является одной из наиболее востребованных профессий в современном мире. Овладение навыками программирования открывает широкий спектр карьерных возможностей, включая работу в IT-индустрии, разработку программного обеспечения, веб-разработку, мобильное приложение, аналитику данных и многое другое.</p>
                </div>
            </div>
            <div class="priority-card">
                <div class="pr-card-title">
                    <div class="pr-card_icon">
                        <img src="@/assets/icons/brain_icon.svg">
                    </div>
                    <h3 class="pr-card_title">Развитие логического мышления</h3>
                </div>
                <div class="pr-card-content">
                    <p class="paragraph-light">Программирование является одной из наиболее востребованных профессий в современном мире. Овладение навыками программирования открывает широкий спектр карьерных возможностей, включая работу в IT-индустрии, разработку программного обеспечения, веб-разработку, мобильное приложение, аналитику данных и многое другое.</p>
                </div>
            </div>
            <div class="priority-card">
                <div class="pr-card-title">
                    <div class="pr-card_icon">
                        <img src="@/assets/icons/money_icon.svg">
                    </div>
                    <h3 class="pr-card_title">Высокооплачиваемые вакансии</h3>
                </div>
                <div class="pr-card-content">
                    <p class="paragraph-light">Программирование является одной из наиболее востребованных профессий в современном мире. Овладение навыками программирования открывает широкий спектр карьерных возможностей, включая работу в IT-индустрии, разработку программного обеспечения, веб-разработку, мобильное приложение, аналитику данных и многое другое.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .course-priorities{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    .priorities-title{
        max-width: 680px;
    }

    .title_icon{
        vertical-align: middle;
    }

    .priorities-card_wrapp{
        display: flex;
        gap: 20px;
    }

    .priority-card{
        display: flex;
        flex-direction: column;
        gap: 36px;
        padding: 20px;
        border-radius: 18px;
        border: 1px solid var(--light-grey);
        min-height: 246px;
        max-width: 415px;
        flex: 1;
    }

    .pr-card-title{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .pr-card_icon{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: var(--light-grey);
        flex-shrink: 0;
        width: 50px;
        height: 50px;
    }

    .pr-card_title{
        font-size: 20px;
        font-weight: 700;
        line-height: 110%;
    }

    .pr-card-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-height: 120px;
        overflow: hidden;
    }

    .pr-card-content p{
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }




    @media screen and (max-width: 1440px) {
        .priorities-card_wrapp{
            flex-wrap: wrap;
        }
        .priority-card{
            flex: 48%;
            max-width: none;
            min-width: 393px;
        }
    }

    @media screen and (max-width: 1024px) {

    }
    @media screen and (max-width: 768px) {
        .priorities-card_wrapp{
            flex-direction: column;
        }
        .priority-card{
            min-width: 0;
            min-height: 0;
        }
        .course-priorities{
            gap: 25px;
        }
        .pr-card-content p{
            -webkit-line-clamp: 3;
        }
    }
    @media screen and (max-width: 425px) {
        .priority-card{
            gap: 20px;
        }
    }
</style>
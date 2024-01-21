<script>

    export default{
        components: {},
    }
</script>

<template>
    <section class="salary-statistics">
        <div class="statistics_title sec-title">
            <h2 class="title-2">Зарплаты специалистов этой области</h2>
            <div class="statistics-title_details">
                <p class="sec-paragraph paragraph-def">После курса вы сможете занять позицию junior разработчика и расти дальше...</p>
                <a href="#" class="source-ref paragraph-light">Источник: vc.uz</a>
            </div>
        </div>
        <div class="statistics_content">
            <div class="bar-charts">
                <div class="small-chart bar-chart">
                    <h2 class="chart-title title-2">2 500 000 сум</h2>
                    <div class="chart-details">
                        <div class="lvl-tag">Junior</div>
                        <div class="time-tag">После кура</div>
                    </div>
                </div>
                <div class="midd-chart bar-chart">
                    <h2 class="chart-title title-2">10 500 000 сум</h2>
                    <div class="chart-details">
                        <div class="lvl-tag">Middle</div>
                        <div class="time-tag">1-3 год</div>
                    </div>
                </div>
                <div class="large-chart bar-chart">
                    <h2 class="chart-title title-2">15 000 000 сум</h2>
                    <div class="chart-details">
                        <div class="lvl-tag">Senior</div>
                        <div class="time-tag">3+ лет</div>
                    </div>
                </div>
            </div>
            <div class="vacancy-ad_card">
                <div class="card_content">
                    <h2 class="card_title title-2">Вакансии на нашем VC</h2>
                    <div class="card_desc">
                        <p class="card_text">После курса вы сможете занять позицию junior разработчика и расти дальше</p>
                    </div>
                </div>
                <a href="#" class="view-vacancy_btn white-btn">Посмотерть вакансии</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .salary-statistics{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    .statistics_title{
        max-width: 850px;
    }

    .statistics-title_details{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .source-ref{
        position: relative;
        display: flex;
        align-self: baseline;
    }
    .source-ref::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20%;
        height: 1.2px;
        background: var(--grey);
    }

    .statistics_content{
        display: flex;
        gap: 20px;
    }
    
    .bar-charts{
        display: flex;
        gap: 20px;
        align-items: flex-end;
        flex: 3;
    }
    .bar-chart{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 50px 10px;
        flex: 1;
        border-radius: 15px;
        background: var(---Light-Grey, #F3F3F3);        
    }

    .small-chart{
        height: 220px;
    }

    .midd-chart{
        height: 317px;
    }

    .large-chart{
        height: 436px;
    }
    .large-chart::after{
        content: url('@/assets/img/band.svg');
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
    }


    .chart-details{
        display: flex;
        gap: 20px;
        font-size: 20px;
        align-items: center;
        justify-content: center;
    }

    .lvl-tag{
        padding: 10px;
        border-radius: 50px;
        background: var(--white);
    }

    .vacancy-ad_card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: var(--white);
        padding: 60px 20px;
        min-height: 438px;
        flex: 1;
        max-width: 415px;
        text-align: center;
        border-radius: 15px;
        background: var(--c-accent-1);
    }

    .vacancy-ad_card .view-vacancy_btn{
        max-width: 348px;
        height: 60px;
    }

    .card_content{
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
    }

    .card_desc{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }




    @media screen and (max-width: 1440px) {
        .statistics_content{
            flex-direction: column;
        }
        .vacancy-ad_card{
            max-width: none;
            flex-direction: row;
            min-height: auto;
            padding: 60px 40px;
        }
        .card_content{
            align-items: flex-start;
            gap: 20px;
        }
    }
    @media screen and (max-width: 1024px) {
        .salary-statistics{
            display: none;
        }
    }
</style>
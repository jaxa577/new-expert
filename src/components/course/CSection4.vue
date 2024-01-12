<script>
    import play_icon from '@/assets/icons/videoplay_icon.vue'
    import time_icon from '@/assets/icons/time_icon.vue'


    export default{
        components: {
            play_icon,
            time_icon,
        },
    }
</script>

<template>
    <section class="course-process">
        <div class="process_title sec-title">
            <h2 class="title-2">Процесс обучения</h2>
            <p class="sec-paragraph paragraph-light">Изучать теорию и заниматься в тренажёре можно в любое время, а вот вебинары проходят по расписанию. Ещё каждые 2–3 недели будете делать проекты — их важно сдавать вовремя. Общая нагрузка в неделю — около 20 часов</p>
        </div>
        <div class="process-cards_list">
            <div class="process_card">
                <div class="card_header">
                    <div class="card-details">
                        <div class="time-indicator">
                            <time_icon/>
                            <span>Неделя</span>
                        </div>
                    </div>
                    <h3 class="card_title title-3">Сначала неделя учёбы бесплатно — без всяких подписок и карт</h3>
                </div>
                <div class="card_content">
                    <p class="paragraph-def">
                        Как только нажмёте <a class="default-link" href="#">«Начать учиться»</a>, откроется бесплатная вводная часть курса. Там вы с первого урока будете практиковаться в нашем тренажёре, который автоматически проверяет код.
                    </p>
                </div>
            </div>
            <div class="process_card">
                <div class="card_header">
                    <div class="card-details">
                        <div class="time-indicator">
                            <time_icon/>
                            <span>2-3 месяц</span>
                        </div>
                    </div>
                    <h3 class="card_title title-3">Потом погружение в Python, чтобы стать классным разработчиком</h3>
                </div>
                <div class="card_content">
                    <p class="paragraph-def">
                        После бесплатной недели сможете оплатить курс и приступить к изучению основной части программы. Будете заниматься на компьютере или в мобильном приложении, в любое удобное время.
                    </p>
                </div>
            </div>
            <div class="process_card">
                <div class="card_header">
                    <div class="card-details">
                        <div class="time-indicator">
                            <time_icon/>
                            <span>4-5 месяца</span>
                        </div>
                    </div>
                    <h3 class="card_title title-3">И много-много практики, чтобы уверенно войти в профессию</h3>
                </div>
                <div class="card_content">
                    <p class="paragraph-def">
                        Кроме теории и занятий в тренажёре, будете работать над проектами для портфолио. Каждый проект несколько раз проверит опытный Python-разработчик и даст развёрнутую обратную связь.
                    </p>
                </div>
            </div>
            <div class="course-process_video">
                <div class="video-control">
                    <div class="play-btn">
                        <play_icon/>
                    </div>
                    <a class="take-course_btn default-btn" href="#">Записаться</a>
                    <div class="video-track"></div>
                </div>
                <video 
                    class="video-player" 
                    poster="@/assets/img/preview-1.jpg" 
                >
                    <source src="@/assets/video/test.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .course-process{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }
    .process_title{
        max-width: 850px;
    }

    .process-cards_list{
        display: flex;
        gap: 20px;
    }

    .process_card{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 30px 20px 50px 20px;
        border-radius: 20px;
        border: 2px solid var(--light-grey);
        background: var(--white);
        min-height: 480px;
        max-width: 415px;
        flex: 1;
    }

    .card_header{
        display: flex;
        flex-direction: column;
        padding: 0 0 20px 0;
        gap: 20px;
        border-bottom: 2px solid var(--light-grey);
    }

    .time-indicator{
        display: flex;
        align-items: center;
        justify-self: baseline;
        gap: 8px;
        border-radius: 40px;
        background: #FCFCFC;
        padding: 10px 15px;
    }

    .card-details{
        display: flex;
        align-items: center;
    }

    .time-indicator > *{
        color: var(--c-accent-1);
        font-size: 14px;
        font-weight: 700;
    }


    .course-process_video{
        display: flex;
        flex: 1;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        overflow: hidden;
        max-width: 415px;
        min-height: 480px;
        border-radius: 20px;
        padding: 30px 20px;
        position: relative;
    }

    .course-process_video .video-player{
        top: 0;
        left: 0;
        position: absolute;
    }

    .course-process_video .video-control{
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .course-process_video .take-course_btn{
        z-index: 1;
        position: absolute;
        transform: translate(-50%);
        left: 50%;
        width: 85%;
        bottom: 30px;
    }

    .course-process_video .video-track{
        position: absolute;
        bottom: 0;
        width: 0%;
        height: 5px;
        background: var(--c-accent-1);
        opacity: 0.7;
        z-index: 1;
    }

    .course-process_video .play-btn{
        display: flex;
        padding: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    @media screen and (max-width: 1440px) {
        .process-cards_list{
            flex-wrap: wrap;
        }
        .process_card, .course-process_video{
            flex: 48%;
            max-width: none;
            min-height: 393px;
        }
    }
</style>
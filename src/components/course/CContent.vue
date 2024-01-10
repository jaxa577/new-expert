<script>
    import caution_icon from '@/assets/icons/caution_icon.vue'
    import check_icon from '@/assets/icons/check_icon.vue'
    import play_icon from '@/assets/icons/videoplay_icon.vue'
    import time_icon from '@/assets/icons/time_icon.vue'




    export default{
        data(){
            return{
                vplayer: null,
                vplayer_state: false,
                vplayer_timeline: 0,
                vplayer_duration: 0,
            }
        },
        components: {
            check_icon,
            play_icon,
            time_icon,
        },

        computed:{
            
        },

        methods:{
            toggleVideo(video){
                if (this.vplayer_state)
                    video.pause()
                else
                    video.play()
                
                this.vplayer_state =! this.vplayer_state
                // this.trackTime(video)
            },
            trackTime(video){
                this.vplayer_timeline = Math.round(video.currentTime / video.duration * 100)
            }
        }
    }
</script>

<template>
    <div class="course-page_content course-page_container container">
        <section class="platon-course">
            <div class="platon-course_content">
                <div class="platon-course_desc">
                    <div class="platon-logo">
                        <img src="@/assets/img/platon.svg" alt="Platon">
                    </div>
                    <div class="platon-desc">
                        <p>Платон - это набор программных продуктов, предназначенных для быстрой, качественной, без дополнительных затрат разработки, подключения к другим информационным системам и самостоятельного совершенствования крупных электронных информационных систем и баз данных.</p>
                        <p>Наш курс разработан для всех уровней опыта - от новичков до более опытных программистов, которые хотят расширить свои навыки. Мы поддерживаем интерактивный подход к обучению, предлагая практические задания и проекты, которые помогут вам применить свои знания на практике.</p>
                    </div>
                </div>
                <div class="platon-course_advs">
                    <h5 class="advs-list_title">В курсе Знакомство с Platon:</h5>
                    <ul class="advs-list">
                        <li class="adv">
                            <check_icon/>
                            <span>Глубокое погружение в языки программирования</span>
                        </li>
                        <li class="adv">
                            <check_icon/>
                            <span>Основы и концепции разработки ПО</span>
                        </li>
                        <li class="adv">
                            <check_icon/>
                            <span>Профессиональные преподаватели и эксперты</span>
                        </li>
                        <li class="adv">
                            <check_icon/>
                            <span>Гибкость и индивидуальный подход</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div @click="toggleVideo($refs.VideoPlayer)" class="platon-course_video">
                <div class="video-control">
                    <div v-show="this.vplayer_state == false" class="play-btn">
                        <play_icon/>
                    </div>
                    <div class="video-track" :style="{width: this.vplayer_timeline + '%'}"></div>
                </div>
                <video 
                    @timeupdate="trackTime($refs.VideoPlayer)"
                    class="video-player" 
                    poster="@/assets/img/preview.png" 
                    ref="VideoPlayer"
                >
                    <source src="@/assets/video/test.mp4" type="video/mp4">
                </video>
            </div>
        </section>
        <section class="course-benefits">
            <div class="course-benefit-content">
                <h2 class="benefit-title title-2">Чему вы научитесь ?</h2>
                <div class="benefit-desc">
                    <p class="paragraph-light">Вы освоите основы программирования, включая переменные, условия, циклы и работы со структурами данных. Вы также изучите объектно-ориентированное программирование и научитесь работать с файлами и базами данных. Курс поможет вам развить навыки отладки и организации кода, а также использовать сторонние библиотеки и API.</p>
                </div>
            </div>
            <div class="course-benefit-options">
                <div class="benefit_option">
                    <check_icon/>
                    <span>Писать простые программы на Platon</span>
                </div>
                <div class="benefit_option">
                    <check_icon/>
                    <span>Логика с условиями и циклами</span>
                </div>
                <div class="benefit_option">
                    <check_icon/>
                    <span>Использование Jupyter Notebook</span>
                </div>
                <div class="benefit_option">
                    <check_icon/>
                    <span>Декораты</span>
                </div>
            </div>
        </section>
        <section class="course-characters">
            <div class="course-characters-title sec-title">
                <h2 class="course-characters__title title-2">Кому подойдёт курс</h2>
            </div>
            <div class="characters_list">
                <div class="course-character_card">
                    <div class="character_index">1</div>
                    <div class="character_content">
                        <h3 class="character_title title-3">Для Новичков</h3>
                        <p class="character_desc paragraph-light">Если вы только начинаете свой путь в программировании, наш курс поможет вам освоить основы и создать прочное фундаментальное знание. Вы научитесь писать свой первый код и разрабатывать простые программы.</p>
                    </div>
                </div>
                <div class="course-character_card">
                    <div class="character_index">2</div>
                    <div class="character_content">
                        <h3 class="character_title title-3">Студентам и учащимся</h3>
                        <p class="character_desc paragraph-light">Если вы студент или ученик, наш курс поможет вам улучшить ваши навыки программирования и расширить вашу образовательную базу. Вы сможете успешно выполнять программные задания и проекты.</p>
                    </div>
                </div>
                <div class="course-character_card">
                    <div class="character_index">3</div>
                    <div class="character_content">
                        <h3 class="character_title title-3">Профессионалам</h3>
                        <p class="character_desc paragraph-light">Если вы уже имеете опыт работы программистом, но хотите углубить свои знания и освоить новые технологии, наш курс предложит вам продвинутые темы и практические примеры.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="course-process">
            <div class="process_title sec-title">
                <h2 class="sec-title title-2">Процесс обучения</h2>
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
                        <div v-show="this.vplayer_state == false" class="play-btn">
                            <play_icon/>
                        </div>
                        <a class="take-course_btn default-btn" href="#">Записаться</a>
                        <div class="video-track" :style="{width: this.vplayer_timeline + '%'}"></div>
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
    </div>
</template>

<style scoped>
    .course-page_content{
        display: flex;
        flex-direction: column;
        gap: 180px;
    }
    .platon-course{
        display: flex;
        gap: 112px;
        padding: 43px 50px;
        min-height: 592px;
        background: var(--light-grey);
        border-radius: 40px;
    }

    .platon-course_content{
        display: flex;
        flex-direction: column;
        gap: 40px;
        flex: 1;
    }
    .platon-logo{
        max-width: 166px;
    }
    .platon-desc{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 800px;
    }
    .platon-desc p{
        font-size: 20px;
    }

    .platon-course_desc{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .platon-course_advs{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .advs-list_title{
        font-size: 20px;
        font-weight: 700;
    }
    .advs-list{
        display: flex;
        flex-direction: column;
        gap: 20px;   
    }
    
    .advs-list svg{
        flex-shrink: 0;
    }

    .advs-list .adv{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .advs-list .adv > *{
        font-size: 20px;
    }

    .platon-course_video{
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        overflow: hidden;
        max-width: 708px;
        display: flex;
        flex: 0.96;
        border-radius: 20px;
    }

    .video-player{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: var(--grey);
        object-fit: cover;
        overflow: hidden
    }

    .platon-course_video .video-control{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .platon-course_video .video-track{
        position: absolute;
        bottom: 0;
        width: 0%;
        height: 5px;
        background: var(--c-accent-1);
        opacity: 0.7;
    }

    .platon-course_video .play-btn{
        display: flex;
        padding: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    .title-2{
        font-size: 42px;
        font-weight: 700;
        letter-spacing: -0.84px;
    }
    .title-3{
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.6px;
    }

    .course-benefits{
        display: flex;
        gap: 20px;
        min-height: 428px;
    }

    .benefit-desc{
        display: flex;
        flex-direction: column;
        max-width: 633px;
    }

    /* .benefit-desc{
        font-size: 20px;
        color: var(--grey);
    } */

    .paragraph-light{
        font-size: 20px;
        color: var(--grey);
        font-weight: 400;
    }
    .paragraph-def{
        font-size: 20px;
        color: var(--black);
        font-weight: 400;
    }
    
    .default-link{
        display: inline;
        color: var(--c-accent-1);
        font-weight: 700;
    }

    .course-benefit-content{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 25px 20px;
        border-radius: 20px;
        border: 1px solid var(--light-grey);
        flex: 1;
    }

    .course-benefit-options{
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
    }
    
    .benefit_option{
        display: flex;
        align-items: center;
        padding: 25px 20px;
        border-radius: 20px;
        border: 2px solid var(--light-grey);
        min-height: 92px;
        gap: 14px;
    }

    .benefit_option > *{
        font-size: 20px;
        font-weight: 700;
    }

    .benefit_option svg{
        width: 42px;
        height: 42px;
        flex-shrink: 0;
    }

    .course-characters{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    .course-characters-title{
        display: flex;
        justify-content: center;
    }

    .sec-title{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .characters_list{
        display: flex;
        gap: 20px;
    }

    .course-character_card{
        padding: 38px 20px;
        display: flex;
        flex-direction: column;
        gap: 70px;
        border-radius: 25px;
        border: 3px solid var(--light-grey);
        max-width: 576px;
        min-height: 376px;
        flex: 1;
    }
    .character_index{
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: baseline;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        font-size: 20px;
        font-weight: 700;
        color: var(--white);
        background: var(--c-accent-1);
    }
    
    .character_content{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .character_title{
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.6px;
    }

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
        .platon-desc p:last-child{
            display: none;
        }
    }
</style>
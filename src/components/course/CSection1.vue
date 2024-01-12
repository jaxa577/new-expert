<script>
    import check_icon from '@/assets/icons/check_icon.vue'
    import play_icon from '@/assets/icons/videoplay_icon.vue'




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
        },
        methods:{
            toggleVideo(video){
                if (this.vplayer_state)
                    video.pause()
                else
                    video.play()
                
                this.vplayer_state =! this.vplayer_state
            },
            trackTime(video){
                this.vplayer_timeline = Math.round(video.currentTime / video.duration * 100)
            }
        }
    }
</script>

<template>
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
</template>

<style scoped>
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


    @media screen and (max-width: 1440px) {
        .platon-desc p:last-child{
            display: none;
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                tabs: [
                    {
                        id: '1',
                        title: 'Бесплатный урок “Вступление в программу Платон”',
                        subtitle: 'Бонусный урок',
                        content: {
                            format: 'list',
                            content: ['Введение', 'Знакомство с платформой Платона', 'Знакомство с модулями', 'Настройка платформы PLATON', 'Создание первой программы на Платоне',]
                        }
                    },
                    {
                        id: '2',
                        title: 'Функции Платона',
                        subtitle: 'Модуль 1',
                        content: {
                            format: 'text',
                            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga ipsum cum iusto iste nostrum dignissimos laborum quam amet adipisci, voluptates debitis autem reprehenderit hic velit, temporibus accusantium in et! Voluptatum quasi aliquid libero sequi officiis, perferendis asperiores pariatur, magni, nisi corporis quibusdam corrupti dignissimos praesentium quisquam in debitis saepe.'
                        }
                    },
                    {
                        id: '3',
                        title: 'Платон массивы',
                        subtitle: 'Модуль 2',
                        content: {
                            format: 'text',
                            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga ipsum cum iusto iste nostrum dignissimos laborum quam amet adipisci, voluptates debitis autem reprehenderit hic velit, temporibus accusantium in et! Voluptatum quasi aliquid libero sequi officiis, perferendis asperiores pariatur, magni, nisi corporis quibusdam corrupti dignissimos praesentium quisquam in debitis saepe.'
                        }
                    },
                    {
                        id: '4',
                        title: 'Создание сложных программ на Платоне',
                        subtitle: 'Модуль 3',
                        content: {
                            format: 'text',
                            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga ipsum cum iusto iste nostrum dignissimos laborum quam amet adipisci, voluptates debitis autem reprehenderit hic velit, temporibus accusantium in et! Voluptatum quasi aliquid libero sequi officiis, perferendis asperiores pariatur, magni, nisi corporis quibusdam corrupti dignissimos praesentium quisquam in debitis saepe.'
                        }
                    },
                    {
                        id: '5',
                        title: 'Полноценная программа на Платоне',
                        subtitle: 'Модуль 4',
                        content: {
                            format: 'text',
                            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga ipsum cum iusto iste nostrum dignissimos laborum quam amet adipisci, voluptates debitis autem reprehenderit hic velit, temporibus accusantium in et! Voluptatum quasi aliquid libero sequi officiis, perferendis asperiores pariatur, magni, nisi corporis quibusdam corrupti dignissimos praesentium quisquam in debitis saepe.'
                        }
                    },
                    {
                        id: '6',
                        title: 'Подготовка дипломного проека',
                        subtitle: 'Модуль 5',
                        content: {
                            format: 'text',
                            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga ipsum cum iusto iste nostrum dignissimos laborum quam amet adipisci, voluptates debitis autem reprehenderit hic velit, temporibus accusantium in et! Voluptatum quasi aliquid libero sequi officiis, perferendis asperiores pariatur, magni, nisi corporis quibusdam corrupti dignissimos praesentium quisquam in debitis saepe.'
                        }
                    },
                    {
                        id: '7',
                        title: 'Защита дипломного проекта',
                        subtitle: 'Модуль 6',
                        content: {
                            format: 'text',
                            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fuga ipsum cum iusto iste nostrum dignissimos laborum quam amet adipisci, voluptates debitis autem reprehenderit hic velit, temporibus accusantium in et! Voluptatum quasi aliquid libero sequi officiis, perferendis asperiores pariatur, magni, nisi corporis quibusdam corrupti dignissimos praesentium quisquam in debitis saepe.'
                        }
                    },
                ],
                currentTab: '0',
            }
        },

        components: {

        },

        methods:{
            toggleTab(id){
                if (this.currentTab == id)
                    this.currentTab = '0'
                else
                    this.currentTab = id
            }
        }
    }
</script>

<template>
    <section class="course-syllabus">
        <div class="syllabus_header">
            <h2 class="syllabus_title title-2">Программа обучения</h2>
            <div class="header_details">
                <div class="time-tag">
                    <img src="@/assets/icons/calendar_icon.svg">
                    <span>12 Мес</span>
                </div>
                <button class="download-btn">
                    <span>Скачать программу</span>
                    <img src="@/assets/icons/download_icon.svg">
                </button>
            </div>
        </div>
        <div class="syllabus_content">
            <ul class="syllabus-tabs">
                <li v-for="tab in this.tabs" :class="{'syllabus-tab': true, 'opened': tab.id == this.currentTab}">
                    <div @click="toggleTab(tab.id)" class="tab">
                        <div class="tab-title">
                            <p class="tab_subtitle">{{ tab.subtitle }}</p>
                            <h3 class="tab_title title-3">{{ tab.title }}</h3>
                        </div>
                        <div class="tab-arrow">
                            <img src="@/assets/icons/arrow_icon.svg">
                        </div>
                    </div>
                    <div :class="{'tab-content': true, 'opened': tab.id == this.currentTab}">
                        <div class="tab__content">
                            <ul class="list" v-if="tab.content.format == 'list'">
                                <li v-for="content in tab.content.content">{{ content }}</li>
                            </ul>
                            <p v-if="tab.content.format == 'text'">{{ tab.content.content }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
    .course-syllabus{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    .syllabus_header{
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .header_details{
        flex-shrink: 0;
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .time-tag{
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 0 10px;
        border-radius: 16px;
        border: 2px solid var(--light-grey);
        background: var(--white);
        height: 48px;
        font-size: 16px;
        white-space: nowrap;
        color: var(--grey);
    }

    .download-btn{
        display: flex;
        align-items: center;
        gap: 10px;
        height: 48px;
        background: var(--light-grey);
        border-radius: 16px;
        padding: 0 10px;
        font-size: 16px;
        color: var(--grey);
    }

    .syllabus_content{
        display: flex;
        flex-direction: column;
    }

    .syllabus-tabs{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .syllabus-tab{
        display: flex;
        flex-direction: column;
    }

    .tab{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 30px;
        border-radius: 18px;
        background: var(--light-grey);
        color: var(--black);
        gap: 10px;
        cursor: pointer;
        transition: .2s ease;
    }

    .syllabus-tab.opened .tab{
        background: var(--c-accent-1);
        color: var(--white);
    }

    .syllabus-tab.opened .tab-arrow > img{
        filter: brightness(0) invert(1);
    }


    .tab__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 10px;
        padding: 40px 30px;
        border-radius: 18px;
        background: var(--light-grey);
        color: var(--grey);
        transform: scale(0.95);
        font-size: 20px;
        opacity: 0;
        transition: .3s ease;
    }

    .tab-content{
        overflow: hidden;
        max-height: 0;
        transition: .3s ease;
    }

    .tab__content .list{
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 0 0 0 25px;
    }

    .tab__content .list > li{
        list-style: disc;
    }
    
    .tab-content.opened{
        max-height: 400px;
        /* padding-top: 10px; */
        transition: .3s ease;
    }

    .tab-content.opened .tab__content{
        transform: scale(1);
        opacity: 1;
    }

    .tab-title{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .tab_subtitle{
        font-size: 20px;
        color: var(--c-accent-1);
    }
    .syllabus-tab.opened .tab_subtitle{
        color: var(--white);
    }

    .tab-arrow{
        display: flex;
        transition: .3s ease;
        flex-shrink: 0;
    }

    .syllabus-tab.opened .tab-arrow{
        transform: rotate(180deg);
        transition: .3s ease;
    }




    @media screen and (max-width: 1440px) {
        
    }

    @media screen and (max-width: 1024px) {
        .download-btn > span{
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        .header_details{
            gap: 5px;
        }
        .tab_subtitle{
            font-size: 17px;
        }
    }
    @media screen and (max-width: 435px) {
        .tab-arrow{
            width: 18px;
            height: auto;
        }
        .tab_subtitle{
            font-size: 14px;
        }
        .tab .tab-title{
            font-size: 17px;
        }
        .tab{
            padding: 25px 20px;
        }
    }
</style>
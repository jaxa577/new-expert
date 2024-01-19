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
    <section class="course-author">
        <div class="author-profile">
            <div class="author-photo">
                <div class="author__photo">
                    <img src="@/assets/img/course-author.jpg">
                </div>
                <h3 class="author-photo_title title-3">Автор курса</h3>
            </div>
            <div class="author-info">
                <div class="author-details">
                    <div class="author-name">
                        <h3 class="author_name title-3">Алексей Оксов</h3>
                        <img src="@/assets/icons/verified_icon.svg">
                    </div>
                    <p class="author-bio paragraph-light">Саша, виртуозный программист и вдохновляющий преподаватель, способен превратить сложные концепции программирования в простые и понятные идеи. Он с легкостью разгадывает технические головоломки и находит элегантные решения для самых сложных задач. Саша не только передает свои знания, но и вдохновляет своих студентов креативным мышлением и стремлением к совершенству.</p>
                </div>
                <div class="author-btns">
                    <a class="author_btn default-btn" href="#">Задать вопрос</a>
                    <a class="author_btn grey-btn" href="#">Портфолио</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .course-author{
        display: flex;
        height: 708px;
        justify-content: center;
        align-items: center;
    }
    .author-profile{
        display: flex;
        flex: 1;
        justify-content: space-between;
        gap: 60px;
        align-items: center;
        max-width: 1284px;
    }

    .author-photo{
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 415px;
        flex: 1;
        gap: 30px;
        padding-bottom: 40px;
        border-radius: 20px;
        border: 2px solid var(--light-grey);
    }

    .author__photo{
        aspect-ratio: 415/435;
        min-height: 0;
        max-width: 100%;
        flex: 1;
        display: flex;
    }

    .author__photo img{
        object-fit: cover;
        width: 100%;
        flex-basis: 100%;
        border-radius: 18px;
    }

    .author-info{
        display: flex;
        flex-direction: column;
        gap: 70px;
        max-width: 718px;
        flex: 1.5;
    }

    .author-details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }

    .author-name{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .author-btns{
        max-width: 408px;
        display: flex;
        gap: 20px;
    }

    .author_btn{
        flex: 1;
    }





    @media screen and (max-width: 1440px) {
        .course-author{
            height: fit-content;
        }
    }
</style>
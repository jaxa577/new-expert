<script>
    export default{
        components: {},
    }
</script>

<template>
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
</template>

<style scoped>
    .course-characters{
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

    .course-characters-title{
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>
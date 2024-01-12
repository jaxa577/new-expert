<script>
    import check_icon from '@/assets/icons/check_icon.vue'

    export default{
        components: {
            check_icon,
        },
    }
</script>

<template>
    <section class="course-benefits">
        <div class="course-benefit-content">
            <h2 class="benefit-title title-2">Чему вы научитесь ?</h2>
            <p class="benefit-desc paragraph-light">Вы освоите основы программирования, включая переменные, условия, циклы и работы со структурами данных. Вы также изучите объектно-ориентированное программирование и научитесь работать с файлами и базами данных. Курс поможет вам развить навыки отладки и организации кода, а также использовать сторонние библиотеки и API.</p>
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
</template>

<style scoped>
    .course-benefits{
        display: flex;
        gap: 20px;
        min-height: 428px;
    }

    .benefit-desc{
        max-width: 633px;
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
        background: var(---12, linear-gradient(90deg, rgba(255, 255, 255, 0.00) 44.1%, rgba(243, 243, 242, 0.35) 86.17%));
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
</style>
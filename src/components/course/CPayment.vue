<script>
    import PaymentForm from "@/components/course/PaymentForm.vue";
    

    export default{
        data(){
            return{}
        },

        components: {
            PaymentForm,
        },

        methods:{
            
        }
    }
</script>

<template>
    <section class="course-payment">
        <div class="c-payment-cont">
            <div class="c-payment-title">
                <h1 class="title-1">Инвестируйте в свое образование!</h1>
            </div>
            <div class="c-payment-form">
                <PaymentForm/>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .course-payment{
        display: flex;
        align-items: center;
        justify-content: center;
        /* min-height: 832px; */
        padding: 80px 0;
    }

    .c-payment-cont{
        display: flex;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        gap: 50px;
        align-items: center;
        flex: 1;
        max-width: 1362px;
    }

    .c-payment-title{
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        text-align: center;
        flex: 1.1;
        max-width: 567px;
        /* min-width: 555px; */
    }

    .c-payment-form{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: fit-content;
        flex: 1;
        /* min-width: 555px; */
    }

    
    @media screen and (max-width: 1200px) {
        .c-payment-cont{
            flex-direction: column;
        }
    }
    @media screen and (max-width: 768px) {
        .c-payment-form{
            padding: 0 10px;
        }
    }
</style>
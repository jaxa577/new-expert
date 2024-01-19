<script>
import cBanner from "../components/course/CBanner.vue";
import cSection1 from "../components/course/CSection1.vue";
import cSection2 from "../components/course/CSection2.vue";
import cSection3 from "../components/course/CSection3.vue";
import cSection4 from "../components/course/CSection4.vue";
import cSection5 from "../components/course/CSection5.vue";
import FeedBackForm from "../components/course/FeedBackForm.vue";
import cSection6 from "../components/course/CSection6.vue";
import cSection7 from "../components/course/CSection7.vue";
import cBanner1 from "../components/course/CBanner1.vue";
import cSection8 from "../components/course/cSection8.vue";
import cFeedbacks from "../components/course/CFeedbacks.vue";
import cCertificate from "../components/course/CCertificate.vue";
import cPayment from "../components/course/CPayment.vue";



export default {
  components: {
    cBanner,
    cSection1,
    cSection2,
    cSection3,
    cSection4,
    cSection5,
    FeedBackForm,
    cSection6,
    cSection7,
    cBanner1,
    cSection8,
    cFeedbacks,
    cCertificate,
    cPayment,
  },
};
</script>

<template>
  <div class="course-page_container container">
    <div class="course-page_wrapp">
        <cBanner/>
        <cSection1/>
        <cSection2/>
        <cSection3/>
        <cSection4/>
        <cSection5/>
        <FeedBackForm/>
        <cSection6/>
        <cSection7/>
        <cBanner1/>
        <cSection8/>
        <cFeedbacks/>
        <cCertificate/>
    </div>
  </div>
  <div class="c-payment-layer">
    <div class="course-page_container container">
        <cPayment/>
    </div>
  </div>
</template>

<style>
    .course-page_wrapp{
        display: flex;
        flex-direction: column;
        gap: 180px;
        padding-top: 50px;
    }
    .c-payment-layer{
        background: var(--c-accent-1);
        margin: 180px 0;
    }




    /* COMMON STYLES */
    .title-1{
        font-size: 60px;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: -1.2px;
    }
    .title-2{
        font-size: 42px;
        font-weight: 700;
        line-height: 110%;
        letter-spacing: -0.84px;
    }
    .title-3{
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.6px;
    }
    .default-btn{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;
        border-radius: 50px;
        background: var(--c-accent-1);
        cursor: pointer;

        width: 100%;
        height: 50px;
    }
    .default-btn > *, .default-btn{
        font-size: 16px;
        font-weight: 700;
        color: var(--white);
    }
    .paragraph-light{
        font-size: 20px;
        color: var(--grey);
        font-weight: 400;
        line-height: 24px;
    }
    .paragraph-def{
        font-size: 20px;
        color: var(--black);
        font-weight: 400;
        line-height: 24px;
    }
    .sec-title{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .default-link{
        display: inline;
        color: var(--c-accent-1);
        font-weight: 700;
    }
    .video-player{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: var(--grey);
        object-fit: cover;
        overflow: hidden
    }
    .white-btn{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;
        border-radius: 50px;
        background: var(--white);
        cursor: pointer;

        width: 100%;
        height: 50px;
    }
    .white-btn > *, .white-btn{
        font-size: 16px;
        font-weight: 700;
        color: var(--c-accent-1);
    }

    .grey-btn{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;
        border-radius: 50px;
        background: var(--light-grey);
        cursor: pointer;

        width: 100%;
        height: 50px;
    }

    .grey-btn > *, .grey-btn{
        font-size: 16px;
        font-weight: 700;
        color: var(--grey);
    }

    @media screen and (max-width: 768px){
        .title-1{
            font-size: 36px;
            letter-spacing: -0.72px;
        }
        .course-page_wrapp{
            padding-top: 10px;
        }
    }
</style>
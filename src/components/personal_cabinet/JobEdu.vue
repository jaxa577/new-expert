<template>
  <div class="pcJE">
    <div class="pcJE_status">
      <h3 class="pcJE_title">Статус</h3>
      <div class="pcJE_box">
        <div class="pcJE_status-wrapper">
          <button class="pcJE_status-btn">Ищу работу</button>
          <button class="pcJE_status-btn">Сотрудничать</button>
          <button class="pcJE_status-btn">Временная работа</button>
        </div>
        <button class="pcJE_search-btn">Поиск работы</button>
      </div>
    </div>

    <div class="pcJE_posrtfolio">
      <h3 class="pcJE_title">Портфолио</h3>
      <div class="pcJE_portfolio-list">
        <div
          v-for="(portfolio, index) in portfolioList"
          class="pcJE_box"
          :key="index"
        >
          <div class="pcInfo_avatar-upload">
            <label for="ava_file">
              <input
                class="pcInfo_avatar-input"
                type="file"
                name="ava_file"
                id="ava_file"
              />
              <button>
                <img src="/images/upload.svg" alt="" />
              </button>
              <p>JPG, PNG or GIF - Max file size 2MB</p>
              <p class="drag_drop-test">
                Drag & drop files or <span>browse files</span>
              </p>
            </label>
          </div>
          <div class="pcJE_portfolio-link">
            <input
              type="text"
              name="ava_link"
              id="ava_link"
              class="pcInfo_ava-link"
              placeholder="Вставьте линк"
            />
            <button class="link_delete-btn">
              <img class="link_delete" src="/images/trashcan.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div class="pcJE_box add">
        <button @click="addPortfolio" class="add_btn">+ Добавить еще</button>
      </div>
    </div>

    <div class="pcJE_posrtfolio">
      <h3 class="pcJE_title">Место работы</h3>
      <div class="pcJE_portfolio-list">
        <div
          v-for="(wPlace, index) in workPlaceList"
          class="pcJE_box workPlace"
          :key="index"
        >
          <div class="pvInfo_input">
            <input
              type="text"
              :name="`workplace${index}`"
              :id="`workplace${index}`"
              placeholder="Alif tech"
            />
          </div>
          <div class="pvInfo_input">
            <input
              type="text"
              :name="`workStatus${index}`"
              :id="`workStatus${index}`"
              placeholder="Должность"
            />
          </div>
          <div class="pcJE_work-date">
            <span> с - 1 Дек. 2023 до - 26 Дек. 2023 </span>
            <button class="datepicker_btn">
              <img src="/images/date.svg" alt="" />
            </button>
          </div>
          <div class="pvInfo_input">
            <textarea
              name="about_you"
              id="about_you"
              placeholder="Напишите о себе"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="pcJE_box add">
        <button @click="addWorkplace" class="add_btn">
          + Добавить место работы
        </button>
      </div>
    </div>

    <div class="pcJE_posrtfolio">
      <h3 class="pcJE_title">Место образования</h3>
      <div class="pcJE_portfolio-list">
        <div
          v-for="(wPlace, index) in educationList"
          class="pcJE_box workPlace"
          :key="index"
        >
          <div class="pvInfo_input">
            <input
              type="text"
              :name="`educplace${index}`"
              :id="`educplace${index}`"
              placeholder="Toshkent Axborot-Texnologiyalari Universiteti"
            />
          </div>
          <div class="pvInfo_input">
            <input
              type="text"
              :name="`workLevel${index}`"
              :id="`workLevel${index}`"
              placeholder="Степень"
            />
          </div>
          <div class="pcJE_work-date">
            <span> с - 1 Дек. 2023 до - 26 Дек. 2023 </span>
            <button class="datepicker_btn">
              <img src="/images/date.svg" alt="" />
            </button>
          </div>
          <div class="pvInfo_input">
            <textarea
              name="about_you"
              id="about_you"
              placeholder="Напишите о себе"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="pcJE_box add">
        <button @click="addEducation" class="add_btn">+ Добавить еще</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioList: [
        {
          id: 1,
          image: "/images/",
          link: "#!",
        },
      ],
      workPlaceList: [
        {
          id: 1,
          name: null,
          startDate: null,
          endDate: null,
          workDuty: null,
        },
      ],
      educationList: [
        {
          id: 1,
          name: null,
          startDate: null,
          endDate: null,
          workDuty: null,
        },
      ],
    };
  },

  mounted() {
    console.log("this.$route", this.$route);
  },

  methods: {
    addPortfolio() {
      this.portfolioList.push({
        id: 1,
        image: "/images/",
        link: "#!",
      });
    },

    addWorkplace() {
      this.workPlaceList.push({
        id: 1,
        name: null,
        startDate: null,
        endDate: null,
        workDuty: null,
      });
    },
    addEducation() {
      this.educationList.push({
        id: 1,
        name: null,
        startDate: null,
        endDate: null,
        workDuty: null,
      });
    },
  },
};
</script>

<style>
button {
  transition: 0.3s;
}
button:hover {
  opacity: 0.7;
}
.pcJE {
  width: 100%;
}
.pcJE_status {
  width: 100%;
  margin-bottom: 100px;
}
.pcJE_title {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
  margin-bottom: 20px;
}
.pcJE_posrtfolio {
  margin-top: 100px;
}
.pcJE_portfolio-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.pcJE_box {
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  padding: 20px;
  width: 100%;
}
.pcJE_status-wrapper {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.pcJE_status-btn {
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
  height: 50px;
  padding: 0 14px;
  color: var(---Dark-grey, #6c6c6c);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.2px;
}
.pcJE_search-btn {
  border-radius: 10px;
  background: var(---Accent, #1e75f8);
  width: 100%;
  height: 50px;
  color: var(---White, #fff);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  transition: 0.3s;
}
.pcJE_search-btn:hover {
  opacity: 0.7;
}
.pcInfo_avatar-upload {
  border-radius: 20px;
  border: 1px dashed var(---Accent, #1e75f8);
  background: #f4f8ff;
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pcInfo_avatar-upload button {
  margin-bottom: 20px;
  border-radius: 200px;
  background: var(---White, #fff);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pcInfo_avatar-upload label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.pcInfo_avatar-upload p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 0.14px;
  margin-bottom: 7px;
}
.pcInfo_avatar-input {
  display: none;
}
.drag_drop-test {
  color: var(---Dark-grey, #6c6c6c);
}
.drag_drop-test span {
  color: var(---Accent, #1e75f8);
}
.pcInfo_ava-link {
  border-radius: 200px;
  background: var(---Light-Grey, #f3f3f3);
  width: 100%;
  height: 40px;
  padding: 0 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.pcInfo_ava-link:focus {
  border-color: #1e75f8;
}
.pcJE_portfolio-link {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.link_delete-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-radius: 200px;
  background: var(---Light-Grey, #f3f3f3);
}
.link_delete {
  filter: brightness(0) saturate(100%) invert(37%) sepia(34%) saturate(0%)
    hue-rotate(216deg) brightness(103%) contrast(89%);
}
.pcJE_box.add {
  margin-top: 10px;
}
.add_btn {
  width: 100%;
  color: var(---Accent, #1e75f8);
  font-size: 16px;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 0.16px;
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
  height: 50px;
  padding: 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}
.pvInfo_input {
  width: 100%;
}
.pvInfo_input input {
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
  height: 50px;
  padding: 0 14px;
  width: 100%;
}
.pvInfo_input textarea {
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
  max-height: 130px;
  padding: 14px;
  resize: none;
  width: 100%;
}
.workPlace {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.pcJE_work-date {
  display: flex;
  align-items: center;
  gap: 20px;
}
.pcJE_work-date span {
  height: 50px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
}
.datepicker_btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
}
</style>

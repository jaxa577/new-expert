<template>
  <section class="catalogue">
    <div class="catalogue_search-container container">
      <h2 class="catalogue_title">Каталог курсов</h2>
      <div class="catalogue_search-wrapper">
        <button class="search_sort-btn">Сортировать</button>
        <div class="catalogue_search-input">
          <input placeholder="Поиск по названию" type="text" name="" id="" />
          <button><img src="/images/search.svg" alt="" /></button>
        </div>
      </div>
    </div>
  </section>

  <section class="catalogue_filter">
    <div class="container">
      <div class="filter_list">
        <div v-for="item in 6" class="filter_list-item">
          <img src="/images/mini_edu.svg" alt="" />
          Программирование
        </div>
      </div>
    </div>
  </section>

  <section class="catalogue_main">
    <div class="container">
      <div class="catalogue_list">
        <courseCard class="catalogue_course_card" v-for="item in 8" />
      </div>
    </div>
  </section>
</template>

<script>
import courseCard from "./ExCourseCard.vue";

export default {
  components: {
    courseCard,
  },
};
</script>

<style>
.catalogue {
}
.catalogue_search-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.catalogue_title {
  color: var(--2, #181818);
  font-size: 42px;
  font-weight: 700;
  line-height: 110%; /* 46.2px */
  letter-spacing: -0.84px;
  margin-bottom: 74px;
}
.catalogue_search-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: fit-content;
}
.search_sort-btn {
  border-radius: 16px;
  background: var(---Light-Grey, #f3f3f3);
  height: 50px;
  padding: 0 13.5px;
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  width: 100%;
}
.catalogue_search-input {
  position: relative;
  max-width: 710px;
  /* min-width: 100%; */
  /* width: 100%; */
  display: flex;
  align-items: center;
}
.catalogue_search-input input {
  border-radius: 15px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  height: 50px;
  flex-grow: 1;
  padding: 0 70px 0 20px;
  min-width: 710px;
}
.catalogue_search-input button {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 15px;
  background: var(---Light-Grey, #f3f3f3);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.catalogue_filter {
  border-radius: 20px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  width: 100%;
  padding: 12px;
  margin: 40px 0;
}
.filter_list {
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: auto;
}
.filter_list-item {
  border-radius: 10px;
  background: var(---Light-Grey, #f3f3f3);
  padding: 0 10px;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(---Dark-grey, #6c6c6c);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  min-width: fit-content;
  cursor: pointer;
}
.catalogue_main {
  margin-bottom: 150px;
}
.container {
}
.catalogue_list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.catalogue_course_card {
  width: calc(25% - 15px);
}
</style>

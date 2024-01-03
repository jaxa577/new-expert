<template>
  <div class="mini_module">
    <div class="mini_module-img">
      <img :src="`/images/${item.icon}`" alt="" />
    </div>
    <p class="mini_module-text">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
.mini_module {
  cursor: pointer;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  background: var(---Light-Grey, #fafaf9);
  /* border: 1px solid transparent; */
  transition: all 0.3s ease;
}
.mini_module:hover {
  background: linear-gradient(0deg, #edf2f9 0%, #edf2f9 100%), #fafaf9;
}
.mini_module:hover .mini_module-img {
  border-color: var(---Accent, #1e75f8);
}
.mini_module:hover .mini_module-img img {
  filter: brightness(0) saturate(100%) invert(31%) sepia(96%) saturate(2130%)
    hue-rotate(207deg) brightness(99%) contrast(96%);
}
.mini_module:hover .mini_module-text {
  color: #1e75f8;
}
.mini_module-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(---Dark-grey, #6c6c6c);
  transition: all 0.3s ease;
}
.mini_module-img img {
  filter: invert(43%) sepia(7%) saturate(14%) hue-rotate(315deg) brightness(93%)
    contrast(82%);
  width: 28px;
  height: 23px;
}
.mini_module-text {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  letter-spacing: 0.32px;
}
</style>

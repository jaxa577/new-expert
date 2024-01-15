<template>
  <div class="product_card">
    <div class="product_image">
      <img src="/images/main.png" alt="" />
    </div>
    <div class="product_card-desc">
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
      <p>Info</p>
    </div>
  </div>
</template>

<script></script>

<style>
.product_card {
  border-radius: 20px;
  border: 2px solid var(---Light-Grey, #f3f3f3);
  background: var(---White, #fff);
  width: calc(33.3% - 15px);
}
.product_image {
  margin-bottom: 20px;
}
.product_image {
  width: 100%;
  height: 375px;
  object-fit: cover;
}
.product_card-desc {
  padding: 0 20px 30px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product_card-desc p {
  width: calc(50% - 15px);
}
</style>

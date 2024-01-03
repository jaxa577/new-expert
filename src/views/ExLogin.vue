<template>
  <section class="login">
    <div class="login_container container">
      <div class="login_inner">
        <div class="login_tab">
          <div
            v-for="(tab, index) in tabs"
            class="login_tab-item"
            @click="toggleTab(tab.id)"
            :class="{ active: currentTab == tab.id }"
            :key="index"
          >
            <p>{{ tab.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "Вход",
        },
        {
          id: 2,
          name: "Регистрация",
        },
      ],
      currentTab: 1,
    };
  },

  methods: {
    toggleTab(id) {
      this.currentTab = id;
    },
  },
};
</script>

<style>
.login {
  margin-top: 70px;
}
.login_container {
  display: flex;
  justify-content: center;
}
.login_inner {
  border-radius: 25px;
  border: 1.4px solid var(---Light-Grey, #f3f3f3);
  background: var(---White, #fff);
  padding: 60px 50px;
  max-width: 500px;
  width: 100%;
}
.login_tab {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: var(---Light-Grey, #f3f3f3);
  padding: 2px 4px;
}
.login_tab-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  border-radius: 200px;
  background: var(---, #f6f6f6);
  cursor: pointer;
  color: var(---, #757575);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  transition: all 0.3s ease-in-out;
}
.login_tab-item.active {
  background: var(---Accent, #1e75f8);
  color: var(---White, #fff);
}
</style>

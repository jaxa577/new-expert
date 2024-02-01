<template>
  <div class="select_holder">
    <div
      class="select_wrapper"
      @click="openSelect"
      :class="{ active: isSelectOpened, invalid: invalid, up: openUp }"
    >
      <div class="select_list-item current">
        <p class="custom_select_selected-value">{{ selectedValue }}</p>
        <img
          class="custom_select-arrow"
          src="/media/store/svgs/arrow_bottom.svg"
          width="18"
        />
      </div>
      <div
        :class="{ active: isSelectOpened }"
        ref="selectDiv"
        class="select_list"
      >
        <div
          v-for="(option, index) in selectList"
          class="select_list-item"
          @click="setOption(option)"
          @invalid="invalid = false"
          :class="{ selected: selectedValue == option.name }"
          :key="`option${index}`"
        >
          {{ option?.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curValue: String,
    selectList: Array,
    defaultValue: String,
    invalid: {
      type: Boolean,
      default: false,
    },
    lastselect: {
      type: Boolean,
    },
  },
  data() {
    return {
      isSelectOpened: false,
      selectedValue: this.defaultValue,
      openUp: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.validateOnMount();
    }, 300);
  },
  methods: {
    closeSelectOnOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.isSelectOpened = false;
        window.removeEventListener("click", this.closeSelectOnOutsideClick);
        this.scrollToTop();
      }
    },
    validateOnMount() {
      if (this.curValue) {
        let givenItem = this.selectList.find(
          (item) => item.id == this.curValue
        );
        this.selectedValue = givenItem.name;
      }
    },
    openSelect() {
      this.isSelectOpened = !this.isSelectOpened;
      if (this.isSelectOpened) {
        this.$emit("addmargin");
        window.addEventListener("click", this.closeSelectOnOutsideClick);

        // Check if there's enough space below the select, if not, open it upward
        const windowHeight = window.innerHeight;
        const selectBottomPosition = this.$el.getBoundingClientRect().bottom;
        const spaceBelow = windowHeight - selectBottomPosition;

        if (spaceBelow < 250) {
          this.openUp = true;
        } else {
          this.openUp = false;
        }
      } else {
        this.$emit("removemargin");
        window.removeEventListener("click", this.closeSelectOnOutsideClick);
      }
      this.scrollToTop();
    },
    setOption(option) {
      this.selectedValue = option.name;
      this.$emit("input", option.id);
      this.$emit("select-changed", option.id);
    },
    scrollToTop() {
      const scrollableDiv = this.$refs.selectDiv;
      if (scrollableDiv) {
        scrollableDiv.scrollTop = 0;
      }
    },
  },
  watch: {
    curValue: {
      immediate: true,
      handler: function () {
        if (this.curValue) {
          this.invalid = false;
          this.validateOnMount();
        } else {
          this.invalid = true;
          this.selectedValue = this.defaultValue;
          this.$forceUpdate();
        }
      },
    },
  },
};
</script>

<style>
.select_holder {
  border-radius: 10px;
  position: relative;
  height: 44px;
  min-width: 130px;
}

.select_wrapper {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  background: var(--5, #fff);
  cursor: pointer;
  max-height: 50px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 2px;
  border: 1px solid #ebf3ff;
  user-select: none;
  transition: 0.5s;
}

.custom_select_selected-value {
  margin: 0;
}

.select_wrapper.active {
  max-height: 250px;
  overflow: visible;
  border-color: #1e75f8;
  z-index: 99;
}

.select_wrapper.up {
  bottom: 0;
  top: auto;
}

.select_list {
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  background: var(--5, #fff);
  max-height: 200px;
  overflow-y: scroll;
  z-index: 9999;
}

.select_list-item {
  width: 100%;
  padding: 0 14px;
  height: 50px;
  display: flex;
  align-items: center;
  color: var(--3, #606060);
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  transition: all 0.3s ease;
}

.select_list-item:hover {
  background: #ebf3ff;
  color: #1e75f8;
}

.select_list-item.selected {
  background: #ebf3ff;
  color: #1e75f8;
}

.select_list-item.current {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  height: 50px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.select_list-item.current p {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select_list-item.current:hover {
  background: none !important;
  color: #606060 !important;
}

.custom_select-arrow {
  transition: all 0.3s ease;
}

.select_wrapper.active .custom_select-arrow {
  transform: rotate(-180deg);
}

/*asdasdasdsaasdasdasd*/
.notifications {
  max-width: 500px;
  width: 10%;
  padding: 24px 20px;
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: #fff;
}
.notifications_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notifications_header h2 {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 700;
  line-height: 110%; /* 22px */
}
.notifications_cross-btn {
}
.notifications_tab {
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
}
.notifications_tab-item {
  min-width: fit-content;
  color: var(---Accent, #1e75f8);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  padding: 10px;
  border-bottom: 2px solid transparent;
}
.notifications_tab-btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(---Light-Grey, #f3f3f3);
}
.notifications_list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}
.notifications_item {
  width: 100%;
  padding: 20px 14px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.notifications_item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 200px;
  background: var(---, #2f80f8);
}
.notifications_item-icon img {
  width: 35px;
  height: 35px;
  object-fit: contain;
}
.notifications_item-main {
}
.notifications_item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  gap: 14px;
}
.notifications_item-header h3 {
  color: var(---Black, #040404);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
}
.notifications_item-header p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 0.14px;
}
.notifications_item-context {
  color: var(---Black, #040404);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 24px;
}
.notifications_item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}
.notifications_item-footer p {
  color: var(---Dark-grey, #6c6c6c);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 0.14px;
}
.notifications_item-footer button {
  color: var(---Accent, #1e75f8);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
}
.notifications_footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>

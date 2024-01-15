<template>
  <div class="pcInfo">
    <div class="pcInfo_avatar">
      <h3 class="pcInfo_title">Аватарка</h3>
      <div class="pcInfo_avatar-inner">
        <div class="pcInfo_avatar-left">
          <div class="pcInfo_avatar-current">
            <img src="" alt="" />
            <p>Нет фото</p>
            <button><img src="/images/trashcan.svg" alt="" /></button>
          </div>
          <div class="pcInfo_avatar-list">
            <div class="pcInfo_avatar-item">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div class="pcInfo_avatar-right">
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

          <input
            type="text"
            name="ava_link"
            id="ava_link"
            class="pcInfo_ava-link"
            placeholder="Вставьте линк"
          />
        </div>
      </div>
    </div>

    <div class="pcInfo_main">
      <h3 class="pcInfo_title">Основная информация</h3>
      <div class="pcInfo_box">
        <div class="pvInfo_input">
          <input type="text" name="name" id="name" placeholder="Имя" />
        </div>
        <div class="pvInfo_input">
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Фамилия"
          />
        </div>
        <div class="pvInfo_input">
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Nickname_33"
          />
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

    <div class="pcInfo_aditional">
      <h3 class="pcInfo_title">Дополнительно</h3>
      <div class="pcInfo_box">
        <div class="pvInfo_input">
          <input
            type="text"
            name="mywebpage"
            id="mywebpage"
            placeholder="mywebpage"
          />
        </div>
        <div class="pvInfo_input">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="myemailaddres@gmail.com"
          />
        </div>
        <div class="pvInfo_input">
          <input
            type="text"
            name="tel"
            id="tel"
            placeholder="+998 (--) 123 45 67"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.pcInfo {
  width: 100%;
}
.pcInfo_avatar {
  width: 100%;
  margin-bottom: 100px;
}
.pcInfo_title {
  color: var(---Black, #040404);
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; /* 24px */
  letter-spacing: 0.2px;
  margin-bottom: 20px;
}
.pcInfo_avatar-inner {
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
}
.pcInfo_avatar-left {
  width: 40%;
}
.pcInfo_avatar-current {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 20px 24px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: var(---Light-Grey, #f3f3f3);
  height: 230px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 60px;
}
.pcInfo_avatar-current button {
  /* position: absolute; */
  width: 40px;
  height: 40px;
  border-radius: 200px;
  background: var(---White, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pcInfo_avatar-list {
  display: flex;
  gap: 10px;
  /* border-radius: 200px;
  background: var(---White, #fff); */
}
.pcInfo_avatar-item {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  background: var(---Light-Grey, #f3f3f3);
}
.pcInfo_avatar-right {
  width: 60%;
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  padding: 22px 42px;
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
  margin-top: 20px;
}
.pcInfo_ava-link:focus {
  border-color: #1e75f8;
}

.pcInfo_main {
  margin-bottom: 100px;
}
.pcInfo_box {
  padding: 24px 20px;
  border-radius: 20px;
  border: 1px solid var(---Light-Grey, #f3f3f3);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
</style>

<template>
    <div class="contact-page">
      <div class="top-rectangle" @click="$router.push('/')">
        <img src="@/assets/Home.svg" alt="Header Image" />
      </div>

      <div class="large-rectangle">
        <h1>carolinapadilla120@gmail.com</h1>
      </div>

      <div class="footer">
        <div class="footer-left">
          <div class="footer-item bordered">
            <img src="@/assets/icono1.svg" alt="icono1.svg" style="margin: 10px;">
            <a class="custom-cursor" style="color: var(--red);" href="https://wa.me/573138254267" target="_blank">+57 3138254267</a>
          </div>

          <div class="footer-item bordered">
            <img src="@/assets/icono2.svg" alt="icono2.svg" style="margin: 10px;">
            <a class="custom-cursor" style="color: var(--red);" href="mailto:carolinapadilla120@gmail.com" target="_blank">carolinapadilla120@gmail.com</a>
          </div>

          <div class="footer-item bordered">
            <img src="@/assets/icono3.svg" alt="icono3.svg" style="margin: 10px;">
            <a class="custom-cursor" style="color: var(--red);" href="https://www.instagram.com/ca.p_zip/" target="_blank">@cap_zip</a>
          </div>

          <div class="footer-item bordered">
            <img src="@/assets/icono4.svg" alt="icono4.svg" style="margin: 10px;">
            <a class="custom-cursor" style="color: var(--red);" href="https://www.behance.net/CA4P" target="_blank">behance.net/CA4P</a>
          </div>
        </div>

        <div class="footer-right">
          <img src="@/assets/1.gif" alt="GIF" style="margin: 10px;">
        </div>
      </div>
    </div>
</template>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #000;
}

.top-rectangle {
  width: 100%;
  height: 150px;
  background-color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-rectangle img {
  width: 50%; 
  height: 50%; 
}

.large-rectangle {
  width: 100%;
  height: calc(100vh - 350px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/click.svg');
  background-size: contain; 
  background-position: center;
  background-repeat: no-repeat;
}

.large-rectangle h1 {
  font-family: 'clash' 'bolder';
  font-size: 48px;
  color: #ffffff;
  text-align: center;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  background-color: #000;
}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-item {
  display: flex;
  align-items: center;
  margin-bottom: px;
}

.footer-right img {
  width: length;
  height: length;
}
</style>

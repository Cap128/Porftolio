<template>
  <div class="web-page">
    <!-- Botón para volver al Home -->
    <div class="top-rectangle" @click="$router.push('/')">
      <img src="@/assets/Home.svg" alt="Home Button" />
    </div>

    <!-- Título y años -->
    <h1 class="title">Página Web</h1>
    <div class="year-container">
      <span class="year-2023">2023</span>
      <span class="year-2024">2024</span>
    </div>

    <!-- Imagen principal -->
    <div class="main-image-container">
      <img src="@/assets/Pag Web.png" alt="Principal Image" class="main-image" />
    </div>

    <!-- Recuadro de texto opaco -->
    <div class="text-box">
      <p>Manos a la obra</p>
    </div>

  <!-- Footer -->
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
.web-page {
  background-color: black;
  color: white;
}

.top-rectangle img {
  cursor: pointer;
}

.title {
  font-family: 'Cinder', sans-serif;
  font-size: 200px;
  color: white;
  margin: 10px 0;
}

.year-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.year-2023 {
  font-family: 'Clash Display', sans-serif;
  font-weight: bolder;
  font-size: 20px;
}

.year-2024 {
  font-family: 'Clash Display', sans-serif;
  font-weight: bolder;
  font-size: 40px;
}

.main-image-container {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
}

.main-image {
  width: 100%;
  height: auto;
}

.text-box {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid red;
  color: black;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
}
</style>

      
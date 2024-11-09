<template>
    <div class="contact-page">
      <!-- Imagen que redirige al home -->
      <div class="top-rectangle" @click="$router.push('/')">
        <img src="@/assets/Home.svg" alt="Header Image" />
      </div>
  
      <!-- Imágenes del portafolio que ocupan todo el ancho de la ventana -->
      <div class="portfolio-images">
        <div><img src="@/assets/Editorial2.webp" alt="DISEÑODEINFORMACION" class="service-image"></div>
        <div><img src="@/assets/Editorial3.webp" alt="DISEÑODEINFORMACION" class="service-image"></div>
        <div><img src="@/assets/Editorial4.webp" alt="DISEÑODEINFORMACION" class="service-image"></div>
        <div><img src="@/assets/Editorial5.webp" alt="DISEÑODEINFORMACION" class="service-image"></div>
        <div><img src="@/assets/Editorial1.webp" alt="DISEÑODEINFORMACION" class="service-image"></div>
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
  
  .portfolio-images {
    width: 100%;
  }
  
  .service-image {
    width: 100%;
    height: 100%; 
  }
  
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #000;
  }
  
  .footer-left {
    display: flex;
    flex-direction: column;
  }
  
  .footer-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .footer-right img {
    width: 80px;
    height: 80px;
  }
  </style>
  
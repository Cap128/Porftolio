<template>
  <div>
    <!-- Encabezado -->
    <div class="header">
      <div class="left-column">
        <div class="left-row custom-cursor" @click="$router.push('/gallery')">
          <img src="@/assets/1.svg" alt="1.svg" style="margin: 10px;">
          <span class="red-text">GALERY</span> <!-- Texto en rojo -->
        </div>
        <div class="left-row">
          <img src="@/assets/2.svg" alt="2.svg" style="margin: 10px;">
          <a class="custom-cursor red-text" href="https://drive.google.com/file/d/1quR4mwg5vM4iqFhIfeamTP1KUKhbxbsi/view?usp=sharing" target="_blank">
            CURRICULUM
          </a> 
        </div>
        <div class="left-row">
          <img src="@/assets/3.svg" alt="3.svg" style="margin: 10px;">
           <a class="custom-cursor red-text" ></a><span class="red-text">CONTACT</span> <!-- Texto en rojo -->
        </div>
      </div>
      <div class="right-column">
        <img src="@/assets/logo1.svg" alt="IDVISUAL" style="margin: 10px;">
      </div>
    </div>
  </div>

    <!-- Cuerpo -->
    <div class="body">
      <div class="right-column-body">
        <div class="right-row bordered large-text">PORTFOLIO</div>
        <div class="right-row bordered medium-text">PROYECTS AND DESIGN CAROL PADILLA</div>
      </div>

      <!-- Columna izquierda con 2 filas principales -->
      <div class="left-column-body bordered">
        <!-- Fila principal 1 -->
        <div class="left-main-row">
          <div class="left-sub-row small-text">2022</div>
          <div class="left-sub-row medium-text">2023</div>
          <div class="left-sub-row large-text">2024</div>
        </div>

        <!-- Fila principal 2 -->
        <div class="left-main-row">
          <div class="left-sub-row small-text">
            ¡HI! MI NOMBRE ES CAROL PADILLA. VEN A EXPLORAR UNA MUESTRA DE MI TRABAJO COMO DISEÑADORA
          </div>
          <div class="left-sub-row small-text">
            *El arte puede ser una forma de capturar momentos fugaces y congelarlos en el tiempo -Roy Lichtenstein.*
          </div>
        </div>
      </div>
    </div>

   <!-- Sección de servicios -->
<div class="services-section">
  <div class="services-column">
    <div class="services-row">
      <span style="color: var(--red);">DISEÑO DE INFORMACIÓN</span>
      <img src="@/assets/editorial.svg" alt="DISEÑO DE INFORMACION" class="service-image">
    </div>
    <div class="services-row">
      <span style="color: var(--red);">PROGRAMACIÓN</span>
      <img src="@/assets/programacion.svg" alt="PROGRAMACIÓN" class="service-image">
    </div>
  </div>

  <div class="services-column">
    <div class="services-row">
      <span style="color: var(--red);">CARTELES</span>
      <img src="@/assets/carteles.svg" alt="CARTELES" class="service-image">
    </div>
    <div class="services-row">
      <span style="color: var(--red);">WEB</span>
      <img src="@/assets/web.svg" alt="Web" class="service-image">
    </div>
  </div>
</div>
    <!-- Texto con movimiento -->
    <div class="contact-box">
      ¿QUIERES QUE TU VISIÓN COBRE VIDA? NO DUDES EN CONTACTARME, Y CREAR UN MUNDO DE POSIBILIDADES.
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
</template>
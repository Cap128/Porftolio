<template>
  <div class="contact-page">
    <div class="top-rectangle" @click="$router.push('/')">
      <img src="@/assets/Home.svg" alt="Header Image" />
    </div>

   
    <div class="grid-container">
      <div class="grid-item">
        <img src="@/assets/c1.png" alt="c1.png" class="png-image" />
        <span class="text-overlay">Xilografía,PÓSTER, NATURALEZA MUERTA 2023</span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c2.png" alt="c2.png" class="png-image" />
        <span class="text-overlay">Collage,Libro Mientras Llueve,Fernando Soto, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c3.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">TERLUCHES RACING, PÓSTER 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c4.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">FANART, Jorja Smith, Albúm: Lost & Found, 2024 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c5.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">FANART, FEID, Albúm: Intershibuya, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c6.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">FANART, Lil Supa, Albúm: SERIO, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c7.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">PAST ANYWHERE, PÓSTER FOTOGRAFÍA, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c8.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">MONTAJE, Espejo Lyrics PÓSTER 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c9.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">FANART, David Bowie, Albúm: Scary Monsters, 2024 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c10.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">FANART, FEID, Albúm: Intershibuya, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c11.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">TERLUCHES RACING, PÓSTER 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c12.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">TERLUCHES RACING, PÓSTER 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c13.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">TWINS PÓSTER, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c14.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">PÓSTER, Fotografía LIZANDRO MEZA, 2023 </span>
      </div>
      <div class="grid-item">
        <img src="@/assets/c15.png" alt="c3.png" class="png-image" />
        <span class="text-overlay">PÓSTER, ALWAYS SKY, CA.P STUDIOS, 2023 </span>
        

        
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-left">
        <div class="footer-item bordered">
          <img src="@/assets/icono1.svg" alt="icono1.svg" style="margin: 10px;" />
          <a class="custom-cursor" style="color: var(--red);" href="https://wa.me/573138254267" target="_blank">+57 3138254267</a>
        </div>
        <div class="footer-item bordered">
          <img src="@/assets/icono2.svg" alt="icono2.svg" style="margin: 10px;" />
          <a class="custom-cursor" style="color: var(--red);" href="mailto:carolinapadilla120@gmail.com" target="_blank">carolinapadilla120@gmail.com</a>
        </div>
        <div class="footer-item bordered">
          <img src="@/assets/icono3.svg" alt="icono3.svg" style="margin: 10px;" />
          <a class="custom-cursor" style="color: var(--red);" href="https://www.instagram.com/ca.p_zip/" target="_blank">@cap_zip</a>
        </div>
        <div class="footer-item bordered">
          <img src="@/assets/icono4.svg" alt="icono4.svg" style="margin: 10px;" />
          <a class="custom-cursor" style="color: var(--red);" href="https://www.behance.net/CA4P" target="_blank">behance.net/CA4P</a>
        </div>
      </div>

      <div class="footer-right">
        <img src="@/assets/1.gif" alt="GIF" style="margin: 10px;" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: #000000;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
 
}

.grid-item {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: black;
  height: auto;
}

.png-image {
  width: 100%;
  height: 100%;
}

.text-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: black;
  background-color: white;
  padding: 10px;
  opacity: 70%;
  font-size: 1.2em;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 0px;
  background-color: black;
  color: white;

}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-item {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
}

.bordered {
  border: 2px solid red;
  padding: 5px;
}

.footer-right img {
  width: 100%px;
  height: auto;
}

</style>

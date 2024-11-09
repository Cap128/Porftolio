<template>
  <div class="gallery-page">
    <!-- Botón para volver al Home -->
    <div class="top-rectangle" @click="$router.push('/')">
      <img src="@/assets/Home.svg" alt="Home Button" />
    </div>

    <!-- Título y años -->
    <h1 class="title">Gallery</h1>
    <div class="year-container">
      <span class="year-2023">2023</span>
      <span class="year-2024">2024</span>
    </div>

    <!-- Recuadro para información adicional -->
    <div class="info-box">
      <p>EN MOVIMIENTO.</p>
    </div>

    <!-- Grilla de fotografías -->
    <div class="photo-grid">
      <div v-for="n in 15" :key="n" class="photo-item">
        <img :src="`@/assets/f${n}.png`" :alt="`Foto ${n}`" class="photo-image" />
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <!-- Contenido del footer aquí -->
    </div>
  </div>
</template>

<style scoped>
.gallery-page {
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

.info-box {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid red;
  color: white;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.photo-item {
  border: 2px solid red;
}

.photo-image {
  width: 100%;
  height: auto;
}
</style>

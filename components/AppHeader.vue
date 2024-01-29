<template>
  <div>
    <div class="header">
    <NuxtImg class="header-image" src="/amethystshard.png" height="80px" />
    <h1 class="header-item">Spectralo's Website</h1>
    </div> 
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .header {
    color: #B6C4B6;
    text-align: start;
    font-family: 'Inconsolata', sans-serif;
    font-weight: 900;
    padding:5px;
    background-color: #163020 !important;
    display: flex;
    flex: start;
    margin: auto;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .header-image {
    background-color: #163020 !important;
    padding-right: 0%;
    position: relative;
    top: 50%;
    padding-left: 0%;
    margin-left: 3%;
  }
  .header-item {
    background-color: #163020;
    position: relative;
    font-size: 250%;
    padding-right: 7%;
    padding-left: 4%;
  }
  @keyframes rotate{
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  .header-image:hover {
    animation-name: rotate;
    animation-duration: 1s;
  }

</style>
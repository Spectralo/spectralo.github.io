<template>
  <div>
    <div class="footer">
      <NuxtLink to="/" class="items">Home</NuxtLink>
      <NuxtLink to="/contact" class="items">Contact</NuxtLink>
      <NuxtLink to="/aboutme" class="items">About Me</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .footer {
    border-top: 4px solid #fff9c0;
    background-color: rgb(6, 8, 27);  
    display: flex;
    justify-content: start;
    align-items: center;
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
  }
  .items {
    padding-left: 7%;
    font-family: 'Inconsolata', sans-serif;
    color: #fff9c0;
    text-decoration: none;
    font-size: 40px;
  }
  .items:hover {
    text-decoration: underline; 
  }
</style>
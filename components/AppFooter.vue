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
    background-color: #163020;
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
    background-color: #163020;
    font-family: 'Inconsolata', sans-serif;
    color: #B6C4B6;
    text-decoration: none;
    font-size: 40px;
  }
  .items:hover {
    text-decoration: underline; 
  }
</style>
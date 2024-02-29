<template>
  <div class="page">
    <h1 class="title">Hello, I'm Spectral</h1>
    <h1 class="projects-title">My projects</h1>
    <div class="scroll-container">
      <img v-for="project in projects" src="" alt="Cinque Terre" height="200px">
    </div> 
      <NuxtLink to="/aboutme" class="showmore">Show more</NuxtLink>
  </div>
</template>

<script setup>
</script>

<style>
  .title {
    color : #fff9c0;
    font-family: 'Inconsolata', sans-serif;
    font-weight: 700;
    padding-top: 5%;
    font-size: 3em;
  }
  .projects-title {
    color : #fff9c0;
    font-family: 'Inconsolata', sans-serif;
    font-weight: 700;
    padding-top: 5%;
    padding-left: 1%;
    font-size: 2em;
    padding-bottom: 2%;
  }
  div.scroll-container {
    padding-left: 5%;
    background-color: rgb(65, 21, 25);
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 40px;
  }

  div.scroll-container img {
    padding: 10px;
  }
  .page {
    padding-left: 7%;
  }
  .showmore {
    background-color: rgb(65, 21, 25);
    color: #fff9c0;
    text-decoration: none;
    padding: 1%;
    font-family: 'Inconsolata', sans-serif;
    font-weight: 700;
    border-radius: 20px;
    font-size: 1.5em;
  }
  .showmore:hover {
    text-decoration: underline;
    padding-right: 1.1%;
    transition: .25s ease;
  }
  img {
    border-radius: 20px;
  }
  img:hover {
    background-color: rgb(43, 13, 16);
    transition: 1s ease;
  }
</style>
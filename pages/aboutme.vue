<template>
  <div class="container">
      <div class="profile-picture">
        <img class="img" src="/amethystshard.png" height="300px" />
      </div>
      <div class="text">
        <h1 class="abouttext">Hi, I'm <span>Arthur</span>. I'm {{difference}} yrs old. I love coding, gardening, baking and playing video-games of course. Most of the time I try to create video games (Godot ^^), but I also make websites and a lot of others things.</h1>
      </div>
  </div>
</template>

<script lang="ts" setup>
  const ActualDate = new Date();
  const difference = ref(ActualDate.getFullYear() - 2010);
</script>

<style>
  .profile-picture {
    height: 320px;
    width: 320px;
    background-color: rgb(65, 21, 25) !important;
    border-radius: 50%;
  }
  .img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10%;
  }
  .text {
    font-family: 'Inconsolata', sans-serif;
    font-weight: 700;
    background-color: rgb(65, 21, 25);
    margin-left: 2%;
    border-radius: 20px;
    margin-top: 0px;
    margin-bottom: 30px;
    width: 30%;
    color: #fff9c0 !important;

  }
  span {
    text-decoration: underline;
  }
  .abouttext {
    margin: 30px;
    color: #fff9c0 !important;
    font-family: 'Inconsolata', sans-serif;
    font-weight: 700;
    font-size: 30px;
    word-wrap: break-word 
  }
</style>
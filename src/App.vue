<template>
  <div>
    <header>
    </header>
    <h1>Nyam Nyam! Zichar</h1>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

export default {
  data() {
    return {
      }
    },
  components: {
    Header
  }
  
}
</script>

<style>

  header {
      background: url(https://static.ricemedia.co/wp-content/uploads/2019/08/ricemedia_fourheavenlykings_photo-10-1024x683.jpg);
      height:100px;
      background-position: center center;
      
  }
  h1 {
    background-color: #618683;
    color: #ffffff;
    text-align: center;
    height: 70px;
    text-shadow: 2px 2px 4px #000000;
  }

</style>

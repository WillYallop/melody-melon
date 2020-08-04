<template>
  <div>
    <siteHeader/>
    <Nuxt class="pageContainer sitePadding" :class="{ 'pageSliderOpen' : sliderOpen, 'pageLock' : sliderLock }"/>
    <playlistSlider/>
  </div>
</template>

<script>
//components
import siteHeader from '@/components/GlobalComponents/Header'
import playlistSlider from '@/components/GlobalComponents/PlaylistSlider'

export default {
  data() {
    return {

    }
  },
  components: {
    siteHeader,
    playlistSlider
  },
  mounted() {

  },
  computed: {
    sliderOpen() {
      return this.$store.state.playlistSlider.status
    },
    sliderLock() {
      if(this.$router.currentRoute.path == '/') { 
        return true
      } else {
        return false
      }
    }
  },
  methods: {

  }
}
</script>

<style>
html {
  -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
  -webkit-tap-highlight-color: transparent !important;
  height: 100%;
}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #EE7752, #E72B51);
  background-size: 300% 300%;
	animation: gradient 5s ease infinite;
}
@keyframes gradient {
	0% {	background-position: 0% 50%;}
	50% {background-position: 100% 50%;}
	100% {	background-position: 0% 50%;}
}

#app {
  height: auto;
  min-height: 100%;
}
button {font-family: 'Montserrat', sans-serif;}
button:focus {outline: none;}
input {font-family: 'Montserrat', sans-serif;}
select {font-family: 'Montserrat', sans-serif;}
textarea {font-family: 'Montserrat', sans-serif;}
input:focus {outline: none;}
textarea:focus {outline: none;}
::selection {background-color: #43B497; color: #FFF;}
img{text-indent:-9999px}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


.pageContainer {
  width: 100%;
  transition: 0.3s;
  position: absolute;
  top: 60px;
  left: 0;
}
.pageContainer.pageSliderOpen {
  width: calc(100% - 500px);
}
.pageLock {
  width: calc(100% - 500px) !important;
}

/* padding */
.sitePadding {
  padding: 0 40px;
}


@media only screen and (max-width: 1024px) {
  /* page container */
  .pageContainer.pageSliderOpen {width: 100%; left: -100%;}
  .pageLock {width: 100% !important;}
  /* padding */
  .sitePadding {padding: 0 20px;}
}
</style>

<template>
  <div>
    <siteHeader/>
    <Nuxt class="pageContainer" :class="{ 'pageSliderOpen' : sliderOpen }"/>
    <playlistSlider/>

    <div class="mobilePlaylistToggle" v-on:click="$store.commit('toggleSlider')"><fa class="fas" :icon="['fas', 'headphones']" /></div>
    <div class="siteBackground"></div>
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
    }
  },
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');

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

}
@keyframes gradient {
	0% {	background-position: 0% 50%;}
	50% {background-position: 100% 50%;}
	100% {	background-position: 0% 50%;}
}

.siteBackground {
  position: fixed;
  top: 0;
  bottom: -56px;
  left: 0;
  right: 0;
  background: linear-gradient(-45deg, #EE7752, #E72B51);
  background-size: 300% 300%;
	animation: gradient 5s ease infinite;
  z-index: 0;
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

/* page container */
.pageContainer {
  width: 100%;
  min-height: 100%;
  transition: 0.3s;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
}
.pageContainer.pageSliderOpen {
  width: calc(100% - 500px);
}

/* global */
.siteWrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
/* padding */
.sitePadding {
  padding-left: 40px;
  padding-right: 40px;
}

.mobilePlaylistToggle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #FFF;
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.mobilePlaylistToggle .fas {
  font-size: 16px;
}

@media only screen and (min-width: 1070.1px) {
  .mobilePlaylistToggle {display: none;}
}
@media only screen and (max-width: 1070px) {
  /* page container (slider open css is inverted for mobile) */
  .pageContainer {left: -100%;}
  .pageContainer.pageSliderOpen {width: 100%; left: 0;}

  /* padding */
  .sitePadding {padding: 0 20px;}
}
</style>

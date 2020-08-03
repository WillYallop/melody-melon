<template>
  <div class="siteContainer">
    
    <appHeader/>

    <div class="siteContent">
        <nuxt/>
    </div>

    <playlistSlider/>

    <button v-on:click="playlistAndPageSlideToggle" class="openPlaylistBtn"><fa class="fas" :icon="['fas', 'headphones']" /></button>

    <div class="siteBackground"></div>
  </div>
</template>

<script>
import appHeader from '@/components/AppHeader'
import playlistSlider from '@/components/PlaylistSlider'

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    props: {

    },
    components: {
      appHeader,
      playlistSlider

    },
    computed: {

    },
    methods: {
      //Navigation Toggler
      playlistAndPageSlideToggle: function() { 
        //Toggle Playlist Slider
        [].map.call(document.querySelectorAll('.playlistSliderContainer'), function(el) {
            el.classList.toggle('playlistSliderOpen');
        });
        //Toggle Page 
        [].map.call(document.querySelectorAll('.siteContent'), function(el) {
            el.classList.toggle('slidePage');
        });
        //Toggle Header 
        [].map.call(document.querySelectorAll('.siteHeader'), function(el) {
            el.classList.toggle('slideHeader');
        });
      },
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
img{
  text-indent:-9999px
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Page */
.siteContainer {
  position: relative;
}

.siteContent {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 86.38px;
  padding-right: 40%;
  width: 100%;
  z-index: 20;
}

/* Open Slider Btn */
.openPlaylistBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  background-color: #FFF;
  border-radius: 50%;
  border: none;
  z-index: 1000;
  cursor: pointer;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1));
}
.openPlaylistBtn .fas {
  font-size: 20px;
}


/* Background Underlay */
.siteBackground {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: -60px;
  z-index: 1;
  background: linear-gradient(-45deg, #EE7752, #E72B51);
  background-size: 300% 300%;
	animation: gradient 5s ease infinite;
}
@keyframes gradient {
	0% {	background-position: 0% 50%;}
	50% {background-position: 100% 50%;}
	100% {	background-position: 0% 50%;}
}


@media screen and (min-width: 1024.1px) {
    .openPlaylistBtn {display: none;}
}
@media only screen and (max-width: 1024px) {
  .siteContent {padding-right: 0; transition: 0.3s; transition-property: left, padding;}
  .siteContent.slidePage {left: -100%;}
}

.swiper-pagination-bullet {
  background: #FFF !important;
  opacity: 0.8 !important;
}
.swiper-pagination-bullet-active {
  background: #E9536C !important;
}
</style>

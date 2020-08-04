<template>
    <header class="headerContainer" :class="{ 'headerSliderOpen' : sliderOpen, 'headerLock' : sliderLock }">   
        <button v-on:click="$store.commit('toggleSlider')">Toggle</button>
    </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

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

<style scoped>
.headerContainer {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 0 0 20px 0;
    transition: 0.3s;
}

.headerContainer.headerSliderOpen {
  width: calc(100% - 510px);
}
.headerLock {
  width: calc(100% - 510px) !important;
}
 

@media only screen and (max-width: 1024px) {
  .headerContainer.headerSliderOpen {width: 100%; left: -100%;}
  .headerLock {width: 100% !important;}
}
</style>
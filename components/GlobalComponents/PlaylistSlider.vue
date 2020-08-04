<template>
  <div class="sliderContainer" :class="{ 'active' : sliderOpen, 'sliderLock' : sliderLock }">
      <button v-on:click="$store.commit('toggleSlider')">Toggle</button>
  </div>
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
.sliderContainer {
    position: fixed;
    top: 0;
    right: -500px;
    bottom: 0;
    width: 500px;
    background-color: #1E1E1E;
    border-radius: 20px 0 0 20px;
    transition: 0.3s;
}
.sliderContainer.active {
    right: 0;
}
.sliderLock {
    right: 0 !important;
}

@media only screen and (max-width: 1024px) {
    .sliderContainer {right: -100% !important; width: 100%;}
    .sliderContainer.active {right: 0 !important;}
}
</style>

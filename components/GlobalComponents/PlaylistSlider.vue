<template>
  <div class="sliderContainer"  :class="{ 'active' : sliderOpen }">
      
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
        }

    },
    methods: {

    }

}
</script>

<style scoped>
.sliderContainer {
    position: fixed;
    top: 10px;
    right: -500px;
    bottom: 10px;
    width: 490px;
    background-color: #1E1E1E;
    border-radius: 20px;
    transition: 0.3s;
    z-index: 1000;
}
.sliderContainer.active {
    right: 10px;
}

@media only screen and (max-width: 1024px) {
    /* handle pos (slider open css is inverted for mobile) */
    .sliderContainer {right: 10px !important; width: 100%;}
    .sliderContainer.active {right: -100% !important;}
}
</style>

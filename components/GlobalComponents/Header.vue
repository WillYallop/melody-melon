<template>
    <header id="siteHeader" class="headerContainer" :class="{ 'headerSliderOpen' : sliderOpen, 'headerScrolled' : scrollPos > 10 }">   
        <div class="headerWrapper">
            <img class="logoImg" src="../../assets/images/siteLogo.png" alt="Melody Melon" v-on:click="$router.push('/')">
            <nav class="siteNavigation">
                <ul>
                    <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
                    <li><nuxt-link to="/for-artists">FOR ARTISTS</nuxt-link></li>
                </ul>
                <button class="toggleSliderBtn" v-on:click="$store.commit('toggleSlider')">></button>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrollPos: 0
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
        headerScrolled() {
            this.scrollPos = window.scrollY
        },
    },
    created() {
        if (process.client) { 
            window.addEventListener('scroll', this.headerScrolled);
        }
    },
    destroyed() {
        if (process.client) { 
            window.removeEventListener('scroll', this.headerScrolled);
        }
    }
}
</script>

<style scoped>
.headerContainer {
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    background-color: rgba(30, 30, 30, 0);
    border-radius: 0 0 20px 0;
    transition: 0.3s;
    padding: 40px 40px 0;
    display: flex;
    justify-content: center;
    z-index: 1000;
}

.headerContainer.headerSliderOpen {
  width: calc(100% - 510px);
}


/* Scroll down class */
.headerScrolled {height: 60px;background-color: rgba(30, 30, 30, 0.9);align-items: center; padding: 0 40px;}

.headerWrapper {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
} 
.logoImg {
    height: 40px;
    cursor: pointer;
}
.siteNavigation {
    display: flex;
    align-items: center;
}
.siteNavigation ul {
    list-style-type: none;
}
.siteNavigation ul li {
    display: inline; margin-right: 20px;
}
.siteNavigation ul li:last-child {
    margin-right: 0;
}
.siteNavigation ul li a {
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
}
.toggleSliderBtn {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    margin-left: 20px;
}

@media only screen and (max-width: 1024px) {
    /* header slider pos (slider open css is inverted for mobile) */
    .headerContainer {left: -100%; padding: 40px 20px 0;}
    .headerContainer.headerSliderOpen {width: 100%; left: 0;}
    .headerScrolled {padding: 0 20px;}
}

@media only screen and (max-width: 700px) {
    .siteNavigation ul {display: none;}
}
</style>
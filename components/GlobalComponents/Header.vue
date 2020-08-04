<template>
    <header class="headerContainer" :class="{ 'headerSliderOpen' : sliderOpen, 'headerLock' : sliderLock, 'headerScrolled' : headerScrolled }">   
        <div class="headerWrapper">
            <img class="logoImg" src="../../assets/images/siteLogo.png" alt="Melody Melon" v-on:click="navigate('home')">
            <nav class="siteNavigation">
                <ul>
                    <li v-on:click="$store.commit('showToggleDesktopBtn', true)"><nuxt-link to="/contact">CONTACT</nuxt-link></li>
                    <li v-on:click="$store.commit('showToggleDesktopBtn', true)"><nuxt-link to="/for-artists">FOR ARTISTS</nuxt-link></li>
                </ul>
                <button v-if="showToggleBtn" class="toggleSliderBtn" v-on:click="$store.commit('toggleSlider')">></button>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            headerScrolled: false,
        }
    },
    components: {

    },
    mounted() {
        if(this.$router.currentRoute.path != '/') {
            this.$store.commit('showToggleDesktopBtn', true) 
        } 
    },
    computed: {
        sliderOpen() {
            return this.$store.state.playlistSlider.status
        },
        showToggleBtn() {
            return this.$store.state.playlistSlider.toggleDeskBtn
        },
        sliderLock() {
            if(this.sliderOpen) { 
                if(this.$router.currentRoute.path == '/') {
                    return true
                } else {
                    return false
                }
            } else {
                if(this.$router.currentRoute.path == '/') {
                    return true
                }   else {
                    return false
                }
            } 
        }
    },
    methods: {
        navigate(dest) {
            if(dest == 'home') {
                this.$store.commit('showToggleDesktopBtn', false) 
                this.$store.commit('sliderSpecific', true)
                this.$router.push('/')
            }
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
}
.headerScrolled {
    background-color: rgba(30, 30, 30, 0.8);
}
.headerContainer.headerSliderOpen {
  width: calc(100% - 510px);
}
.headerLock {
  width: calc(100% - 510px) !important;
}

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
    .headerLock {width: 100% !important;}
}

@media only screen and (max-width: 700px) {
    .siteNavigation ul {display: none;}
}
</style>
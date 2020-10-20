<template>
    <header id="siteHeader" class="headerContainer" :class="{ 'headerSliderOpen' : sliderOpen, 'headerScrolled' : scrollPos > 10 }">   
        <div class="headerWrapper">
            <!--<img class="logoImg" src="../../assets/images/siteLogo.png" alt="Melody Melon" v-on:click="$router.push('/')" data-not-lazy>-->
            <nuxt-link to="/">
                <picture>
                    <source :srcSet="require('~/assets/images/siteLogo.png?webp')" type="image/webp" />
                    <source :srcSet="require('~/assets/images/siteLogo.png')" type="image/png" />
                    <img class="logoImg" :src="require('~/assets/images/siteLogo.png?webp')" alt="Melody Melon" data-not-lazy/>
                </picture>
            </nuxt-link>
            <nav class="siteNavigation">
                <ul>
                    <li><nuxt-link to="/">HOME</nuxt-link></li>
                    <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
                    <!--<li><nuxt-link to="/for-artists">FOR ARTISTS</nuxt-link></li>-->
                    <li><nuxt-link to="/blog">BLOG</nuxt-link></li>
                </ul>
                <button class="toggleSliderBtn" v-on:click="$store.commit('toggleSlider')"><fa class="fas" v-if="sliderOpen" :icon="['fas', 'chevron-right']" /><fa class="fas" v-if="!sliderOpen" :icon="['fas', 'chevron-left']" /></button>
                <!-- mobile nav toggle -->
                <button class="mobielNavToggleBtn" v-on:click="showMobileNav = !showMobileNav">
                    <fa class="fas" :icon="['fas', 'bars']" />
                </button>
            </nav>
        </div>

        <nav v-if="showMobileNav" class="mobileNav">
            <div class="mobileNavInner">
                <ul class="navUl">
                    <li v-on:click="showMobileNav = !showMobileNav"><nuxt-link to="/">HOME</nuxt-link></li>
                    <li v-on:click="showMobileNav = !showMobileNav"><nuxt-link to="/contact">CONTACT</nuxt-link></li>
                    <!--<li v-on:click="showMobileNav = !showMobileNav"><nuxt-link to="/for-artists">FOR ARTISTS</nuxt-link></li>-->
                    <li v-on:click="showMobileNav = !showMobileNav"><nuxt-link to="/blog">BLOG</nuxt-link></li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<script>
export default {
    data() {
        return {
            scrollPos: 0,
            showMobileNav: false
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
    transition: 0.3s;
    padding: 40px 40px 0;
    display: flex;
    justify-content: center;
    z-index: 2000;
}

.headerContainer.headerSliderOpen {
  width: calc(100% - 510px);
  border-radius: 0 0 20px 0;
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
    z-index: 20;
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
.headerSliderOpen .toggleSliderBtn {
    margin-right: -10px;
}
.toggleSliderBtn .fas {
    font-size: 10px;
}

.mobielNavToggleBtn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
}
.mobielNavToggleBtn .fas {
    font-size: 24px;
    color: #FFF;
}

/* mobile nav */
.mobileNav {
    position: fixed;
    top: 0;
    bottom: -56px;
    right: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
}
.mobileNavInner {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    transition: 0.3s;
    animation-name: nav-animation;
    animation-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 56px;   
}
@keyframes nav-animation {
  from {width: 0px;}
  to {width: 100%;}
}

.navUl {
    opacity: 1;
    padding: 0 20px;
    list-style-type: none;
    text-align: center;
    min-width: 200px;
}
.navUl li {
    margin-bottom: 20px;
}
.navUl li a {
    text-decoration: none;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
}


@media only screen and (max-width: 1070px) {
    /* header slider pos (slider open css is inverted for mobile) */
    .headerContainer {left: -100%; padding: 40px 20px 0; border-radius: 0 !important;}
    .headerContainer.headerSliderOpen {width: 100%; left: 0;}
    .headerScrolled {padding: 0 20px;}
    .toggleSliderBtn {display: none;}
}

@media only screen and (min-width: 700.1px) {
    .mobielNavToggleBtn {display: none;}
    .mobileNav {display: none;}
}
@media only screen and (max-width: 700px) {
    .siteNavigation ul {display: none;}
}
</style>
<template>
    <header id="siteHeader" class="siteHeader">
        <div class="headerInner">
            <img v-on:click="$router.push('/')" class="siteLogo" src="@/assets/images/siteLogo2.png" alt="Melody Melon Logo" data-not-lazy>
            <div class="rightContainer">
                <nuxt-link class="routerLinkHeader" to="/contact">CONTACT</nuxt-link>
                <!-- Hamburger -->
                <button v-on:click="openNav" class="hamburger hamburger--spin" type="button" aria-label="Open navigation">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>

        <nav class="navigationContainer">
            <li v-on:click="openNav"><nuxt-link to="/" >Home</nuxt-link></li>
            <li v-on:click="openNav"><nuxt-link to="/contact" >Contact</nuxt-link></li>
        </nav>

    </header>
</template>

<script>
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
        openNav() {
            //Toggle Nav
            [].map.call(document.querySelectorAll('.navigationContainer'), function(el) {
                el.classList.toggle('navOpen');
            });
            //Toggle hamburger
            [].map.call(document.querySelectorAll('.hamburger'), function(el) {
                el.classList.toggle('is-active');
            });
        },

        headerScrolled() {
            if (window.scrollY > 10) {
                var element = document.getElementById("siteHeader");
                element.classList.add("headerScrolled");
            } else {
                var element = document.getElementById("siteHeader");
                element.classList.remove("headerScrolled");
            }
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
.siteHeader {
    display: flex;
    justify-content: center;
    position: fixed; 
    top: 0;
    left: 0;
    right: calc(40% + 10px);
    height: 86.38px;
    transition: 0.3s;
    width: auto;
    transition-property: height, background-color ;
    z-index: 2000;
    border-radius: 0 0 20px 0;
}
.headerInner {
    width: 100%;
    max-width: 1400px;
    display: flex;
    padding: 40px 40px 0;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    transition: 0.3s;
    transition-property: padding ;
    z-index: 100;
}
.siteLogo {
    cursor: pointer;
    transition: 0.3s;
    transition-property: width ;
    width: 150px;
    max-height: 46.38px;
}
/* Scroll down class */
.headerScrolled {height: 60px;background-color: #1e1e1eea;align-items: center;}
.headerScrolled .headerInner {padding: 0 40px !important;}
.headerScrolled .siteLogo {width: 130px; }


.rightContainer {
    display: flex;
    align-items: center;
    height: 35px;
}
.routerLinkHeader {
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
}


/*Hamburger*/
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  background-color: #FFFFFF;
}
.hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner::before, .hamburger.is-active .hamburger-inner::after {
  background-color: #FFFFFF;
}
.hamburger {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: transparent;
}
.dm .hamburger {background-color: #101114;}
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 35px;
  height: 3px;
}
.hamburger-box {
  width: 35px;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}


/* Navigation */
.navigationContainer {
    position: absolute;
    top: -200px;
    left: 0;
    height: 200px;
    width: 100%;
    background-color: #1E1E1E;
    transition: 0.3s;
    z-index: 50;
    box-sizing: content-box;
}

.navOpen {
    top: 0;
    padding-top: 86.38px;
}
.headerScrolled .navOpen {
    top: 60px;
    padding-top: 0px;
}



@media screen and (min-width: 1024.1px)  {
    .hamburger {display: none}
}
@media screen and (max-width: 1024px) {
    .routerLinkHeader {display: none}

    .siteHeader {padding-right: 0; width: 100%; right: auto; transition-property: padding, width, height, background-color, right, left !important; border-radius: 0;}
    .slideHeader {left: -100%; position: absolute;}

}
@media screen and (max-width: 767px) {
    .headerInner {padding: 40px 20px 0}
    .headerScrolled .headerInner {padding: 0 20px !important;}
}
</style>
<template>
    <footer class="footerContainer">
        <div class="siteWrapper sitePadding">
            <div class="topRow"> 
                <!-- <img class="logoImg" loading="lazy" src="../../assets/images/siteLogo.png" alt="Melody Melon" v-on:click="$router.push('/')"> -->
                <nuxt-link to="/">
                    <picture>
                        <source :srcSet="require('~/assets/images/siteLogo.png?webp')" type="image/webp"/>
                        <source :srcSet="require('~/assets/images/siteLogo.png')" type="image/png"/>
                        <img class="logoImg" loading="lazy" :src="require('~/assets/images/siteLogo.png')" alt="Melody Melon" data-not-lazy/>
                    </picture>
                </nuxt-link>
                <button class="submitSongBtn" v-on:click="$store.commit('toggleModal')">submit song</button>
            </div>
            <div class="bottomRow">
                <div class="textarea">
                    <div class="legalLinksCon">
                        <nuxt-link to="/terms-conditions">TERMS</nuxt-link>
                        <nuxt-link to="/privacy">PRIVACY</nuxt-link>
                    </div>
                    <p>Melody Melon ©{{getYear}}. All Rights Reserved.</p>
                </div>
                <div class="socialLinksContainer">
                    <div class="linkCon spotifyBg" v-on:click="navigateTo('https://open.spotify.com/user/9b0arwvohrpgzewx9e4bjkr1y')"><fa class="fas" :icon="['fab', 'spotify']" /></div>
                    <div class="linkCon instaBg" v-on:click="navigateTo('https://www.instagram.com/melodymelonmusic/')"><fa class="fas" :icon="['fab', 'instagram']" /></div>
                    <div class="linkCon facebookBg" v-on:click="navigateTo('')"><fa class="fas" :icon="['fab', 'facebook-f']" /></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        getYear() {
            var date = new Date()
            return date.getFullYear()
        }
    },
    methods: {
        navigateTo(url) {
            var win = window.open(url, '_blank')
            win.focus()
        }
    }
}
</script>

<style scoped>
.footerContainer {
    width: 100%;
    background-color: #1E1E1E;
    padding: 40px 0;
}
.pageSliderOpen .footerContainer {
    width: calc(100% - 10px);
    border-radius: 0 20px 0 0;
}

.topRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
}
.logoImg {
    height: 40px;
}
.submitSongBtn {
    padding: 10px 40px;
    color: #FFF;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    transition: 0.3s;
    background-color: #E32539;
    cursor: pointer;
}
.submitSongBtn:hover {
    transform: scale(1.1);
}

.bottomRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.textarea {
    color: #FFF;
}
.legalLinksCon {
    margin-bottom: 10px;
}
.legalLinksCon a {
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
}
.legalLinksCon a:hover {
    text-decoration: underline;
}
.legalLinksCon a:first-child {
    margin-right: 10px;
}
.socialLinksContainer {
    display: flex;
}

.linkCon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #FFF;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.linkCon .fas {
    color: #FFF;
    font-size: 16px;
}
.linkCon:first-child {
    margin-left: 0;
}
.spotifyBg {background-color: #1DB954;} 
.instaBg {background-color: #E1306C;} 
.facebookBg {background-color: #006AFF;} 

@media only screen and (max-width: 1070px) {
    .pageSliderOpen .footerContainer {width: 100%; border-radius: 0;}
    .socialLinksContainer {width: 100%; margin-bottom: 20px;}
    .bottomRow {flex-wrap: wrap-reverse;}
}
@media only screen and (max-width: 380px) {
    .topRow {flex-direction: column;}
    .topRow {margin-bottom: 20px;}
    .submitSongBtn {margin-top: 20px;}
}
</style>
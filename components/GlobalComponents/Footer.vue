<template>
    <footer class="footerContainer">
        <div class="footerWrapper siteWrapper sitePadding">
            <div class="leftCol"> 
                <nuxt-link to="/">
                    <picture>
                        <source :srcSet="require('~/assets/images/siteLogo.png?webp')" type="image/webp"/>
                        <source :srcSet="require('~/assets/images/siteLogo.png')" type="image/png"/>
                        <img class="logoImg" loading="lazy" :src="require('~/assets/images/siteLogo.png')" alt="Melody Melon" data-not-lazy/>
                    </picture>
                </nuxt-link>
                <div class="socialLinksContainer">
                    <a class="linkCon spotifyBg" href="https://open.spotify.com/user/9b0arwvohrpgzewx9e4bjkr1y"><fa class="fas" :icon="['fab', 'spotify']" /></a>
                    <a class="linkCon instaBg" href="https://www.instagram.com/melodymelonmusic/"><fa class="fas" :icon="['fab', 'instagram']" /></a>
                    <a class="linkCon facebookBg" href="https://www.facebook.com/Melody-Melon-101765358205970"><fa class="fas" :icon="['fab', 'facebook-f']" /></a>
                </div>
                <div class="textarea">
                    <div class="legalLinksCon">
                        <nuxt-link to="/terms-conditions">TERMS</nuxt-link>
                        <nuxt-link to="/privacy">PRIVACY</nuxt-link>
                    </div>
                    <p>Melody Melon ©{{getYear}}. All Rights Reserved.</p>
                </div>
                <button class="submitSongBtn" v-on:click="$store.commit('toggleModal')">submit song</button>
            </div>
            <div class="rightCol">
                <div class="linkCol">
                    <p>Pages</p>
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                    <nuxt-link to="/insights">Insights</nuxt-link>
                </div>
                <div class="linkCol">
                    <p>Socials</p>
                    <a href="https://open.spotify.com/user/9b0arwvohrpgzewx9e4bjkr1y">Spotify</a>
                    <a href="https://www.instagram.com/melodymelonmusic/">Instagram</a>
                    <a href="https://twitter.com/MelodyMelon11">Twitter</a>
                    <a href="https://www.facebook.com/Melody-Melon-101765358205970">Facebook</a>
                </div>
                <div class="linkCol">
                    <p>Tools</p>
                    <a href="https://finder.melodymelon.com">Playlist Finder</a>
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
    background-color: #1e1e1e ;
    padding: 40px 0;
}
.pageSliderOpen .footerContainer {
    width: calc(100% - 10px);
    border-radius: 0 20px 0 0;
}
.footerWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

/* Left Col */
.leftCol {
    max-width: 400px;
    display: flex;
    flex-direction: column;
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
.textarea {
    color: #FFF;
    margin-bottom: 20px;
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
    margin: 20px 0 20px;
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

/* Right COl */
.rightCol {
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
}
.linkCol {
    width: 50%;
    min-width: 200px;
    margin-right: 20px;
}
.linkCol:last-child {
    margin-right: 0;
}
.linkCol p {
    font-size: 18px;
    color: #FFF;
    margin-bottom: 5px;
    font-weight: bold;
}
.linkCol a {
    display: block;
    width: 100%;
    color: #C0C0C0;
    text-decoration: none;
    padding: 5px 0;
    border-bottom: 1px solid #363636;
    transition: 0.3s;
}
.linkCol a:hover {
    color: #E32539;
}

@media only screen and (max-width: 1610px) {
    .rightCol {width: 100%; padding-left: 0; margin-top: 40px;}
    .linkCol {min-width: 150px;}
}
@media only screen and (max-width: 1070px) {
    .pageSliderOpen .footerContainer {width: 100%; border-radius: 0;}
}
@media only screen and (max-width: 600px) {
    .leftCol {max-width: 100%; width: 100%;}
    .submitSongBtn {width: 100%;}
    .rightCol {flex-wrap: wrap; margin-top: 40px; background-color: #151515; padding: 20px; border-radius: 20px;}
    .linkCol {width: 100%; margin-top: 20px; margin-right: 0;}
    .linkCol:first-child {margin-top: 0;}
}
</style>
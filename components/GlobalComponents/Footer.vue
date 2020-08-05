<template>
    <footer class="footerContainer">
        <div class="siteWrapper sitePadding">
            <div class="topRow"> 
                <img class="logoImg" src="../../assets/images/siteLogo.png" alt="Melody Melon" v-on:click="$router.push('/')">
                <button class="submitSongBtn">submit song</button>
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
                    <div class="linkCon"></div>
                    <div class="linkCon"></div>
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
    background-color: #FF2F45;
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
}
.linkCon:first-child {
    margin-left: 0;
}


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
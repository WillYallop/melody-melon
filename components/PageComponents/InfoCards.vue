<template>
    <div class="infoCardsContainer siteWrapper sitePadding">
        <div class="infoColOuter">
            <img class="cardImage" loading="lazy" src="../../assets/images/forArtistsImg.svg" alt="For Artists">
            <div class="textarea">
                <h3>For artists</h3>
                <p>We offer promotional campaigns to solo artists who want to be featured in our playlists.</p>
            </div>
            <nuxt-link  to="/contact" class="cardBtn">hit us up</nuxt-link>
        </div>
        <div class="infoColOuter">
            <img class="cardImage" loading="lazy" src="../../assets/images/chatWithUsImg.svg" alt="Chat With Us">
            <div class="textarea">
                <h3>Chat with us</h3>
                <p> Still have questions about Melody Melon? Get in touch with us and we’ll be more than happy to help.</p>
            </div>
            <nuxt-link to="/contact" class="cardBtn">contact</nuxt-link>
        </div>
        <div class="infoColOuter"> 
            <img class="cardImage" loading="lazy" src="../../assets/images/ourPlaylistsImg.svg" alt="Our Playlists">
            <div class="textarea">
                <h3>Our playlists</h3>
                <p>Check out our weekly updated Spotify Playlists. We have all the sounds to suit your musical needs.</p>
            </div>
            <nuxt-link to="/playlist/chill-rap" class="cardBtn">discover</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style scoped>
.infoCardsContainer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    z-index: 20;
    position: relative;
}
.infoColOuter {
    width: 32%;
    background-color: #1e1e1e ;
    border-radius: 20px;
    padding: 40px 20px 79px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
} 
.cardImage {
    max-height: 110px;
} 
.textarea {
    padding-top: 40px;
    text-align: center;
    padding: 40px 0 0;
    max-width: 300px;
}
.textarea h3 {
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 20px;
}
.textarea p {
    color: #EAEAEA;
}
.cardBtn {
    text-align: center;
    text-decoration: none;
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: calc(100% - 40px);
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    color: #FFF;
    font-size: 16px;
    background-color: #E32539;
}
.cardBtn:hover {
    transform: scale(1.05);
}
@media only screen and (max-width: 1350px) {
    .pageSliderOpen .infoCardsContainer {flex-wrap: wrap; justify-content: center;}
    .pageSliderOpen .infoColOuter {width: 80%; margin-top: 20px;}
    .pageSliderOpen .infoColOuter:first-child {margin-top: 0;}
}
@media only screen and (max-width: 1070px) {
    .infoCardsContainer {flex-wrap: wrap !important; justify-content: space-between !important;}
    .infoColOuter {width: 32% !important; margin-top: 0 !important;}
}
@media only screen and (max-width: 760px) {
    .infoCardsContainer {flex-wrap: wrap !important; justify-content: center !important;}
    .infoColOuter {width: 80% !important; margin-top: 20px !important;}
    .infoColOuter:first-child {margin-top: 0 !important;}
}
@media only screen and (max-width: 590px) {
    .infoColOuter {width: 100% !important;}
}
</style>
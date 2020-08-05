<template>
    <div class="infoCardsContainer siteWrapper sitePadding">
        <div class="infoColOuter">
            <img class="cardImage" src="../../assets/images/forArtistsImg.svg" alt="For Artists">
            <div class="textarea">
                <h4>For artists</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit  vehicula ultrices tincidunt.</p>
                <button class="cardBtn" v-on:click="$router.push('/for-artists')">read more</button>
            </div>
        </div>
        <div class="infoColOuter">
            <img class="cardImage" src="../../assets/images/chatWithUsImg.svg" alt="Chat With Us">
            <div class="textarea">
                <h4>Chat with us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit  vehicula ultrices tincidunt.</p>
                <button class="cardBtn" v-on:click="$router.push('/contact')">contact</button>
            </div>
        </div>
        <div class="infoColOuter"> 
            <img class="cardImage" src="../../assets/images/ourPlaylistsImg.svg" alt="Our Playlists">
            <div class="textarea">
                <h4>Our playlists</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit  vehicula ultrices tincidunt.</p>
                <button class="cardBtn" v-on:click="$router.push('/playlist/the-big-pre-playlist')">discover</button>
            </div>
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
    background-color: #1E1E1E;
    border-radius: 20px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
} 
.cardImage {
    width: 80%;
    max-height: 110px;
} 
.textarea {
    padding-top: 40px;
    text-align: center;
    padding: 40px 0 0;
    max-width: 260px;
}
.textarea h4 {
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 20px;
}
.textarea p {
    color: #EAEAEA;
}
.cardBtn {
    width: 100%;
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    color: #FFF;
    font-size: 16px;
    background-color: #FF2F45;
    margin-top: 40px;
}
.cardBtn:hover {
    transform: scale(1.1);
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
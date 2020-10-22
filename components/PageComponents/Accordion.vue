<template>
    <div class="accordionContainer siteWrapper sitePadding">
        <p style="display: none">{{accordionKey}}</p> <!-- temp fix -->
        <div class="rowContainer" :key="row.id" v-for="row in accordionData">
            <div class="accordionHeader" :class="{ 'headerOpen' : openAccordionArray[row.id - 1] }" v-on:click="openAccordionArray[row.id - 1] = !openAccordionArray[row.id - 1]; accordionKey++">
                <p>{{row.title}}</p>
                <button class="toggleAccordBtn" aria-label="Open accordion box"><fa v-if="!openAccordionArray[row.id - 1]" class="fas" :icon="['fas', 'chevron-down']" /><fa v-if="openAccordionArray[row.id - 1]" class="fas" :icon="['fas', 'chevron-up']" /></button>
            </div>
            <div class="accordionBody" :class="{ 'bodyOpen' : openAccordionArray[row.id - 1] }"  :key="accordionKey" v-show="openAccordionArray[row.id - 1]">
                <p>{{row.body}}</p>
                <div v-if="row.action === 'submit'" class="accordionActionCon">
                    <button class="submitSongBtn" v-on:click="$store.commit('toggleModal')">submit song</button>
                </div>
                <div v-if="row.action === 'socials'" class="accordionActionCon">
                    <a class="linkCon spotifyBg" href="https://open.spotify.com/user/9b0arwvohrpgzewx9e4bjkr1y"><fa class="fas" :icon="['fab', 'spotify']" /></a>
                    <a class="linkCon instaBg" href="https://www.instagram.com/melodymelonmusic/"><fa class="fas" :icon="['fab', 'instagram']" /></a>
                    <a class="linkCon facebookBg" href="https://www.facebook.com/Melody-Melon-101765358205970"><fa class="fas" :icon="['fab', 'facebook-f']" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openAccordionArray: [],
            accordionKey: 0
        }
    },
    props: {
        accordionData: {type: Array}

    },
    mounted() {
        for (var i = 0; i < this.accordionData.length; i++) {
        this.openAccordionArray.push(false)
        }
        this.openAccordionArray[0] = true
    },
    computed: {

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
.accordionContainer {
    width: 100%;
    z-index: 20;
    position: relative;
}
.rowContainer {
    width: 100%;
    margin-bottom: 10px;
}
.rowContainer:last-child {
    margin-bottom: 0;
}
.accordionHeader {
    width: 100%;
    border-radius: 20px;
    background-color: #1e1e1e ;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
}
.accordionHeader p {
    font-weight: bold;
    cursor: default;
    padding-right: 20px;
}
.headerOpen {
    border-radius: 20px 20px 0 0;
}
.toggleAccordBtn {
    height: 30px;
    width: 30px;
    min-width: 30px;
    background-color: #111111;
    border-radius: 50%;
    border: none;
    cursor: pointer;
}
.toggleAccordBtn .fas {
    color: #3DA389;
    font-size: 14px;
}
.accordionBody {
    width: 100%;
    border-radius: 0 0 20px 20px;
    padding: 20px;
    background-color: #333333;
    color: #FFF;
}
/* Action */
.accordionActionCon {
    margin-top: 20px;
    width: 100%;
    display: flex;
}
/* Submit song action */
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
/* Socials */
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
</style>
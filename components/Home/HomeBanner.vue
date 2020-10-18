<template>
    <div class="bannerCon siteWrapper sitePadding">
        <div class="textarea">
            <h1>Fruity Playlists To Fuel Your Day</h1>
            <h4>Discover your perfect playlist today with Melody Melon! We have playlists for every mood and genre, that are updated weekly to stay fresh!</h4>
            <button class="bannerBtnStyle" v-on:click="navigate('contact')">Contact Us</button>
        </div>
        <div class="imagearea">
            <img class="bannerImg" src="../../assets/images/bannerImage.svg" alt="Banner image" data-not-lazy>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        getImageUrl(name) {
            var images = require.context('../../assets/images/', false)
            return images('./' + name)
        },
        navigate(dist) {
            this.$router.push(dist)
        }
    }
}
</script>

<style scoped>
.bannerCon {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
}
.textarea {
    width: 60%;
    max-width: 500px;
    min-width: 500px;
    align-self: center;
} 
.textarea h1 {
    font-size: 50px;
    line-height: 55px;
    color: #FFF;
    margin: 0 0 20px;
}
.textarea h4 {
    color: #EAEAEA;
    font-weight: normal;
    font-size: 20px;
}
.imagearea {
    width: 40%;
    max-width: 400px;
    padding-left: 40px;
}
.bannerImg {
    width: 100%;
}
.bannerBtnStyle {
    padding: 10px 40px;
    border: 2px solid #FFF;
    background-color: transparent;
    border-radius: 20px;
    margin-top: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
    transition: 0.3s;
}
.bannerBtnStyle:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 1380px) {
    /* hide image if slider open */
    .pageSliderOpen .bannerImg {display: none;}
}
@media only screen and (max-width: 1070px) {
    /* hide image if slider open */
    .pageSliderOpen .bannerImg {display: flex;}
}
@media only screen and (max-width: 850px) {
    .textarea {min-width: auto;}  
    .textarea h1 {font-size: 40px; line-height: 40px;}
}
@media only screen and (max-width: 700px) {
    .bannerCon {flex-wrap: wrap;}
    .imagearea { width: 100%; padding-left: 0; margin-top: 40px;}
    .textarea {min-width: auto; width: 100%;}
    .textarea h1 {font-size: 8vw; line-height: 8.5vw;}
    .bannerImg {width: 80%;}
}
@media only screen and (max-width: 590px) {
    .bannerCon {padding-top: 60px;}
}

</style>

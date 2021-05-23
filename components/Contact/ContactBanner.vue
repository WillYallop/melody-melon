<template>
    <div class="bannerCon siteWrapper sitePadding">
        <div class="textarea">
            <h1>{{heading}}</h1>
            <p>{{subHeading}}</p>
            <button class="bannerBtnStyle" v-on:click="navigate(button[0])">{{button[1]}}</button>
        </div>
        <div class="imagearea">
            <!--<img class="bannerImg" loading="lazy" src="../../assets/images/contactBannerImage.svg" alt="Banner image" data-not-lazy>-->
            <picture>
                <source :srcSet="require('~/assets/images/contactBannerImage.png?webp')" type="image/webp"/>
                <source :srcSet="require('~/assets/images/contactBannerImage.png')" type="image/png"/>
                <img class="bannerImg" loading="lazy" :src="require('~/assets/images/contactBannerImage.png')" alt="Hit us up" data-not-lazy/>
            </picture>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        heading: {type: String},  
        subHeading: {type: String},
        button: {type: Array}
    },
    components: {

    },
    mounted() {
        
    },
    computed: {

    },
    methods: {
        getImageUrl(name) {
            var images = require.context('../../assets/images/', false)
            return images('./' + name)
        },
        navigate(dist) {
            if(dist == 'submit') {
                this.$store.commit('toggleModal')
            } else {
                this.$router.push(dist)
            }
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
.textarea p {
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

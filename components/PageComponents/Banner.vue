<template>
    <div class="bannerCon siteWrapper sitePadding">
        <div class="textarea">
            <h1>{{heading}}</h1>
            <p>{{subHeading}}</p>
            <nuxt-link :to="button[0]" class="bannerBtnStyle">{{button[1]}}</nuxt-link>
        </div>
        <div class="imagearea">
            <!--<img class="bannerImg" loading="lazy" src="../../assets/images/bannerImage.png" alt="Banner image" data-not-lazy>-->
            <picture>
                <source :srcSet="require('~/assets/images/bannerImage.png?webp')" type="image/webp"/>
                <source :srcSet="require('~/assets/images/bannerImage.png')" type="image/png"/>
                <img class="bannerImg" loading="lazy" :src="require('~/assets/images/bannerImage.png')" alt="Banner image" data-not-lazy/>
            </picture>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        heading: {type: String},  
        subHeading: {type: String}, 
        button: {type: Array}

    },
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
    width: 173px;
    text-decoration: none;
    display: block;
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

<template>
    <div class="sectionContainer">
        <div class="sectionWrapper siteWrapper">
            <h2 v-if="heading">{{heading}}</h2>
            <p v-if="subHeading">{{subHeading}}</p>
        </div>
        <div class="backgroundShapeRight"></div>
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
        subHeading: {type: String}
    },
}
</script>

<style scoped>
.sectionContainer {
    width: 100%;
    position: relative;
    z-index: 10;
}
/* padding right is equal to the width - of background shape */
.sectionWrapper {
    width: 100%;
    padding: 80px 500px 200px 40px;
    position: relative;
    z-index: 20;
}
.sectionWrapper h2 {
    color: #FFF;
    margin-bottom: 20px;
}
.sectionWrapper p {
    color: #FFF;
}
.backgroundShapeRight {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(100% - 400px);
    background-color: #FFF;
    opacity: 0.15;
    border-radius: 0 200px 200px 0;
    z-index: 10;
}


@media only screen and (max-width: 1700px) {
    .backgroundShapeRight {width: calc(100% - 100px);}
    .sectionWrapper {padding: 80px 200px 200px 40px;}
}
@media only screen and (max-width: 1070px) {
    .backgroundShapeRight {width: calc(100% - 100px);}
    .sectionWrapper {padding: 80px 200px 200px 20px;}
}
@media only screen and (max-width: 700px) {
    .sectionContainer {display: flex; justify-content: flex-start;}
    .backgroundShapeRight {width: calc(100% - 20px);}
    .sectionWrapper {width: 80%; padding: 80px 20px 200px 20px; margin: 0;}
}
</style>
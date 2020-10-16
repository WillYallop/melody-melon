<template>
    <div class="sectionContainer">
        <div class="sectionWrapper siteWrapper">
            <h2 v-if="heading">{{heading}}</h2>
            <p v-if="subHeading">{{subHeading}}</p>
        </div>
        <div class="backgroundShapeLeft"></div>
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
    padding: 80px 40px 200px 500px;
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
.backgroundShapeLeft {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(100% - 400px);
    background-color: #FFF;
    opacity: 0.3;
    border-radius: 200px 0 0 200px;
    z-index: 10;
}



@media only screen and (max-width: 1700px) {
    .backgroundShapeLeft {width: calc(100% - 100px);}
    .sectionWrapper {padding: 80px 40px 200px 200px;}
}
@media only screen and (min-width: 1070.1px) {
    .pageSliderOpen .backgroundShapeLeft {border-radius: 200px 20px 20px 200px;right: 10px;}
}
@media only screen and (max-width: 1070px) {
    .backgroundShapeLeft {width: calc(100% - 100px); border-radius: 200px 0 0 200px; right: 0;}
    .sectionWrapper {padding: 80px 20px 200px 200px;}
}
@media only screen and (max-width: 700px) {
    .sectionContainer {display: flex; justify-content: flex-end;}
    .backgroundShapeLeft {width: calc(100% - 20px);}
    .sectionWrapper {width: 80%; padding: 80px 20px 200px 20px; margin: 0;}
}
</style>
<template>
    <div class="accordionContainer siteWrapper sitePadding">
        <p style="display: none">{{accordionKey}}</p> <!-- temp fix -->
        <div class="rowContainer" :key="row.id" v-for="row in accordionData">
            <div class="accordionHeader" :class="{ 'headerOpen' : openAccordionArray[row.id - 1] }" v-on:click="openAccordionArray[row.id - 1] = !openAccordionArray[row.id - 1]; accordionKey++">
                <p>{{row.title}}</p>
                <button class="toggleAccordBtn" ><fa v-if="!openAccordionArray[row.id - 1]" class="fas" :icon="['fas', 'chevron-down']" /><fa v-if="openAccordionArray[row.id - 1]" class="fas" :icon="['fas', 'chevron-up']" /></button>
            </div>
            <div class="accordionBody" :class="{ 'bodyOpen' : openAccordionArray[row.id - 1] }"  :key="accordionKey" v-if="openAccordionArray[row.id - 1]">
                <p>{{row.body}}</p>
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
    background-color: #1E1E1E;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
}
.headerOpen {
    border-radius: 20px 20px 0 0;
}
.toggleAccordBtn {
    height: 30px;
    width: 30px;
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
</style>
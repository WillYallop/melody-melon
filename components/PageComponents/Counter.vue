<template>
    <div class="counterContainer siteWrapper sitePadding">
        <div class="col">
            <div class="counterCircle">

            </div>
            <div class="counterTextarea">
                <p class="numberP"><AnimatedNumber     
                    :value="100"
                    :formatValue="formatValue"
                    :duration="1000"/>
                    <span class="unitP">%</span>
                </p>
                <p class="titleP">organic growth</p>
            </div>
        </div>
        <div class="col">
            <div class="counterCircle">
                
            </div>
            <div class="counterTextarea">
                <p class="numberP"><AnimatedNumber     
                    :value="100"
                    :formatValue="formatValue"
                    :duration="1000"/>
                    <span class="unitP">%</span>
                </p>
                <p class="titleP">organic growth</p>
            </div>
        </div>
        <div class="col botRow">
            <div class="counterCircle">

            </div>
            <div class="counterTextarea">
                <p class="numberP"><AnimatedNumber     
                    :value="100"
                    :formatValue="formatValue"
                    :duration="1000"/>
                    <span class="unitP">%</span>
                </p>
                <p class="titleP">organic growth</p>
            </div>
        </div>
        <div class="col botRow">
            <div class="counterCircle">

            </div>
            <div class="counterTextarea">
                <p class="numberP"><AnimatedNumber     
                    :value="100"
                    :formatValue="formatValue"
                    :duration="1000"/>
                    <span class="unitP">%</span>
                </p>
                <p class="titleP">organic growth</p>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
    data() {
        return {

        }
    },
    components: {
        AnimatedNumber
    },
    mounted() {


    },
    methods: {
        formatValue(value) {
            return Math.round(value)
        }
    }
}
</script>

<style scoped>
.counterContainer {
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 20;
}
.counterContainer .col {
    width: calc(25% - 15px);
    min-height: 120px;
    background-color: #1E1E1E;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: #FFF;
    padding: 30px;
}

.counterCircle {
    width: 60%;
    border-radius: 50%;
    background-color: #3DA389;
}
.counterCircle::after {
    content: '';
    display: block;
    padding-bottom: 100%;
}

.counterContainer .col:nth-child(even) .counterCircle {background-color: #FF2F45}

.counterTextarea {
    margin-top: 20px;
    text-align: center;

}
.numberP {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 5px;
} 
.unitP {
    font-size: 20px;
    margin-left: -5px;
}
.titleP {
    font-size: 18px;
}

@media only screen and (max-width: 1250px) {
    .counterContainer {flex-wrap: wrap;}
    .counterContainer .col {width: calc(50% - 10px);}
    .botRow {margin-top: 20px;}
}
@media only screen and (max-width: 1070px) {
    .counterContainer {flex-wrap: wrap;}
    .counterContainer .col {width: calc(25% - 15px);}
    .botRow {margin-top: 0;}
}
@media only screen and (max-width: 700px) {
    .counterContainer {flex-wrap: wrap;}
    .counterContainer .col {width: calc(50% - 10px);}
    .botRow {margin-top: 20px;}
}
</style>
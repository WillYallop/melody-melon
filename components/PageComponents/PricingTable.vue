<template>
    <div class="pricingTableContainer siteWrapper sitePadding">
        <div class="col">
            <div class="colInner">
                <div class="tableHeader">
                    <p>Standard</p>
                </div>
                <div class="tableContainer firstTable">
                    <div class="tableInner">
                        <div class="row">
                            <p>feature 1</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 2</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 3</p>
                            <div class="iconCon"></div>
                        </div>
                        <div class="row">
                            <p>feature 4</p>
                            <div class="iconCon"></div>
                        </div>
                        <div class="row">
                            <p>feature 5</p>
                            <div class="iconCon"></div>
                        </div>
                    </div>
                </div>
                <div class="tableBtnContainer">
                    <button class="tableBtn" v-on:click="$router.push('/contact')">apply</button>
                </div>
            </div> 
        </div>
        <div class="col">
            <div class="colInner">
                <div class="tableHeader">
                    <p>Premium</p>
                </div>
                <div class="tableContainer secondTable">
                    <div class="tableInner">
                        <div class="row">
                            <p>feature 1</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 2</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 3</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 4</p>
                            <div class="iconCon"></div>
                        </div>
                        <div class="row">
                            <p>feature 5</p>
                            <div class="iconCon"></div>
                        </div>   
                    </div>
                </div>
                <div class="tableBtnContainer">
                    <button class="tableBtn" v-on:click="$router.push('/contact')">apply</button>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="colInner">
                <div class="tableHeader">
                    <p>Professional</p>
                </div>
                <div class="tableContainer thirdTable">
                    <div class="tableInner">
                        <div class="row">
                            <p>feature 1</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 2</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 3</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 4</p>
                            <div class="iconCon required"></div>
                        </div>
                        <div class="row">
                            <p>feature 5</p>
                            <div class="iconCon required"></div>
                        </div>      
                    </div>
                </div>
                <div class="tableBtnContainer">
                    <button class="tableBtn" v-on:click="$router.push('/contact')">apply</button>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.pricingTableContainer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    z-index: 20;
}
.pricingTableContainer .col {
    width: calc(33.33% - 13.33px);
    display: flex;
    align-items: center;
}
.colInner {
    width: 100%;
    background-color: #1E1E1E;
    border-radius: 20px;
    overflow: hidden;
}


.tableHeader {
    width: 100%;
    background-color: #161616;
    padding: 20px;
}
.tableHeader p {
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}


.tableContainer {
    width: 100%;
    padding: 0 20px;
}
.firstTable {margin: 20px 0;}
.secondTable {margin: 30px 0;}
.thirdTable {margin: 40px 0;}

.tableInner {
    width: 100%;
    border: 1px solid #313131;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
}
.tableInner .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid #313131;
} 
.tableInner .row p {
    color: #FFF;
}
.iconCon {
    height: 15px;
    width: 15px;
    border-radius: 4px;
    background-color: #FF2F45;
} 
.required {
    background-color: #3DA389;
} 

.tableBtnContainer {
    padding: 0 20px 20px;
}
.tableBtn {
    width: 100%;
    background-color: #FF2F45;
    border-radius: 20px;
    border: none;
    padding: 10px 40px;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}
.tableBtn:hover {
    transform: scale(1.05);
}

@media only screen and (max-width: 1250px) {
    .pricingTableContainer {flex-wrap: wrap;}
    .pricingTableContainer .col {width: 100%; margin-top: 20px;}
    .pricingTableContainer .col:first-child {margin-top: 0;}
}
@media only screen and (max-width: 1070px) {
    .pricingTableContainer .col {width: calc(33.33% - 13.33px); margin-top: 0;}
}
@media only screen and (max-width: 700px) {
    .pricingTableContainer .col {width: 100%; margin-top: 20px;}
    .pricingTableContainer .col:first-child {margin-top: 0;}
}
</style>
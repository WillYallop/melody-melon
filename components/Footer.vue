<template>
    <footer class="footerContainer">
        <div class="footerOuter">
            <div class="footerWrapper">
                <div class="footerTopHalf">
                    <img class="siteLogo" src="../assets/images/siteLogo2.png" alt="">
                    <button class="footerSumitBtn">submit song</button>
                </div>
                <div class="footerBottomHalf"> 
                    <div class="legalLinks">
                        <p class="legalLinksP">TERMS</p>
                        <p class="legalLinksP">PRIVACY</p>
                    </div>
                    <p class="copyrightP">Melody Melon ©2020. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footerContainer { 
    position: relative;
    margin-top: 80px;
    width: 100%;
    padding-right: 10px;
}
.footerOuter {
    width: 100%;
    background-color: #1E1E1E;
    display: flex;
    justify-content: center;
    border-radius: 0 20px 0 0;
}
.footerWrapper {
    padding: 40px 40px;
    width: 100%;
    max-width: 1400px;
    box-sizing: border-box;
}

.footerTopHalf {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.siteLogo {
    width: 140px;
}
.footerSumitBtn {
    border-radius: 20px;
    padding: 7px 40px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
    background-color: #FF2F45;
    cursor: pointer;
}

.footerBottomHalf {
    display: flex;
    flex-direction: column;
}
.legalLinks {
    display: flex;
    margin-bottom: 10px;
} 
.legalLinksP {
    margin: 0;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
    cursor: pointer;
} 
.legalLinksP:hover {
    text-decoration: underline;
}
.copyrightP {
    margin: 0;
    color: #FFF;
    font-size: 16px;
}

@media only screen and (max-width: 1024px) {
    .footerContainer {padding-right: 0;} 
    .footerOuter {border-radius: 0;}
}
@media screen and (max-width: 767px) {
    .footerWrapper {padding: 40px 20px;}
}
</style>
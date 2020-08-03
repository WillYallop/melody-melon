<template>
    <div class="playlistComponentContainer">
        <div class="playlistComponentWrapper">
            
            <div class="playlistContainer">
                <div class="col1">
                    <h4>{{playlistData.playlistName}}</h4>
                    <p>{{playlistData.playlistDescription}}</p>
                    <div class="imageContainer">
                        <img class="playlistImage" :src="getImageUrl(playlistData.icon)" alt="Playlist Artwork">
                    </div>
                    <button class="followPlaylistBtn">FOLLOW</button>
                </div>
                <div class="col2">
                    <iframe :src="'https://open.spotify.com/embed/playlist/' + playlistData.playlistSpotifyUrl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        playlistData: {type: Object}, 
    },
    methods: {
        //Gets the dynamic image url for each program
        getImageUrl(name) {
            var images = require.context('../../../assets/images/playlistIcons/', false)
            return images('./' + name)
        },
    }
}
</script>

<style scoped>
.playlistComponentContainer {
    width: 100%;
    margin: 40px 0 0;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 500;
}
.playlistComponentWrapper {
    width: 100%;
    max-width: 1400px;
    padding: 0 40px;
    box-sizing: border-box;
    z-index: 20;
    position: relative;
    display: flex;
}

/* Main Content */
.playlistContainer {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
}
.col1 {
    width: 300px;
    height: 100%;
    background-color: #FFF;
    padding: 30px;
    position: relative;
}
.col1 h4 {
    font-size: 24px;
    text-transform: capitalize;
    margin-bottom: 10px;
}
.imageContainer {
    width: 300px;
    height: 300px;
    position: relative;
    margin-top: 20px;
}
.playlistImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 20px;
}
.followPlaylistBtn {
    background-color: #1ED761;
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
}


.col2 {
    width: calc(100% - 300px);
    height: 100%;
    background-color: #F5F5F5;
    padding: 30px 30px 30px 60px;
}
.col2 iframe {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}


@media only screen and (max-width: 1250px) {
    .playlistContainer {flex-wrap: wrap;}

    .col1 {width: 100%; height: auto;}
    .imageContainer {width: 100%; height: auto;}
    .playlistImage {width: 100%;height: auto;position: relative;border-radius: 10px;overflow: hidden;object-fit: cover;position: relative;z-index: 10;min-width: 100%;background-color: rgba(255, 255, 255, 0.2);}
    .playlistBoxInner::after {content: "";display: block;padding-bottom: 100%;}

    .col2 {width: 100%; height: 500px; padding: 30px;}
}

@media screen and (max-width: 767px) {
    .playlistComponentWrapper {padding: 0 20px;}
    .col1 {padding: 40px 20px;}
    .col2 {padding: 40px 20px;}
}
</style>
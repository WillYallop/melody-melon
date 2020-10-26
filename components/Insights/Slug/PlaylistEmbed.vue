<template>
    <div class="playlistEmbedCon">
        <div class="imgCol">
           <picture>
                <source :srcSet="require('~/assets/images/playlistIcons/'+playlistData.icon+'?webp')" type="image/webp" />
                <source :srcSet="require('~/assets/images/playlistIcons/'+playlistData.icon)" type="image/jpg" />
                <img class="playlistImage" loading="lazy" :src="require('~/assets/images/playlistIcons/'+playlistData.icon)" alt="Playlist Artwork"/>
            </picture> 
            <a class="spotifyBtn">Listen Now</a>
        </div>
        <div class="iframCol">
            <iframe :src="'https://open.spotify.com/embed/playlist/' + playlistData.playlistSpotifyUrl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    </div>
</template>

<script>
//json
import playlistsJson from '@/components/Playlists.json'

export default {
    data() {
        return {

        }
    },
    props: {
        playlist: String
    },
    computed: {   
        playlistData() {
            //Check against json array
            const checkUrl = playlistsJson.find( ({ playlistUrl }) => playlistUrl === this.playlist )
            return checkUrl
        }

    }
}
</script>

<style scoped>
.playlistEmbedCon {
    width: 100%;
    padding: 0 20px 20px;
    background-color: #4C4C4C;
    border-radius: 20px;
    display: flex;
    margin: 20px 0;
}
.imgCol {
    width: 170px;
    min-width: 170px;
    margin-top: -20px;
}
.playlistImage {
    width: 100%;
    border-radius: 10px;
}
.spotifyBtn {
    display: block;
    width: 100%;
    padding: 10px 0;
    border-radius: 20px;
    background-color: #1DB954;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
}
.iframCol {
    margin-top: -20px;
    width: 100%;
    padding-left: 20px;
}
.iframCol iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
</style>
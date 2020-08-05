<template>
  <div class="sliderContainer"  :class="{ 'active' : sliderOpen }">
    <div class="playlistSliderInner">
        
      <div class="titleArea">
        <h4 class="playlistTitle">Our Playlists</h4>
      </div>

      <no-ssr>
        <!-- Playlist Search -->
        <div class="playlistSearchContainer">
          <div v-on:click="playlistSerachInputContainer = !playlistSerachInputContainer" class="playlistSearchInput" ref="playlistSearchInput">
            <p class="inputText"><span v-if="genereQuery == 'all'">Filter by genre or mood</span><span class="capitaliseText" v-if="genereQuery != 'all'">{{genereQuery}}</span></p><fa class="fas" :icon="['fas', 'search']" />

            <div v-if="playlistSerachInputContainer"  class="playlistSearchInputsContainer" v-closable="{exclude: ['playlistSearchInput'], handler: 'closePlaylistSearchInputContainer'}">
              <div class="row">
                <div class="col" v-on:click="genereQuery = 'all'"><p>All</p></div>
                  <div class="col" v-on:click="genereQuery = 'top hits'"><p>Top Hits</p></div>
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'pop'"><p>Pop</p></div>
                  <div class="col" v-on:click="genereQuery = 'urban'"><p>Urban</p></div>
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'party'"><p>Party</p></div>
                  <div class="col" v-on:click="genereQuery = 'feel good'"><p>Feel Good</p></div>
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'mood'"><p>Mood</p></div>
                  <div class="col" v-on:click="genereQuery = 'indie'"><p>Indie</p></div>
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'nostalgia'"><p>Nostalgia</p></div>
                  <div class="col" v-on:click="genereQuery = 'hiphop'"><p>Hip Hop</p></div>
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'hot'"><p>Hot</p></div>
                  <div class="col" v-on:click="genereQuery = 'jazz'"><p>Jazz</p></div> 
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'workout'"><p>Workout</p></div>
                  <div class="col" v-on:click="genereQuery = 'soundtrack'"><p>Soundtrack</p></div>
                </div>
                <div class="row">
                  <div class="col" v-on:click="genereQuery = 'chill'"><p>Chill</p></div> 
                </div>
              </div>
          </div>
        </div>
      </no-ssr>

      <!-- Playlist Results -->
      <div class="playlistResultsContainer">
        <!-- Results -->
        <div class="playlistBoxContainer" :key="results.id" v-for="results in playlistSearchQuery">
          <img class="playlistBoxInner" :src="getImageUrl(results.icon)" alt="Playlist Artwork">
          <div class="playlistBoxInnerOverlay" v-on:click="navigateToPlaylist(results.playlistUrl) ; playlistAndPageSlideToggle()"></div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import playlistsJson from '@/components/Playlists.json'

export default {
    data() {
        return {
            playlistObject: playlistsJson,
            genereQuery: "all",
            playlistSerachInputContainer: false,
        }
    },
    components: {

    },
    mounted() {


    },
    computed: {
        sliderOpen() {
            return this.$store.state.playlistSlider.status
        },
        playlistSearchQuery() {
            if(this.genereQuery != 'all') {
                var target = this.playlistObject.filter( ({ categories }) => categories.includes(this.genereQuery))
                return target
            } else {
                return this.playlistObject
            }
        }

    },
    methods: {
        closePlaylistSearchInputContainer() {
            this.playlistSerachInputContainer = false
        },
        //Gets the dynamic image url for each program
        getImageUrl(name) {
            var images = require.context('../../assets/images/playlistIcons/', false)
            return images('./' + name)
        },
        navigateToPlaylist(id) {
            this.$router.push('/playlist/' + id)
        }
    }
}
</script>

<style scoped>
.sliderContainer {
    position: fixed;
    top: 10px;
    right: -500px;
    bottom: 10px;
    width: 490px;
    background-color: #1E1E1E;
    border-radius: 20px;
    transition: right 0.3s;
    z-index: 1000;
    overflow: hidden;
}
.sliderContainer.active {
    right: 10px;
}

.playlistSliderInner {
  height: 100%;
  width: 100%;
  background-color: #1E1E1E;
  border-radius: 20px 0 0 20px;
  padding: 0 0 25px;
  overflow-y: scroll;
}
/* width */
.playlistSliderInner::-webkit-scrollbar {
  width: 0px;
}
/* Track */
.playlistSliderInner::-webkit-scrollbar-track {
  background: transparent; 
}
/* Handle */
.playlistSliderInner::-webkit-scrollbar-thumb {
  background: transparent; 

}
.playlistSliderInner:hover::-webkit-scrollbar-thumb {
  background: transparent;  
}
/* Handle on hover */
.playlistSliderInner::-webkit-scrollbar-thumb:hover {
  background: transparent; 
}


/* Playlist Search */
.playlistSearchContainer {
  padding: 20px 30px;
  z-index: 300;
  position: sticky;
  top: -1px;
  background-color: #111111;
}
.titleArea {
  padding: 30px 30px 0;
  background-color: #111111;
}
.playlistTitle {
  color: #FFF;
  font-size: 20px;
}
.playlistSearchInput {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-color: #1E1E1E;
  border-radius: 5px;
  border: none;
  margin: 0;
  color: #FFF;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}
.playlistSearchInput .fas {
  color: #FFF;
  font-size: 16px;
}
.inputText {
  padding: 0;
  margin: 0;
  color: #FFF;
  font-size: 14px;
}
.capitaliseText {
  text-transform: capitalize;
}
.playlistSearchInputsContainer {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #292929;
  background-color: #323232;
  border-bottom: none;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  z-index: 100;
  transition: 0.1s;
}
.row {
  width: 100%;
  display: flex;
  border-bottom: 2px solid #292929;
}
.col {
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #323232;
  border-right: 2px solid #292929;
  transition: 0.3s;
  cursor: pointer;
}
.col:last-child {
  border-right: none;
}
.col:hover {
  background-color: #1B1B1B;
}
.col p {
  color: #FFF;
  margin: 0;
  padding: 10px 20px;
  font-size: 14px;
}

/* Search Results */
.playlistResultsContainer {
  width: 100%;
  padding: 15px 25px 0;
  
  display: flex;
  flex-wrap: wrap;
}
.playlistBoxContainer {
  width: 50%;
  padding: 5px;
  
  position: relative;
  overflow: hidden;
}
.playlistBoxInner {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  z-index: 10;
  min-width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
}
.playlistBoxContainer {
  transition: 0.3s;
}
.playlistBoxContainer .isLoaded {
  background-color: transparent;
}
.playlistBoxInner::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.playlistBoxContainer:hover .playlistBoxInnerOverlay{
  opacity: 1;
}
.playlistBoxContainer:hover {
  transform: scale(1.05);
  z-index: 100;
}

.playlistBoxInnerOverlay {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 9px;
  left: 5px;
  opacity: 0;
  z-index: 20;
  border-radius: 10px;
  cursor: pointer;
}


@media only screen and (max-width: 1300px) {
  .playlistBoxContainer {width: 50%;}
}
@media only screen and (max-width: 1070px) {
    /* handle pos (slider open css is inverted for mobile) */
    .sliderContainer { width: 100%; right: 0 !important; top: 0; bottom: 0; border-radius: 0;}
    .sliderContainer.active {right: -100% !important;}
    .playlistSliderInner {border-radius: 0;}
    /* Padding */
    .titleArea {padding: 30px 20px 0;}
    .playlistSearchContainer {padding: 20px;}
    .playlistResultsContainer {padding: 15px 15px 0;}
    .playlistBoxContainer {width: 25%;}
}

@media only screen and (max-width: 800px) {
  .playlistBoxContainer {width: 33.33%;}
}
@media only screen and (max-width: 575px) {
  .playlistBoxContainer {width: 50%;}
}

</style>

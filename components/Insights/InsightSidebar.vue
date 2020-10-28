<template>
    <div class="sidebarCon">
        <div class="filterCon">
            <label for="search">Search</label>
            <input id="search" class="inputStyle" type="text" v-model="search">
            <label for="category">Category</label>
            <select id="category" class="inputStyle" v-model="category">
                <option value="all">All</option>
                <option value="playlist">Playlist</option>
            </select>
            <button class="searchBtn" v-on:click="filterGo">Go</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            category: 'all'
        }
    },
    methods: {
        filterGo() {
            this.$emit('insights-filter', this.search, this.category)
        }
    }
}
</script>

<style scoped>
.sidebarCon {
    position: sticky;
    top: 70px;
}
.filterCon {
    border: 1px solid #EAEAEA;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 20px;
}
.filterCon label {
    padding: 0 5px;
    font-size: 14px;
    color: #939393;
}
.inputStyle {
    margin-top: 5px;
    height: 40px;
    width: 100%;
    border: 1px solid #E7E7E7;
    background-color: #F8F8F8;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #383838;
}
.inputStyle::placeholder {
    color: #383838;
}

/* Select */
select {
  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
   background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}

select:focus {
  background-image:
    linear-gradient(45deg, #FF2F45 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, #FF2F45 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  outline: 0;
}


select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}

.searchBtn {
  width: 100%;
  border-radius: 20px;
  padding: 10px 40px;
  color: #FFF;
  background-color: #FF2F45;
  border: none;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.searchBtn:hover {
  transform: scale(1.1);
}

</style>
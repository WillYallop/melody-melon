const state = () => ({
    status: true,

})
  
const mutations = {
    // toggle slider open and close
    toggleSlider(state) {
        state.status = !state.status;
    },
    sliderSpecific(state, bool) {
        state.status = bool
    }


}

export default {
    state, 
    mutations
}
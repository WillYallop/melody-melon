const state = () => ({
    status: true,
    toggleDeskBtn: false
})
  
const mutations = {
    // toggle slider open and close
    toggleSlider(state) {
        state.status = !state.status;
    },
    sliderSpecific(state, bool) {
        state.status = bool
    },
    showToggleDesktopBtn(state, bool) {
        state.toggleDeskBtn = bool
    }


}

export default {
    state, 
    mutations
}
const state = () => ({
    status: true,
})
  
const mutations = {
    // toggle slider open and close
    toggleSlider(state) {
        state.status = !state.status;
    }

}

export default {
    state, 
    mutations
}
const state = () => ({
    status: false,
})
  
const mutations = {
    toggleModal(state) {
        state.status = !state.status;
    }

}

export default {
    state, 
    mutations
}
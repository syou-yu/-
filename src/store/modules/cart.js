import axios from 'axios'

const state = {
    cartList: [],
}

const getters = {
    getCartList: state => state.cartList
}

const actions = {
    fetchCartList({ commit, state }) {
        axios.get('http://localhost:8080/api/cartList')
            .then((res) => {
                commit('UpdateCartList', res.data)
            }, (err) => {

            })
    }
}

const mutations = {
    UpdateCartList(state, payload) {
        state.cartList = payload
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}
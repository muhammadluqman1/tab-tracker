// eslint-disable-next-line
// eslint-disable
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
// eslint-disable-next-line
/* eslint-disable */
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken (state, token){
            state.token = token
            if(token){
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user){
            state.user = user
        },

    },
    actions: {
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        }
    }
})

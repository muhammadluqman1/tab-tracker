// eslint-disable-next-line
/* eslint-disable */
import Api from '@/services/Api'

export default {
    index () {
        return Api().get('songs')
    },
    show (songId) {
        return Api().get(`songs/${songId}`)
    },
    post (song) {
        return Api().post('songs', song)
    }
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })
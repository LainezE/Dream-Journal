/* eslint-disable */
import api from '@/services/api'

export default {
    getDreams (userID) {
        return api().get(`dreams/${userID}`)
    },
    createDream(dream){
        return api().post('dreams', dream)
    }
}

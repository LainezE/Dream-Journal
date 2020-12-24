/* eslint-disable */
import api from '@/services/api'

export default {
    getDreams () {
        return api().get('dreams')
    },
    createDream(dream){
        return api().post('dreams', dream)
    }
}

import myButton from './my-button'
import myDialog from './my-dialog'

export default {
    install(Vue) {
        Vue.component('my-button',myButton)
        Vue.component('my-dialog',myDialog)

    }
}

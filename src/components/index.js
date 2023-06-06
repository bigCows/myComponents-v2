import myButton from './my-button'
import myDialog from './my-dialog'
import myTable from './my-table'

export default {
    install(Vue) {
        Vue.component('my-button',myButton)
        Vue.component('my-dialog',myDialog)
        Vue.component('my-table',myTable)

    }
}

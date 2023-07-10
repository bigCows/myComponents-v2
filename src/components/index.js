// 引入所有组件
const isComponents = require.context('./', true, /\.vue$/)


// 获取组件的名字
const componentsKeys = isComponents.keys().map(item => item.replace(/^\.\//, '').replace(/\.vue$/, ''))
// 获取组件实例
const componentsName = isComponents.keys().map(isComponents)

export default {
    install(Vue) {
        componentsKeys.forEach((item, index) => {
            // console.log(item,componentsName[index]);
            Vue.component(item, componentsName[index].default)
        })
    }
}

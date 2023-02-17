<template>
    <div class="layout-container">
        <!-- <button @click="goPage('layout')">goLayout</button> -->
        <my-dialog 
        :visible.sync="dialogShow" 
        :title="'提示语'"
        :width="500"
        >
          <template v-slot:title>
            插槽内容
          </template>
            
        </my-dialog>
        <el-button @click="showDialog">弹出框</el-button>
    </div>
</template>

<script>
import router from '@/router'
import MyButton from '@/components/my-button.vue'
export default {
    name: '',    
    props: {

    },
    data() {
        return {
            dialogShow: false
        }
    },
    methods: {
        goPage(pageName) {
            router.push(pageName)
        },
        showDialog() {
            this.dialogShow = true
        },
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    components: {
        MyButton

    }
}
</script>

<style scoped lang="scss">
    .layout-container {
        width: 100%;
        height: 100%;
    }
</style>

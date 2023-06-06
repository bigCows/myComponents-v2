<template>
    <div>
        layout
        <el-button @click="$router.go(-1)">{{this.back}}</el-button>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: '',    
    props: {

    },
    data() {
        return {
            back: '<'
        };
    },
    methods: {
        goBack() {
            router.go(-1)
        }
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

    }
}
</script>

<style scoped lang="scss">

</style>

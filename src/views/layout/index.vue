<template>
    <div>
        <button @click="goBack">{{this.back}}</button>
        <div>layout</div>        
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

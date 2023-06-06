<template>
    <div>
        按钮
        <button @click="goBack">{{back}}</button>
    </div>
</template>

<script>
import router from '@/router';
export default {
    name: 'myButton',    
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

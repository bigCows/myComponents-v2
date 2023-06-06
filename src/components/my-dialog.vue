<template>
    <div class="dialog-container public-fixed"  v-if="visible">
        <!-- <div v-if="visible"> -->
            <div class="mask"></div>
            <!-- <div v-if="visible"> -->
                <main class="dc-main" :style="{width: `${width}px`}">
                    <div class="dm-header">
                        <span class="dm-title"> 
                            <slot name="title">{{title}}123</slot>
                        </span>
                        <span>
                            <i 
                              class="el-icon-close public-cursor" 
                              @click.stop="cancel"
                            >
                            </i>
                        </span>
                    </div>
                    <div class="dm-content">
                        <slot>这是弹框内容</slot>
                    </div>
                    <div class="dm-footer">
                        <span>
                            <slot name="footerBtn">
                                <el-button class="df-cancel-btn public-cursor" @click="cancel">取消</el-button>
                                <el-button class="public-cursor" @click="btnOk" type="primary">确定</el-button>
                            </slot>
                        </span>
                    </div>
                </main>
            <input type="file" name="" id="" @change="changeFile">
            </div>    
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
export default {
    name: 'myDialog',    
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '弹框'
        },
        width:{
            type: [String,Number],
            default: '800'
        }
    },
    data() {
        return {

        };
    },
    methods: {
        iconClose() {
            this.$emit('update:visible',false)
        },
        btnOk() {
            // 收集数据，反流向父组件
            // this.$emit('confirm', xxx)
            this.$emit('update:visible', false)
        },
        cancel() {
            this.$emit('update:visible', false)
        },
        changeFile(e) {
            console.log('beforee after',e.target.files[0])
            const FR = new FileReader()
            FR.readAsDataURL(e.target.files[0])
            FR.onload = (e) => {
                console.log(e.target.result);
            }
            
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
    .dialog-container {
        position: fixed;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0.3);
        overflow: hidden;
        
        .public-cursor {
            cursor: pointer;
        }
        .dc-main {
            width: 60%;
            // height: px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 15vh auto;
            padding: 15px;
            border-radius: 8px;
            background-color: #fff;
                .dm-header {
                    display: flex;
                    height: 15%;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 18px;
                .el-icon-close:hover {
                    color: #409eff;
                }
                }
                .dm-content {
                    text-align: left;
                    padding: 15px 0;
                    text-indent: 2em;
                    line-height: 30px;
                }
                .dm-footer {
                    .df-cancel-btn {
                        margin-right: 20px;
                    }
                }
        }
    }
</style>

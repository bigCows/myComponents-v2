<template>
    <div class="dialog-container" v-if="visible">
        <main class="dc-main" :style="{width: `${width}px`}">
            <div class="dm-header">
                <span class="dm-title">
                    <slot name="title">{{title}}</slot>
                </span>
                <span>
                    <i class="el-icon-close dm-close-icon" @click.stop="close"></i>
                </span>
            </div>
            <div class="dm-content">
                <slot>
                    这是弹框内容
                </slot>
            </div>
            <div class="dm-footer">
                <span>
                    <slot name="footerBtn">
                    <button class="df-cancel-btn">取消</button>
                    <button>确定</button>
                    </slot>
                </span>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: '',    
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
        close() {
            this.$emit('update:visible',false)
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
        box-sizing: border-box;
        height: 100%;
        .dc-main {
            width: 40%;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 100px  auto;
            background-color: #ccc;
                .dm-header {
                    display: flex;
                    height: 15%;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0px 17px;
                    font-size: 18px;
                    .dm-close-icon {
                    cursor: pointer;
                }
                .dm-close-icon:hover {
                    color: #409eff;
                }
                }
                .dm-content {}
                .dm-footer {
                    margin-bottom: 15px;
                    .df-cancel-btn {
                        margin-right: 20px;
                    }
                }
        }
    }
</style>

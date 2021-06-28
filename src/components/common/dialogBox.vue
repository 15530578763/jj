<style scoped>
.dialog-box{
    border-radius: 50px;
}
</style>

<template>
    <div v-if="showFlag">
        <el-dialog :title="title" :visible.sync="showFlag" :width="width" :top="top" :before-close="dialogCloseErreo" class="dialog-box">
            <div v-if="category === '1'">
                <div>11111</div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogClose()">取 消</el-button>
                    <el-button type="primary" @click="dialogOk()">确 定</el-button>
                </span>
            </div>
            <div v-if="category === '2'">
                <slot name="main">

                </slot>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'dialogBox',
    props: {
        showFlag: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '提示',
        },
        width: {
            type: String,
            default: '30%',
        },
        top: {
            type: String,
            default: '30vh',
        },
        category: {
            type: String,
            default: '1',
        },
    },
    methods: {
        dialogCloseErreo() {
            this.$emit('dialogCloseErreo', false);
        },
        dialogClose() {
            if( this.category === '1' ) {
                this.$emit('dialogClose', false);
            }
        },
        dialogOk() {
            if( this.category === '1' ) {
                this.$emit('dialogOk', false);
            }
        },
    },
}
</script>
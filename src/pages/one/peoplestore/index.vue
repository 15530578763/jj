<template>
<div class="peoplestore">
    <contentframe>

        <div slot="top">
            人才库
        </div>
        <div slot="middle">
            <div>九宫格列表demo</div>
            <div>
                <div>
                    <el-button type="primary" @click="clickDialog()">点击出现蒙层组件</el-button>
                </div>
                <div>
                    <tree></tree>
                </div>
            </div>
        </div>

    </contentframe>

    <dialogBox :showFlag="dialogShow" :title="'警告'" :width="'30%'" :category="'1'" :top="'30vh'"
    @dialogCloseErreo="dialogCloseErreo" @dialogClose="dialogClose" @dialogOk="dialogOk" ></dialogBox>

</div>
</template>

<script>
import contentframe from '@/components/common/contentframe'
import dialogBox from '@/components/common/dialogBox'
import tree from '@/components/common/tree'
export default {
    name: 'peoplestore',
    components: {
        contentframe,
        dialogBox,
        tree,
    },
    data() {
        return {
            dialogShow: false,
        }
    },
    methods: {
        clickDialog() {
            this.dialogShow = true;
        },
        dialogCloseErreo(flag) {
            this.dialogShow = flag;
        },
        dialogClose(flag) {
            this.dialogShow = flag;
        },
        dialogOk(flag) {
            this.dialogShow = flag;
        },
    }
}
</script>

<style scoped>
.peoplestore{
    height: 100%;
}
</style>
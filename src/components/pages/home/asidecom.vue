<template>
    <el-aside class="asidecom">
        <el-row class="tac">
            <el-col :span="24" class="tac-menu">
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

                    <el-menu-item index="1" @click="clickGoHome()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>人才评价</span>
                        </template>
                        <el-menu-item index="2-1">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">1</span>
                            </template>
                        </el-menu-item>
                        <el-submenu index="2-2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">2</span>
                            </template>
                            <el-menu-item index="2-2-1">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">21</span>
                                </template>
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>人才盘点</span>
                        </template>
                        <el-menu-item index="3-1" @click="menuPeopleCheckProject()">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">盘点项目</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">盘点审批</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="3-3">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">盘点分析</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="3-4">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">九宫格设置</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item index="4" @click="clickGopeoplestore()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">人才库组件一种</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click="clickGoComponents()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">组件demo</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click="clickGoCanvas()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">canvasdemo</span>
                    </el-menu-item>
                    <el-menu-item index="7" @click="cliclGoErreo()">
                        <i class="el-icon-circle-close"></i>
                        <span slot="title">404</span>
                    </el-menu-item>

                </el-menu>
            </el-col>
        </el-row>
        <el-row class="tac-footer cursor">
            <i class="el-icon-user-solid"></i>
            个人中心
        </el-row>
    </el-aside>
</template>

<script>
export default {
    name: 'asidecom',
    methods: {
        handleOpen(key, keyPath) {
            
        },
        handleClose(key, keyPath) {
            
        },
        clickGoHome() {
            this.$router.push({
                name: 'homemain'
            })
        },
        clickGopeoplestore() {
            this.$router.push({
                name: 'peoplestore'
            })
        },
        clickGoComponents() {
            this.$router.push({
                name: 'com'
            })
        },
        clickGoCanvas() {
            this.$router.push({
                name: 'canvasdemo',
            })
        },
        cliclGoErreo() {
            this.$router.push({
                name: 'erreo',
            })
        },
        // 人才盘点 -> 盘点项目
        menuPeopleCheckProject() {
            this.$router.push({
                name: 'peoplecheckproject',
            })
        },
    }
}
</script>

<style scoped>
.asidecom .tac{
    height: 90% !important;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
}
.asidecom .tac::-webkit-scrollbar { 
    width: 0 !important;
}
.asidecom .tac-menu{
    height: 100% !important;
}
.home .tac-footer{
    height: 10%;
    border-right: 1px solid #e6e6e6;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
}
</style>
<style>
.asidecom .el-menu{
    height: 100% !important;
}
</style>
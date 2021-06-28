<template>
        <el-header class="home-header">
            <div class="home-header-left">
                <img alt="" class="left-img">
                <div class="left-logo">LOGO</div>
                <div class="left-menu">
                    <div class="left-menu-eve cursor" v-for="(item, index) in menuData" :key="index" 
                    :style="{color: index === systemIndex ? '#0074F2' : ''}" @click="clickSystem(index)">{{item.name}}</div>
                </div>
            </div>
            <div class="home-header-right">
                <img alt="" class="right-img">
                <div class="right-name">张三</div>
                <div class="right-name">销售员</div>
                <i class="el-icon-bell right-icon"></i>
                <i class="el-icon-switch-button right-icon"></i>
            </div>
        </el-header>
</template>

<script>
export default {
    name: 'headercom',
    data() {
        return {
            menuData: [{
                id: 0,
                name: '频道名称',
            },{
                id: 1,
                name: '频道名称',
            },{
                id: 2,
                name: '频道名称',
            },{
                id: 3,
                name: '频道名称',
            }],
            systemIndex: 0,
        }
    },
    methods: {
        clickSystem(index) {
            this.systemIndex = index;
        },
    },
}
</script>

<style scoped>
.home-header{
    flex: 0 0 56px;
    box-shadow: 0px 4px 8px 0px rgba(168, 209, 254, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.home-header-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.left-img{
    width: 24px;
    height: 24px;
    border: 1px solid #666666;
    border-radius: 50%;
}
.left-logo{
    padding: 0 0 0 20px;
}
.left-menu{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    line-height: 100%;
    padding: 0 20px;
}
.left-menu-eve{
    padding: 0 20px;
}
.home-header-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.right-img{
    width: 24px;
    height: 24px;
    border: 1px solid #666666;
    border-radius: 50%;
}
.right-name{
    padding: 0 8px;
}
.right-icon{
    font-size: 20px;
    padding: 0 10px;
}
</style>


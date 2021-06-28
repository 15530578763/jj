<template>
    <el-main class="main">

        
        <div class="main-tab">
            <breadcrumb></breadcrumb>
        </div>
        <div class="main-content">
            <router-view />
        </div>


    </el-main>
</template>

<script>
import breadcrumb from '@/components/common/breadcrumb'
export default {
    name: 'contaiiner',
    components: {
        breadcrumb,
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created() {
        this.$router.push({
            name: 'homemain',
        })
    },
}
</script>

<style scoped>
.main{
    background: #E7F3FF;
    flex-direction: column;
    padding: 20px 0 0 20px;
}
.main-tab{
    flex: 0 0 20px;
    padding: 0 0 10px 0;
}
.main-content{
    flex: 1 1 auto;
    overflow: auto;
}
</style>

<style>
.home .el-main{
    display: flex;
}
</style>
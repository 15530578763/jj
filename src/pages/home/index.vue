<template>
    <div class="home">

        <el-container class="home-con">
            <headercom></headercom>
            <el-container>
                <asidecom style="width: 15%;"></asidecom>
                <container></container>
            </el-container>
        </el-container>

    </div>
</template>

<script>
import '@/assets/css/pages/home/home.css'
import headercom from '@/components/pages/home/headercom'
import asidecom from '@/components/pages/home/asidecom'
import container from '@/components/pages/home/container'
export default {
    name: "home",
    components: {
        headercom,
        asidecom,
        container,
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
};



</script>





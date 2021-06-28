<template>
<div class="homemain">

    <contentframe>
        <div slot="top">
            首页
        </div>
        <div slot="middle">
            首页
        </div>
    </contentframe>

</div>
</template>

<script>
import contentframe from '@/components/common/contentframe'
export default {
    name: 'homemain',
    components: {
        contentframe,
    },
}
</script>

<style scoped>
.homemain{
    height: 100%;
}
</style>


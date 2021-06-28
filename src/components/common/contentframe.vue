<template>
    <div class="content">
        <div class="top">
            <slot name="top"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentframe'
}
</script>

<style scoped>
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.top{
    background: #F7F9FC;
    flex: 0 0 120px;
    padding: 20px;
}
.middle{
    background: #fff;
    flex: 1 1 auto;
    overflow: auto;
    padding: 40px 20px;
}
</style>


<template>
    <div class="contentframesecond">
        <div class="top">
            <slot name="top"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentframesecond'
}
</script>

<style scoped>
.contentframesecond{
    display: flex;
    background: #fff;
}
.top{
    width: 100%;
    padding: 40px 20px;
}
</style>


<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right" style="width:120px"><slot name="right"></slot></div>
    </div>
</template>
<script>
</script>
<style>
    .nav-bar{
        display:flex;
        height:44px;
      
        line-height:44px;

    }
    .left,.right{
        width:60px;
        height:100%;

    }
    .center{
        width:100%;
        text-align: center;
        color:white;
    }
</style>
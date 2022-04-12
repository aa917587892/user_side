<template>
    <div class="discount">
        <div v-for="(item,index) in recommend" class="discount-item" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'discount',
    props:{
        recommend:{
            type:Array,
            default(){
                return
            }
        }
    }
}
</script>
<style >
    .discount{
        display: flex;
        width: 100%;
        text-align: center;

        padding: 10px 0px 20px;
        border-bottom: 10px solid #f1f1f1;
    }
    .discount-item{
        flex: 1;
    }
    .discount-item img{
        widows: 80px;
        height: 80px;
    }
</style>
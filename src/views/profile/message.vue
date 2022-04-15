<template>
    <div class="message">
        <navbar class="message-navbar" >
            <div slot="center">我的消息</div>
            <div slot="left" @click="$router.back()" ><i class="el-icon-arrow-left" style="font-size:20px;color:white;padding-left:10px;margin-top:5px;font-weight:600"></i></div>
            <div slot="right" ><span  style="color:white;font-size:14px">全部已读</span> </div>
        </navbar>
        <div class="" style="margin-top:44px;padding-top:5px;padding-bottom:70px">
            <div class=" mt-2 message_list" v-for="(item,index) in 8" :key="index">
                <div class="mx-2 py-2 px-2 rounded bg-white message_title">
                    <el-badge is-dot class="item"><h4>提现通知</h4></el-badge>
                    <p>恭喜你提现通过</p>
                </div>
                <div class="flex justify-center align-center message_time pt-1">
                   <span style="font-size:14px">2022-04-14 07:47:30</span> 
                </div>
            </div>
        </div>
    </div>

   
</template>
<script>
import navbar from'@/components/common/navbar/NavBar.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        navbar
    }
}
</script>
<style scoped>
    .message{
        background-color:#efefef;
    }
    .message-navbar{
      background-color:#409eff;
        position: fixed;
        top:0;
        left: 0;
        right:0;
        z-index: 999;
    }
    .message_list p{
        font-size:14px;
        margin-top:5px;
    }
</style>
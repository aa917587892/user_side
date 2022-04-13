<template>
<div class="lineItem">
    <navbar class="home-navbar " >
        <div slot="center">试用订单(ID:{{}})</div>
        <div slot="left"><i class="el-icon-arrow-left" style="font-size:20px;color:white;padding-left:10px;margin-top:5px;font-weight:600"></i></div>
    </navbar>
    <div class="flex px-2 py-1 mb-1 bg-white">
        <div><el-image  style="width:80px; height: 80px" :src="goods.imageUrl" fit="cover" ></el-image><div class=" text-center" style="font-size:14px;">商品主图</div></div>
        <div class="ml-1" style="font-size:14px">
            <ul>
                <li>店铺名称：<span>{{goods.shop}}</span></li>
                <li>商品标题：<span>{{goods.goods}}</span></li>
                <li>下单价格：<span>{{goods.price}}</span>元</li>
                <li>奖励金币：<span class=" text-danger">{{goods.money}}金币</span></li>
            </ul>
        </div>
    </div>
    <div class="bg-white">
        <div class="px-2 py-2 border-bottom flex">
            <img src="../../assets/img/common/dy_ico.jpg" width="16" height="16" alt="" srcset="">任务状态：{{goods.state}}
        </div>
        <div class="pt-1 pb-2 px-2">
             <el-tag type="danger" size="mini" class="mx-1" >平台方库</el-tag><el-tag size="mini" class="mx-1">要求好评</el-tag><el-tag type="success" size="mini" class="mx-1">要求追评</el-tag>
             <p class="mt-1" style="font-size:14px;color:red" >商家要求:按照文字提示步骤来操作，做错白做</p> 
        </div>
    </div>
    <div class="mt-1 bg-white pt-2 px-1">
          <el-timeline>
                <el-timeline-item timestamp="领取了活动" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="找到了商品" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="完成了付款" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="商家已发货" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
                </el-timeline-item>
                 <el-timeline-item timestamp="已经好评收货" placement="top">
                <el-card>
                    <p>请等待商家确认完成，如果商家没有在<span>{{time}}</span> 之前确认，系统将会自动完成。</p>
                </el-card>
                </el-timeline-item>
                 <el-timeline-item timestamp="订单完成了" placement="top">
                <el-card>
                    <p>恭喜:活动订单已经完成，商家会发还{{money}}金币到您的平台账户</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>
    </div>
</div>
</template>
<script>
import navbar from 'components/common/navbar/NavBar.vue'

export default {
    data(){
        return{
                goods:{
                    shop:'啊实打体店铺',
                    goods:'项链',
                    price:'16',
                    imageUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    money:'2.00',
                    state:'已发货'
                },
                timeLine:{

                }
        }
    },
    components:{
        navbar
    }    
      
}
</script>
<style scoped>
.lineItem{
    background-color: #efefef;
}
.home-navbar{
   background-color:#409eff;
}
.lineItem li{
    line-height: 23px;
}
</style>
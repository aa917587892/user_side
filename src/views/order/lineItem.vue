<template>
<div class="lineItem">
    <navbar class="home-navbar" >
        <div slot="center">试用订单(ID:{{}})</div>
        <div slot="left" @click="$router.back()" ><i class="el-icon-arrow-left" style="font-size:20px;color:white;padding-left:10px;margin-top:5px;font-weight:600"></i></div>
    </navbar>
    <div class="flex px-2 pb-1 pt-5 mb-1 bg-white">
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
        <div class="px-2 py-2  border-bottom flex">
            <img src="../../assets/img/common/dy_ico.jpg" width="16" height="16" alt="" srcset="">任务状态：{{goods.state}}
        </div>
        <div class="pt-1 pb-2 px-2">
             <el-tag type="danger" size="mini" class="ml-1" >平台方库</el-tag><el-tag size="mini" class="ml-1">要求好评</el-tag><el-tag type="success" size="mini" class="ml-1">要求追评</el-tag>
             <p class="mt-1" style="font-size:14px;color:red" >商家要求:按照文字提示步骤来操作，做错白做</p> 
        </div>
    </div>
    <div class="mt-1 bg-white pt-2 px-1 pb-4">
          <el-timeline>
                <el-timeline-item timestamp="领取了活动" placement="top" color="#0bbd87" icon="el-icon-check" size="large" >
                <el-card>
                   <div class="jdfs border-bottom">
                     <p>
                        <span>请打开手机端淘宝/天猫，登录账号{{}}，
                            <span>在首页的搜索框内输入关键词语:{{}},搜索关键词提示:关键词搜索</span>
                            <span>打开手机淘宝/天猫,使用扫一扫功能扫描或者保存并打开下面二维码</span>
                        </span>   
                     </p>
                     <div class="pb-1">
                         <div class="scjt">
                              <el-upload :class="{hideShow:scjt.hideUpload}"  action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card" :limit="scjt.limit_count"  
                                :on-change="handleRemove"
                                :on-remove="handleRemove">
                                <span style="color:#4ebeff">上传截图</span> 
                            </el-upload>
                            <el-dialog :visible.sync="scjt.Visible">
                                <img width="100%" :src="scjt.imageUrl" alt="">
                            </el-dialog>
                         </div>
                         <div class="">
                            <el-image style="width: 100px; height: 100px;margin-left:5px" fit="cover" v-for="(item,index) in timeLine2.lqhd.top.srcList" :key="index"  :src="item"  :preview-src-list="timeLine2.lqhd.top.srcList"></el-image>  
                         </div>
                         <div class="erweima">
                             <el-image style="width: 100px; height: 100px;margin-left:5px" fit="cover"  v-for="(item,index) in timeLine2.lqhd.top.QR_code" :key="index"  :src="item"  :preview-src-list="timeLine2.lqhd.top.QR_code"></el-image>  
                         </div>
                         <div class="">
                              <el-radio v-model="timeLine.lqhd.top" label="1" border>我已经确认按照关键词搜索</el-radio>
                         </div>
                     </div>
                   </div>
                   <div class="qr_shop pb-1 border-bottom">
                       <div class="shopname flex p-1">
                       <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="80" height="80" alt="">
                       <div class="pl-1">
                           <li><span>商铺名称：</span><span>{{timeLine2.lqhd.nav.shop_name}}</span></li>
                           <li><span>商品标题：</span><span>{{timeLine2.lqhd.nav.shop_title}}</span></li>
                           <li><span>购买数量：</span><span class="text-danger">{{timeLine2.lqhd.nav.shop_number}}个</span></li>
                       </div>
                       </div>
                       <p>
                           验证商品，请进入商品详情页，浏览商品详情<span>不少于{{}}分钟</span>，点击分享然后再选择复制链接！
                       </p>
                       <div class="flex justify-between align-center mt-1">
                           <span>核对淘口令：</span><el-input  v-model="timeLine.lqhd.top.username" placeholder="请粘贴复制的淘口令" size="medium" style="width:160px;margin-right:10px" ></el-input>
                           <el-button  size="medium" type="primary" >核对</el-button>
                       </div>
                       
                   </div>
                   <div class="pt-1">
                       <p class="pb-1">核对正确后请<span class="text-zise">《收藏活动宝贝》</span><span class="text-zise">《宝贝加入购物车》</span><span class="text-zise">《宝贝加入购物车》</span></p>
                        <el-radio v-model="timeLine.lqhd.top" label="1" border>我确认已收藏宝贝</el-radio>
                        <div class="pt-1"></div>
                        <el-radio v-model="timeLine.lqhd.top" label="2" border>我确认已加入购物车</el-radio>
                        <div class="pt-1"></div>
                        <el-radio v-model="timeLine.lqhd.top" label="3" border>我确认关注店铺</el-radio>
                   </div>
                    <div class="pt-1">
                        <el-button  class="" type="primary" style="width:100%" >确定已找到活动的商品</el-button>
                    </div>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="找到了商品" placement="top" color="#0bbd87" icon="el-icon-check" size="large">
                <el-card>
                    <div class="pb-1 border-bottom">
                        <p>打开淘宝/天猫完成付款并且填写订单信息，商家会在发货后返还支付的商品金额到您的平台账户</p>
                        <p style="color:red">*注意:禁止试用支付宝花呗或者信用卡付款</p>
                    </div>
                    <div class=" border-bottom pb-2">
                       <div class="flex align-center justify-between pt-1">
                           <span>付款图：</span>
                           <el-upload :class="{hideShow:scjt.hideUpload}"  action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card" :limit="scjt.limit_count"  
                                :on-change="handleRemove"
                                :on-remove="handleRemove">
                               <i class="el-icon-plus"></i>
                            </el-upload>
                            <div class="" style="color:#409eff;padding:0px 20px" @click="fk_shili_image = true" >付款实例截图</div>
                       </div>
                        <div class="flex align-center ">
                           <span>订单编号：</span>
                            <el-input class="" style="width:200px" size="medium" placeholder="淘宝/天猫订单编号！" ></el-input>             
                        </div>
                        <div class="flex align-center  pt-1">
                           <span>实付金额：</span>
                            <el-input class="" style="width:200px" size="medium" placeholder="按照实际付款金额填写！" ></el-input>             
                        </div>
                        <div class="flex align-center  pt-1">
                           <span>下单备注：</span>
                            <el-input class="" style="width:200px" size="medium" placeholder="给商家的留言说明可不填写！" ></el-input>             
                        </div>      
                    </div>
                    <div class=" border-bottom pb-2">
                        <div class="flex align-center  py-1">
                           <span>付款图：</span>
                            <el-image  style="width: 100px;height: 100px;margin-left:20px" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image" > </el-image>
                       </div>
                        <div class="flex align-center ">
                           <span>订单编号：</span>
                            <span>23131321321564564645</span>     
                        </div>
                        <div class="flex align-center  pt-1">
                           <span>实付金额：325.00元</span>
                                    
                        </div>
                        <div class="flex align-center  pt-1">
                           <span>下单备注：</span>
                            <span>啊啊u是的撒阿三</span>                
                        </div>      
                    </div>
                    <div class="pt-1">
                        <el-button class="" type="primary"  style="width:100%" >确认已经付款</el-button>
                    </div>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="完成了付款" placement="top" color="#0bbd87" icon="el-icon-check" size="large">
                <el-card>
                    <div class="">
                     <p>请等待商家发货，如果商家未在<span class="text-zise">2022/4/15 14:57:20</span>之前发货，系统将会自动发货</p> 
                    </div>
                    <div>
                        <p>商家已经在淘宝/天猫发货，请等待物流信息显示为 <span class="text-zise">已签收</span>再确认收货</p>
                    </div>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="商家已发货" placement="top" color="#0bbd87" icon="el-icon-check" size="large">
                <el-card>
                    <div>
                        <p style="color: rgb(48, 49, 51);" class="border-bottom pb-1">
                        请打开淘宝/天猫，商家要求好评方式是：<span class="text-zise">自由发挥好评</span>，要求追评方式是：<span class="text-zise">默认五星</span>
                        </p>
                    </div>
                    <div class="">
                        <div class="flex align-center justify-between pt-1 border-bottom">
                            <span>收费截图：</span>
                            <el-upload :class="{hideShow:scjt.hideUpload}"  action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card" :limit="scjt.limit_count"  
                                    :on-change="handleRemove"
                                    :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                                </el-upload>
                                <div class="" style="color:#409eff;padding:0px 20px" @click="sh_shili_image = true" >收货示例图</div>
                        </div>
                        <div class="flex align-center justify-between pt-1 border-bottom">
                            <span>好评截图：</span>
                            <el-upload :class="{hideShow:scjt.hideUpload}"  action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card" :limit="scjt.limit_count"  
                                    :on-change="handleRemove"
                                    :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                                </el-upload>
                                <div class="" style="color:#409eff;padding:0px 20px" @click="hp_shili_image = true" >好评示例图</div>
                        </div>
                        <div class="flex align-center justify-between pt-1 border-bottom">
                            <span>追评截图：</span>
                            <el-upload :class="{hideShow:scjt.hideUpload}"  action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card" :limit="scjt.limit_count"  
                                    :on-change="handleRemove"
                                    :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                                </el-upload>
                                <div class="" style="color:#409eff;padding:0px 20px" @click="zp_shili_image = true" >追评示例图</div>
                        </div>
                        <div class="pt-1">
                            <el-button type="primary" style="width:100%" >确认已收货</el-button>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex align-center py-1 border-bottom">
                            <span>收费截图：</span>
                            <el-image style="width: 100px;height: 100px;margin-left:20px" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>
                        </div>
                        <div>
                            <span>请在好评时输入商家指定评语: <span class="text-zise">好大一瓶啊，夏天到了买个0度的就够用了，去污能力很强，必须的好评</span> </span>
                            <div class="pb-1"><el-button type="primary" size="mini"  >一键复制</el-button> </div>
                            <el-image style="width:100px;height: 100px;margin-left:20px" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>                            
                        </div>
                        <div class="flex align-center py-1 border-bottom">
                            <span>好评截图：</span>
                           <el-image style="width: 100px;height: 100px;margin-left:20px" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>
                        </div>
                        <div>
                            <span>请在好评时输入商家指定追评语: <span class="text-zise">好大一瓶啊，夏天到了买个0度的就够用了，去污能力很强，必须的好评</span> </span>
                            <div class="pb-1"><el-button type="primary" size="mini" >一键复制</el-button> </div>
                            <el-image style="width:100px;height: 100px;margin-left:20px" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>                            
                        </div>
                        <div class="flex align-center py-1 border-bottom">
                            <span>追评截图：</span>
                           <el-image style="width: 100px;height: 100px;margin-left:20px" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>
                        </div>
                    </div>
                </el-card>
                </el-timeline-item>
                 <el-timeline-item timestamp="已经好评收货" placement="top" color="#0bbd87" icon="el-icon-check" size="large">
                <el-card>
                    <p>请等待商家确认完成，如果商家没有在<span>{{timeLine.time}}</span> 之前确认，系统将会自动完成。</p>
                </el-card>
                </el-timeline-item>
                 <el-timeline-item timestamp="订单完成了" placement="top" color="#0bbd87" icon="el-icon-check" size="large">
                <el-card>
                    <p>恭喜:活动订单已经完成，商家会发还{{timeLine.money}}金币到您的平台账户</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>
    </div> 
    <el-backtop target=""></el-backtop>
    <el-dialog title="付款示例图" :visible.sync="fk_shili_image" width="90%" >
        <div class=" text-center">
          <el-image  style="width:100%;height: 100%;" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>          
        </div>
    <div slot="footer" class="dialog-footer">
        <el-button @click="fk_shili_image = false">关 闭</el-button>
    </div>
    </el-dialog>
    <el-dialog title="收货示例图" :visible.sync="sh_shili_image" width="90%" >
        <div class=" text-center">
          <el-image  style="width:100%;height: 100%;" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>          
        </div>
    <div slot="footer" class="dialog-footer">
        <el-button @click="sh_shili_image = false">关 闭</el-button>
    </div>
    </el-dialog>
    <el-dialog title="好评示例图" :visible.sync="hp_shili_image" width="90%" >
        <div class=" text-center">
          <el-image  style="width:100%;height: 100%;" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>          
        </div>
    <div slot="footer" class="dialog-footer">
        <el-button @click="hp_shili_image = false">关 闭</el-button>
    </div>
    </el-dialog>
    <el-dialog title="追评示例图" :visible.sync="zp_shili_image" width="90%" >
        <div class=" text-center">
          <el-image  style="width:100%;height: 100%;" v-for="(item,index) in timeLine2.zdsp.pay_image" :key="index" fit="cover"  :src="item" :preview-src-list="timeLine2.zdsp.pay_image"></el-image>          
        </div>
    <div slot="footer" class="dialog-footer">
        <el-button @click="zp_shili_image = false">关 闭</el-button>
    </div>
    </el-dialog>
</div>
</template>
<script>
import navbar from 'components/common/navbar/NavBar.vue'

export default {
    data(){
        return{
                fk_shili_image:false,
                hp_shili_image:false,
                sh_shili_image:false,
                zp_shili_image:false,
                scjt:{
                    limit_count:1,
                    Visible: false,
                    imageUrl:'',
                    hideUpload:false
                },
                goods:{
                    shop:'啊实打体店铺',
                    goods:'项链',
                    price:'16',
                    imageUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    money:'2.00',
                    state:'已发货'
                },
                timeLine:{
                    lqhd:{
                        top:{
                         state:'关键词/1',
                         platform:'淘宝/天猫',
                         username:'',
                         keyword:'t衬衫',
                        }
                    },
                    zdsp:{},
                    fk:{},
                    hpsh:{},
                    ddwc:{ money:''},
                    qxdd:{list:''}
                    
                   
                },
                 timeLine2:{
                     lqhd:{
                        top:{
                         state:'其他渠道',
                         platform:'淘宝/天猫',
                         username:'',
                         keyword:'t衬衫',
                          QR_code:['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',],
                           srcList:[
                                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                                ]
                        },
                        nav:{
                            shop_name:'卡低山旗舰店',
                            shop_title:'不上衣',
                            shop_number:1
                        },
                    },
                    zdsp:{
                        pay_image:['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
                    },
                    fk:{},
                    hpsh:{},
                    ddwc:{ money:''},
                    qxdd:{list:''}
                 }
        }
        
    },
    methods:{
    handleRemove(file, fileList) {
       this.scjt.hideUpload =fileList.length >= this.scjt.limit_count
        console.log( fileList.length + "------"+this.scjt.hideUpload);
      },
      
    },
    components:{
        navbar
    }    
      
}
</script>
<style >
.lineItem{
    background-color: #efefef;
}
.lineItem .home-navbar{
   background-color:#409eff;
   position: fixed;
   left: 0;
   right:0;
   z-index: 999;
}
.text-zise{color:#ff1d85}
.lineItem li{
    line-height:23px;
}

 .lineItem .hideShow  .el-upload--picture-card {
    display: none;
  }
  .lineItem .el-upload--picture-card{
    width:80px;
    height: 80px;
    line-height:90px;
    margin-bottom: 10px;
  }
  .lineItem .el-upload-list--picture-card .el-upload-list__item{
    width: 80px;
    height: 80px;
  }
</style>
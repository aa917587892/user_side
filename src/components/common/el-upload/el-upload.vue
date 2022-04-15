<template>
    <div class="el-upload">
            <el-upload :class="{hideShow:hideUpload}"  action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card" :limit="limit_count"  
                        :on-change="handleChange"
                        :on-remove="handleRemove"
                        :on-preview="handlePreview">
                    <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
    </div>
    
    
</template>
<script>
export default {
    data(){
        return{
           hideUpload:false,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    props:{
        limit_count:{
            type:Number,
            default:1
        }
    },
    methods:{
        handleChange(file, fileList) {
            this.hideUpload =fileList.length >= this.limit_count
            },
        handleRemove(file, fileList) {
            this.hideUpload=false
        console.log(file, fileList);
      },
        handlePreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
      }
    }
}
</script>
<style >
   .hideShow  .el-upload--picture-card {
        display: none;
    } 
  .el-upload .el-upload--picture-card{
        width:140px;
        height: 140px;
        line-height:140px;
        margin-bottom: 10px;
    }
   .el-upload .el-upload-list--picture-card .el-upload-list__item{
        width: 140px;
        height: 140px;
    }
</style>
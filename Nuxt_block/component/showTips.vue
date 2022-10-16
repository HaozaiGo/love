<!--
 * @Author: xiaoHao
-->
<template>
   <div v-if="show" class="TipsBg" >
        {{message}} <span style="color:red">❤</span>!
      </div>
</template>

<script>
export default {
    
    props:{
        showTips:{
            type:Boolean,
            default:false
        },
        message:{
            type:String,
            default:"提交成功啦"
        }
    },
    data(){
        return{
            show:null
        }
    },
    watch:{
        showTips(val){
            this.show = val;
            if(val){
                setTimeout(()=>{this.show = false},2000)
            }
            
        }
    },
    created(){
        
      
    },

}
</script>

<style>
.TipsBg{
  background: #ffffff;
  position: absolute;
  height: fit-content;
  width: fit-content;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: #253035;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}
</style>
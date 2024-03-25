<template>




  <div class="aboutContainer">
   

    <div class="about-content">
      <div class="up">
        <!-- <img :src="imglogo" alt="" srcset="" /> -->
          MOTIC CHINA GROUP Co.,LTD
        
        </div>
     <div class="middle">
        <span>麦克奥迪电气总部—— 厦门 </span>
        <span>麦克奥迪（厦门）电气股份有限公司 </span>
        <span>中国厦门火炬高新区（翔安）产业区舫山南路808号</span>
        <span>信息邮箱： info@ motic-electric.com </span>
        <span>销售邮箱： sales@ motic-electric.com</span>
        <span>电话： +86 (0)592 5628 287</span>
        <span>传真： +86 (0)592 5626 612</span>
        <span>网站： www.motic-electric.com</span>
      </div>
      <div class="foot" >
   
    <img src="http://i7.hexun.com/2020-02-24/200391953.jpg" alt="" srcset="" />
     <img src="http://img00.hc360.com/edu/201210/201210171710353936.jpg" alt="" srcset="" />
    <img src="https://www.motic-electric.com/upload/201508/201508111868.jpg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>


export default {
 
  
  
};
</script>

<style  scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
.aboutContainer{
  
  width:100%;
  height: 100%;
  position: absolute;
overflow-y:scroll;
display: flex;
flex-direction: row;
border: 0px solid red ;
justify-content: center;
}

.about-content {
  margin-top: 0px;
  border: 0px double #dedede;
  height: calc(100%-60px);
  width: 97%;

height:100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: space-around;
}
.up {
  width: 100%;
  height: 10%;
  border: 0px double #dedede;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 23px;
  background-color: white;
  color:rgb(223, 23, 23)
}
.up img {
  height: 55%;
  width: 50%;
}
.middle {
  width: 100%;
  height: 42%;
  border-bottom: 1px double #eee;
  border-top: 1px double #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0px;
}
.middle span {
  text-align: left;
}
.foot {
  height: 45%;
  width: 100%;
  border: 0px double red;
}
.foot img{
   height: 400upx;
  width: 100%;
}



 


</style>
<template>
    <div class="HeadBox">
            <div class="TaskInput">
              <input v-model="inputText" type="text" placeholder="请输入文本">
              <div  @click="saveText" class="Input_but">按钮</div>
               
            </div>
              <div class="Task_List">
                <div v-for="(list, index) in Tasklist" :key= "list.id"  >
                  <div v-if="index==$route.query.in_index">
                    <ul>
                      <div >
                        <li  v-for=" item  in list.child" :key="item.id" class="list_li" >{{ item.name }}  
                          <button  @click="deleteText(index)">删除</button>
                        </li> 
                      </div>
                    </ul>
                  </div>
                </div>
            {{ $route.query.in_index}}
            
            </div>
    </div>
          
        
</template>

<script>
 export default{
    name:'about_2',
    mounted(){  
        console.log(this.$route)
    },

    data() {
        return {
                inputText: '' ,// 保存输入框的文本
                Tasklist : 
                [
                {name:'我的日程',id:0,child:[{id:11,name:'asdasd'},{id:12,name:'asdasd'}]},
                {name:'我的日程',id:1,child:[{id:1231,name:'asd'},{id:1231,name:'ad'}]},
                {name:'我的日程',id:2,child:[{id:1231,name:'ad'},{id:1231,name:'asdasd'}]}
                
                ]
                 
        }
    },
    methods: {
      try_text(){
        let newList =   {name:'我的日程',id:1,child:[]}
      }
    //   saveText() {
    //     if (this.inputText.trim() === '') {
    //     return; // 如果输入框为空，则不执行保存操作
    //   }

    //     let newList = {
    //       name:this.inputText,
    //     }

    //     // 将输入框的文本添加到数组中
    //     if(this.$route.query.id==1){
    //     this.TaskLists_1.push(newList);
    //     }
    //     if(this.$route.query.id==2){
    //     this.TaskLists_2.push(newList);
    //     }
    //     if(this.$route.query.id==3){
    //     this.TaskLists_3.push(newList);
    //     }
    //     this.inputText = ''; // 清空输入框
    // },
//     deleteText(index) {
//       // 删除指定索引处的文本
      
//       if(this.$route.query.id==1){
//           this.TaskLists_1.splice(index, 1);
//         }
//         if(this.$route.query.id==2){
//           this.TaskLists_2.splice(index, 1);
//         }
//         if(this.$route.query.id==3){
//           this.TaskLists_3.splice(index, 1);
//         }
//     }
  }
}
</script>

<style scoped>
.list_li{
  position: relative;
  
}

button {
  background-color: #e5f134;
  color: #000000;
  border: none;
  
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  width: 10%;
  height: 95%;
  position: absolute;
  right: 0.5%;
  
  padding: 10px 20px;


}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
}

.HeadBox{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.HeadBox .TaskInput{
  
  width: 100%;
  flex: 5;
  display: flex;
  align-items: center;
  
}

.TaskInput input{
  width: 75%;
  height: 28%;
  font-size: 1.1rem; /* 添加此行以调整字体大小 */
  font-family: "Arial", sans-serif; /* 添加此行以更改字体 */
  display: block;
  margin-left: 6%;
  border-radius: 10px;
  border:2px solid #1f1f1f;
  
}

.Input_but{
  background-color: #e6e603;
  width: 9%;
  height: 32%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid #1f1f1f;
  border-radius: 10px;
}

.HeadBox .Task_List{
  width: 100%;
  flex: 25;
  list-style-type: none;
  
}

ul{
  margin-top: 3%;
}



.HeadBox .Task_List li{
  list-style-type: none;
  background-color: #dadb9e;
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 4%;
  border-radius: 5px;
  min-height: 40px;
  font-size: 1.3rem;
  text-indent: 1.2em;
  display: flex;
  align-items: center;
}

.HeadLine {
  text-align: left;
}

.context {
  text-align: left;
}

.title {
  font-family: "Arial", sans-serif; /* 设置字体 */
  font-size: 20px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
}

.logo {
  height: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  float: left;
}

.icon {
  height: 20px;
  margin-left: 15px;
  cursor: pointer;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
}

.line {
  background-color: #ffffff;
  list-style-type: none;
  border-radius: 18px;
  padding: 4px 4px; /* 更改为 0 左右内边距 */
  width: 100%;
  height: 30px;
  margin-left: -1.2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 22px;
}
</style>
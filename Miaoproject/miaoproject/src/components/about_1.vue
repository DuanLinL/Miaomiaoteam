<template>
    <div class="HeadBox">
            <div class="TaskInput">
              <input v-model="inputText" type="text" placeholder="请输入文本">
              <el-button @click="saveText" class="Input_but" type="info" round>+</el-button>
            </div>
            
            <div class="Task_List">
              <ul>
                <div v-if="$route.query.id==1" >
                  <el-scrollbar height="500px">
                      <li class="list_li scrollbar-demo-item" v-for="(list, index) in TaskLists_1" :key= "list" :class="{ completed: list.completed }" >
                        <el-button style="width: 2em; height:65%; margin-left: 20px;"  @click="completeTodo(index)">
                          <check style="width: 1em; height: 1em; " />
                        </el-button>
                        {{ list.name }}
                        <div class="icon_position">
                          
                          <el-button  style="width: 1em; height: 80%;" @click="open_timer(list)">
                            <video-play style="width: 1em; height: 1em; "    />
                          </el-button>
                          <el-button  style="width: 1em; height: 80%;"  @click="deleteText(index)">
                            <Delete style="width: 1em; height: 1em; " />
                          </el-button>
                          <el-button @click="more_Todo(list,index)" style="width: 1em; height: 80%;">
                            <Operation style="width: 1em; height: 1em; " />
                          </el-button>
                          
                        </div>
                      </li>
                      
                   </el-scrollbar> 
                </div>
                <div v-if="$route.query.id==2" >
                  <el-scrollbar height="500px">
                  <li class="list_li scrollbar-demo-item" v-for="(list2, index) in TaskLists_2" :key= "list2"  :class="{ completed: list2.completed }">
                    <el-button style="width: 2em; height:65%; margin-left: 20px;"  @click="completeTodo(index)">
                          <check style="width: 1em; height: 1em; " />
                    </el-button>
                    {{ list2.name }}
                      <div class="icon_position ">

                        <el-button  style="width: 1em; height: 80%; "  @click="open_timer(list2)">
                            <check style="width: 1em; height: 1em; "    />
                          </el-button>
                          <el-button  style="width: 1em; height: 80%;"  @click="deleteText(index)">
                            <Delete style="width: 1em; height: 1em; " />
                          </el-button>
                          <el-button @click="more_Todo(list2,index)" style="width: 1em; height: 80%;">
                            <Operation style="width: 1em; height: 1em; " />
                          </el-button>
                      </div>
                  </li>  
                  </el-scrollbar> 
                </div>

                <div v-if="$route.query.id==3" >
                  <el-scrollbar height="500px">
                    <li class="list_li scrollbar-demo-item" v-for="(list) in TaskLists_3" :key= "list"  >
                      <el-button style="width: 2em; height:65%; margin-left: 20px;"  @click="completeTodo(index)">
                          <check style="width: 1em; height: 1em; " />
                      </el-button>
                   
                      {{ list.name }}
                      <div class="icon_position">
                      
                          <el-button  style="width: 1em; height: 80%;"  @click="deleteText(index)">
                            <Delete style="width: 1em; height: 1em; " />
                          </el-button>
                          <el-button @click="more_Todo(list,index)" style="width: 1em; height: 80%;">
                            <Operation style="width: 1em; height: 1em; " />
                          </el-button>
                          
                      </div>
                    </li> 
                  </el-scrollbar> 
                </div>
            </ul>
            </div>
              <!-- 计时器 -->
            
            <el-dialog
              title="倒计时"
              v-model="timerVisible"
              width="30%"
              
              :before-close="handleClose">
              <span>
                
                <el-countdown title="倒计时" :value="deadline" />

              
              </span>
              <template #footer>
                <el-button @click="timerVisible = false">取 消</el-button>
                <el-button type="primary" @click="timerVisible = false">确 定</el-button>
              </template>
            </el-dialog>


            <!-- 展开 -->
            <el-drawer
              style="background-color: rgb(255, 252, 241);"
              title="喵喵内部"
              v-model="drawer"
              :direction="direction"
              :before-close="handleClose">
              <div style="position: relative; width: 100%; height: 100%;">
              <!-- 日期 -->
                  <br><br>
                  <p1>开始与结束时间选择喵</p1>
                  <br>
                  <el-time-picker
                    style="width: 40%;"
                    v-model="time1"
                    :picker-options="{
                      selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                  </el-time-picker>
                  
                  
                  
                  <el-time-picker
                    style="width: 40%;"
                    v-model="time2"
                    :picker-options="{
                      selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">

                    
                  </el-time-picker>
              <!-- 备注 -->
              <br><br><br><br>
                  <p>备注信息</p>
                    <el-input
                      style="widows: 80%;"
                      type="textarea"
                      :rows="7"
                      placeholder="请输入内容"
                      v-model="remarks">
                    </el-input>

                <el-button style="position: absolute; bottom:8% ; left:35%; width: 30%; font-size: 30Wpx;" type="warning"
                            @click="save_setting" 
                          >  确定  </el-button>
              </div>
            </el-drawer>
        
         
            
    </div>
          
        
</template>


<script >
  import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
      } from '@element-plus/icons-vue'
  
  import { ElButton, ElDialog, ElMessageBox, dateEquals } from 'element-plus';
 
  





 export default{
  
    name:'about_1',
    
    mounted(){  
      // 从 localStorage 中获取数据并解析为数组
       this.TaskLists_1 = JSON.parse(localStorage.getItem("array1")) || [];
        this.TaskLists_2 = JSON.parse(localStorage.getItem("array2")) || [];
        this.TaskLists_3 = JSON.parse(localStorage.getItem("array3")) || [];
  
      console.log(this.$route)
        
      
    },
    beforeUnmount() {
    // 组件关闭之前，将数组保存到localStorage中
        localStorage.setItem("array1", JSON.stringify(this.TaskLists_1));
        localStorage.setItem("array2", JSON.stringify(this.TaskLists_2));
        localStorage.setItem("array3", JSON.stringify(this.TaskLists_3));
  },
  
    data() {
        return {
                inputText: '' ,// 保存输入框的文本
                TaskLists_1: [
                
                ],
                TaskLists_2: [

                ],
                TaskLists_3: [
                    
                ],
                showModal: false, // 控制弹窗显示
                selectedTodo: null, // 当前选中的代办事项   
                drawer: false, //侧边展开
                direction: 'rtl',     //展开方向
                time1: new Date(),
                time2: new Date(),
                remarks:"",
                switch1: true,
                switch2: true,
                index:'',
                timerVisible:false,//计时器窗口
                deadline: Date.now() + 1000 * 60 * 30,

              
        }

    },
    methods: {

      saveText() {
        if (this.inputText.trim() === '') {
        return; // 如果输入框为空，则不执行保存操作
      }
        //新增加
        let newList = {
          name:this.inputText,
          completed: false,
          time1:new Date(),
          time2:new Date(),
          remarks: '',
        }
        
        // 将输入框的文本添加到数组中
        if(this.$route.query.id==1){
        this.TaskLists_1.push(newList);
        }
        if(this.$route.query.id==2){
        this.TaskLists_2.push(newList);
        }
        
        this.inputText = ''; // 清空输入框
    },
    deleteText(index) {
      // 删除指定索引处的文本
      this.$notify.error({
          title: '删除',
          message: '为主子删除任务ing',
          type: 'delete'
        });
      if(this.$route.query.id==1){
          this.TaskLists_1.splice(index, 1);
        }
        if(this.$route.query.id==2){
          this.TaskLists_2.splice(index, 1);
        }
        if(this.$route.query.id==3){
          this.TaskLists_3.splice(index, 1);
        }
    },

    more_Todo(list,index){

      //展示详情
      this.drawer = true;
      this.time1=list.time1;
      this.time2=list.time2;
      this.remarks=list.remarks;
      this.index = index;
    },

    completeTodo(index) {
      // 假设点击按钮时，将第一个代办事项设置为已完成
      

      if(this.$route.query.id==1){
       
        if(this.TaskLists_1[index].completed == false)
        this.$notify({
          title: '成功',
          message: '喵喵~，完成任务一项',
          type: 'success'
        });

          this.TaskLists_1[index].completed = true;
          for (const todo of this.TaskLists_1) {
            if (todo.completed && !this.TaskLists_3.includes(todo)) {
              this.TaskLists_3.push(todo);
            } 
          }
      }
        if(this.$route.query.id==2){

          if(this.TaskLists_2[index].completed == false)
        this.$notify({
          title: '成功',
          message: '喵喵~，完成任务一项',
          type: 'success'
        });

          this.TaskLists_2[index].completed = true;
          
          for (const todo of this.TaskLists_2) {
            if (todo.completed && !this.TaskLists_3.includes(todo)) {
              this.TaskLists_3.push(todo);
            } 
          }
        }
      },
      //对数据进行保存
      save_setting(){

        
        this.$message({
          message: '提交成功啦！！',
          type: 'success'
        });
      

        if(this.$route.query.id==1){
            this.TaskLists_1[this.index].time1 = this.time1;
            this.TaskLists_1[this.index].time2 = this.time2;
            this.TaskLists_1[this.index].remarks = this.remarks;
        }
        if(this.$route.query.id==2){
            this.TaskLists_2[this.index].time1 = this.time1;
            this.TaskLists_2[this.index].time2 = this.time2;
            this.TaskLists_2[this.index].remarks = this.remarks;
        }
        if(this.$route.query.id==3){
            this.TaskLists_3[this.index].time1 = this.time1;
            this.TaskLists_3[this.index].time2 = this.time2;
            this.TaskLists_3[this.index].remarks = this.remarks;
        }
      },
      
      open_timer(list){
        this.timerVisible = true;
  
              
        let diffInMilliseconds =  Date.now() - list.time2.getTime() ;

        let diffInDays = Math.round(diffInMilliseconds / (1000 * 60 * 60 * 24));

        this.deadline = new Date(this.time2.getTime() - (diffInDays * 24 * 60 * 60 * 1000));
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    
  },
  
};

</script>

<style scoped>


.scrollbar-demo-item {
  display: flex;

  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
 
}

.list_li{
  position: relative;
 
}

.completed {
  text-decoration: line-through;
}

.icon_position{
  position: absolute;
  right: 0.5%;
}

.more_none{
  height: 200px;
  width: 100%;
  display: none;
}

.more_show{
  display: block;
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
  background-color: #141411;
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
  background-color: #ffffff;
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 4%;
  border-radius: 5px;
  min-height: 40px;
  font-size: 1.2rem;
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



$(function () {
    // 定义添加待办事项的函数
    function addTaskHandler(e) {
      e.preventDefault();
      var taskInput = $(this).children("input");
      var taskText = taskInput.val().trim();

      if (taskText) {
        var listItem = $('<li class="task"></li>');
        var checkbox = $('<input type="checkbox" class="task-checkbox">');
        var label = $('<label class="task-label"></label>').text(taskText);
        var deleteBtn = $('<button class="task-delete">删除</button>');

        listItem.append(checkbox, label, deleteBtn);
        $(this).siblings(".task-list").append(listItem.clone()); // 将任务添加到相应分类列表中
        $("#tasks .task-list").append(listItem); // 将任务添加到任务列表中
        taskInput.val("");
        updateIncompleteTaskCount($(this).siblings(".task-list"));
        updateIncompleteTaskCount($("#tasks .task-list")); // 更新任务列表中未完成任务数量
      }
    }
  
    // 定义更新未完成任务数量的函数
    function updateIncompleteTaskCount(taskList) {
      var count = taskList.find('li.task:not(:has(input:checked))').length;
      taskList.siblings(".incomplete-task-count").text(count + " 项未完成");
    }
  
    // Tab 切换
    $(".left_table ul").on("click", "li.but", function () {
      $(this).addClass("current").siblings().removeClass("current");
      var category = $(this).data("category");
      $("#" + category).show().siblings().hide();
    });
  
    // 为已有任务区域绑定添加待办事项事件处理器
    $(".task-form").on("submit", addTaskHandler);
  
    // 删除任务
    $("body").on("click", ".task-delete", function () {
      var taskList = $(this).closest(".task-list");
      $(this).closest(".task").remove();
      updateIncompleteTaskCount(taskList);
    });
  
    // 完成任务
    $("body").on("change", ".task-checkbox", function () {
      var taskList = $(this).closest(".task-list");
      $(this).siblings(".task-label").toggleClass("completed");
      updateIncompleteTaskCount(taskList);
    });
  
    // 添加分类
    $(".add-category-button").click(function () {
      var input = $(".add-category-input");
      var categoryName = input.val().trim();
  
      if (categoryName) {
        var listItem = $('<li class="but"></li>');
        var categoryText = $('<span class="text"></span>').text(categoryName);
        listItem.append(categoryText).attr("data-category", categoryName.toLowerCase().replace(/ /g, "-"));
        $(".left_table ul").append(listItem);
  
        // 创建新的任务区域
        var newItem = $('<div class="item" id="' + categoryName.toLowerCase().replace(/ /g, "-") + '" style="display:none;"></div>');
        var newTitle = $('<h1></h1>').text(categoryName);
        var newForm = $('<form class="task-form"><input type="text" placeholder="添加任务"><button>+</button></form>');
        var newList = $('<ul class="task-list"></ul>');
        var newCount = $('<span class="incomplete-task-count"></span>');
        newItem.append(newTitle, newForm, newList, newCount);
        $(".box").append(newItem);
  
        // 为新任务区域绑定添加待办事项事件处理器
        newForm.on("submit", addTaskHandler);
  
        input.val("");
      }
    });

    $(document).ready(function () {
      // 点击任务以显示右侧边栏并加载任务信息
      $("body").on("click", ".task", function () {
        // 取消选中之前的任务
        $(".task.selected").removeClass("selected");
    
        // 选中当前任务
        $(this).addClass("selected");
    
        // 从选中的任务元素中读取数据并填充到右侧边栏的表单中
        $("#due-date").val($(this).data("due-date"));
        $("#reminder").val($(this).data("reminder"));
        $("#repeat").val($(this).data("repeat"));
        $("#note").val($(this).data("note"));
        $("#importance").val($(this).data("importance"));
    
        // 显示右侧边栏
        $(".sidebar").show();
      });
    
      // 关闭右侧边栏
      $("#close-sidebar").click(function () {
        $(".sidebar").hide();
      });
    
      // 保存更改
      $("#save-changes").click(function () {
        // 获取当前选中的任务元素
        const selectedTask = $(".task.selected");
    
        // 更新任务的数据属性
        selectedTask.data("due-date", $("#due-date").val());
        selectedTask.data("reminder", $("#reminder").val());
        selectedTask.data("repeat", $("#repeat").val());
        selectedTask.data("note", $("#note").val());
        selectedTask.data("importance", $("#importance").val());
    
        // 更新任务的显示（例如，可以根据重要性设置不同的背景颜色）
        const importance = $("#importance").val();
        const backgroundColor = importance >= 4 ? "#f44336" : (importance >= 3 ? "#ffeb3b" : "#4caf50");
        selectedTask.css("background-color", backgroundColor);
    
        // 关闭右侧边栏
        $(".sidebar").hide();
      });
    }); 
    

  });
  
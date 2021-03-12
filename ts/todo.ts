// 1、定义一个待办的类
class Todo{
  content: string;
  status: boolean;
  constructor(content: string, status: boolean) {
    this.content = content;
    this.status = status;
  }
}

// 2、初始化待办的信息
let todoList: Todo[] = [
  new Todo('第一条代办', true),
  new Todo('第二条代办', false),
]

// 3、渲染待办的列表
function renderList() {
  let listDom = ''
  if (todoList.length > 0) {
    todoList.forEach((item, index)=> {
      listDom += `<li>
      ${item.content}
      </li>`
    })
  }
}
  
  

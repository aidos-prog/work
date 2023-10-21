(function() {

    function createAppTitle(title) {
      let appTitle = document.createElement('h2');
      appTitle.innerHTML = title;
      return appTitle;
    }
   
    function createTodoItemForm() {
      let form = document.createElement('form');
      let input = document.createElement('input');
      let button = document.createElement('button');
      let buttonWrapper = document.createElement('div');

      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = 'Введите название нового дела';
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Добавить дело';
      button.setAttribute('disabled', 123);
      
      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);
      
      function changeButton() {
        button.removeAttribute('disabled')
        if (input.value == '') {
          button.setAttribute('disabled', 123);
        } 
      }
      
      input.addEventListener('input', changeButton)
      
      return {
        form,
        input,
        button
      };  
    }
    
    function createTodoList() {
      let list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
    }

    function createTodoItem({ name, done }) {
      let item = document.createElement('li');
      let buttonGroup = document.createElement('div');
      let buttonDone = document.createElement('button');
      let buttonDelete = document.createElement('button');

      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
      item.textContent = name;

      if (done == true) {
        item.classList.add('list-group-item-success')
      } 

      buttonGroup.classList.add('btn-group', 'btn-group-sm')
      buttonDone.classList.add('btn', 'btn-success')
      buttonDone.textContent = 'Готово';

      buttonDelete.classList.add('btn', 'btn-danger')
      buttonDelete.textContent = 'Удалить';

      buttonDone.addEventListener('click', function() {
        todoItemElement.item.classList.toggle('list-group-item-success')
      });
      buttonDelete.addEventListener('click', function() {
        if (confirm('Вы уверены')) {
          
          item.remove();
        }
      })


      buttonGroup.append(buttonDone);
      buttonGroup.append(buttonDelete);
      item.append(buttonGroup);

      return {
        item,
        buttonDelete,
        buttonDone
      }
    }

    async function createTodoApp(container, title, todoArray = []) {
     
      let todoAppTitle = createAppTitle(title);
      let todoItemForm = createTodoItemForm();
      let todoList = createTodoList();
      
    
      for (let i = 0; i < todoArray.length; i++) {
        
        let init = todoArray[i]
        let doneName = init.name
        let doneDone = init.done
        let todoItem = createTodoItem(doneName, doneDone)
        todoList.append(todoItem.item)

      }
      container.append(todoAppTitle);
      container.append(todoItemForm.form);
      container.append(todoList);

      const response = await fetch('http://localhost:3000/api/todos');
      const todoItemList = await response.json()

      todoItemList.forEach(todoItem => {
        const todoItemElement = createTodoItem(todoItem)
        todoList.append(todoItemElement)
        
      });

      todoItemForm.form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!todoItemForm.input.value) {
          return;
        }

        const response = await fetch('http://localhost:3000/api/todos', {
          method: 'POST',
          body: JSON.stringify({
            name: todoItemForm.input.value.trim(),
            owner: 'Dmitry',
          }),
          headers: {
            'Content-type': 'aplication/json'
          }
        });

        const todoitem = await response.json();
        
        
        let todoItemElement = createTodoItem(todoitem)

        todoItemElement.buttonDone.addEventListener('click', function() {
          todoItemElement.item.classList.toggle('list-group-item-success')
        });
        todoItemElement.buttonDelete.addEventListener('click', function() {
          if (confirm('Вы уверены')) {
            
            todoItemElement.item.remove();
          }
        })

        
        todoArray.push({ name: todoItemForm.input.value, done: false })
        todoItemForm.input.value = '';
        todoList.append(todoItemElement.item);
        console.log(todoArray)

        // localStorage.setItem('addObject', JSON.stringify(todoArray));
  
      })  
    }

  document.addEventListener('DOMContentLoaded', function() {

    // let downloadList = JSON.parse(localStorage.getItem('addObject') || '[]')
    

    createTodoApp(document.getElementById('todo-app'), 'Список дел')

  })
    
})();
  


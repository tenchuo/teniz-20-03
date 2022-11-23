
const inputs = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list');

function createTodo () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const delete_btn = document.createElement('button')
        const edit = document.createElement('button')

        div.setAttribute('class', 'block_text')
        

        text.innerText = input.value
        delete_btn.innerText = 'delete'
        edit.innerText = 'edit'
        
        todoList.append(div)
        div.append(text)
        div.append(delete_btn)
        div.append(edit)
        delete_btn.addEventListener('click',()=> div.remove())
        edit.addEventListener('click',()=> {
            const edit_text = prompt("Введите изменения:")
            text.innerText = edit_text
        })
    }
    input.value = ''
}


createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)
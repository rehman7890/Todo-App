let input = document.querySelector('input');
let ol = document.querySelector('ol');
let emptyArray = [];

function addfun() {
    ol.innerHTML = ' '
    for (let i = 0; i < emptyArray.length; i++) {
        ol.innerHTML += `<li>${emptyArray[i]}
        <img onclick="deleteTodo(${i})" src="Delete.png" alt="">
        <img onclick="editTod(${i})" src="Edit.png" alt="">
        </li>
        `
    }
}

function renderScreen() {
    if (input.value === '') {
        alert('Enter Your Todo');
    } else {
        ol.innerHTML = ' '
        emptyArray.push(input.value)
        console.log(emptyArray);
        input.value = ''

        for (let i = 0; i < emptyArray.length; i++) {
            ol.innerHTML += `<li>${emptyArray[i]}
        <img class="icon" onclick="deleteTodo(${i})" src="Delete.png" alt="">
        <img class="icon" onclick="editTodo(${i})" src="Edit.png" alt="">
        </li>
        `
        }
    }
}

function deleteTodo(index) {
    emptyArray.splice(index, 1)
    addfun()
}
function editTodo(index) {
    let editValue = prompt('Enter Updated Todo', emptyArray[index])
    emptyArray.splice(index, 1, editValue)
    addfun()
}











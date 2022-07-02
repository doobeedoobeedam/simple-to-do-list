let input = document.querySelector('#input');
let list = document.querySelector('#list');
let errorText = document.querySelector('#error-text');
let i = 1;

function filterText(text) {
    if(text) {
        if(text.length > 1) {
            return text;
        } else {
            errorText.innerHTML = 'Type at least one character.';
            return false;
        }
    }
    errorText.innerHTML = 'Input cannot be empty.';
    return false;
}

function showList(input) {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes()  + ':' + today.getSeconds();
    let dateTime = date + ' | ' + time;
    list.innerHTML += 
        `<li class="list-item" id="list${i}">
            <div class="list-item-wrapper">
                <div class="list-text">
                    <span id="list-text${i}">${input}</span>
                    <p id="date-text">${dateTime}</p>
                </div>
                <div id="action-btn">
                    <i class="" onclick="deleteList(${i})">
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </i>
                </div>
            </div>
        </li>`;
    i++;
}

function addList() {
    let inputText = input.value;

    if(filterText(inputText)) {
        showList(filterText(inputText));

        input.value = '';
        errorText.innerHTML = '';
    }
}

function deleteList(id) {
    let deleteList = document.getElementById(`list${id}`);
    list.removeChild(deleteList);
}
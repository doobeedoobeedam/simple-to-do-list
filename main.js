let dateDisplay = document.querySelector('#date');
let dayDisplay = document.querySelector('#day');
let dates = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let year = dates.getFullYear();
let month = dates.getMonth();
let cDate = dates.getDate();
let day = dates.getDay() - 1;

dateDisplay.innerHTML = `${cDate} - ${months[month]}, ${year}`;
dayDisplay.innerHTML = days[day];

let input = document.querySelector('#input');
let lists = document.querySelector('#lists');
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
    lists.innerHTML += 
        `<div class="tasks" id="list${i}">
            <input type="checkbox" id="t${i}">
            <label for="t${i}">${input}</label>
            <div id="action">
                <i class="" onclick="deleteList(${i})">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </i>
            </div>
        </div>`;
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
    lists.removeChild(deleteList);
}
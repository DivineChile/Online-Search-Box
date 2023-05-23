//getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let selectUserData;

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) => {
            // filtering arry value and user char to lowercase and return only those words sent which starts with user entered words
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");

        for(let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else {
        searchWrapper.classList.remove("active");
    }
}

// When user selects an item in the dropdown
function select(element) {
    selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchNow();
    searchWrapper.classList.remove("active");
}

// Function to show suggestions
function showSuggestions(list) {
    let listData;
    let userValue;

    if(!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }
    else {
        listData = list.join("")
    }
    suggBox.innerHTML = listData;

}

// search icon event listener
icon.addEventListener("click", searchNow);

// Search Function
function searchNow() {
    let searchString = selectUserData;

    if(!(inputBox.value == "")) {
        let answer = prompt("Search using Brave or Google?.... \n Enter 'brave' for Brave and 'google' for Google");

        answer = answer.toLowerCase();
        if(answer == "google") {
            window.location.href = `https://www.google.com/search?q=${inputBox.value}&source=hp&ei=wFJaZPqmJYOF8gK-r4CQBw&iflsig=AOEireoAAAAAZFpg0GGCrmukU3ZACQeJokn7gQdMJtTs&oq=how+to+design+form+&gs_lcp=Cgdnd3Mtd2l6EAMYAjIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAguEI8BEOoCOggIABCPARDqAjoKCAAQjwEQ6gIQCjoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgsIABCKBRCxAxCDAToECAAQAzoICC4QigUQsQM6CwguEIAEELEDENQCOgUILhCABDoOCC4QigUQsQMQxwEQ0QM6CAgAEIoFELEDOggILhCABBCxAzoFCCEQoAE6BAghEBU6CAghEBYQHhAdOgYIABAWEB46CAgAEIoFEIYDUPkTWJmDAWCelwFoCXAAeACAAa4CiAHCLJIBCDAuMi4yMi4xmAEAoAEBsAEK&sclient=gws-wiz`;
        }
        else if(answer == "brave") {
            window.location.href = `https://search.brave.com/search?q=${inputBox.value}&source=desktop`;
        }
        else {
            alert("Invalid Answer");
            return;
        }
    }
    else {
        alert("empty field");
    }
}
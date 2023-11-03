/* Getting forms */
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

/* Getting buttons */

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const prev1 = document.getElementById("prev1");
const prev2 = document.getElementById("prev2");

const nextNavigate = (currentForm, nextForm) => {
    currentForm.style.left = "-600px";
    nextForm.style.left = "30px";
};

const prevNavigate = (currentForm, prevForm) => {
    currentForm.style.left = "30px";
    prevForm.style.left = "600px";
};

/* Forms Validation */

let isForm1Valid = false;
let isForm2Valid = false;

next1.onclick = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const errorField = document.getElementById("error");

    if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '') {
        isForm1Valid = true;
        nextNavigate(form1, form2);
        errorField.textContent = "";
    } else {
        errorField.textContent = "Please,fill in the fields above";
    }
};

next2.onclick = () => {
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    const errorField = document.getElementById("error");

    if (checkboxes.length > 0) {
        isForm2Valid = true;
        nextNavigate(form2, form3);
        errorField.textContent = "";
    } else {
        errorField.textContent = "Please, select at least one field";
    }
};

prev1.onclick = () => prevNavigate(form1, form2);
prev2.onclick = () => prevNavigate(form2, form3);

/* Getting fields on summary */

const nameResult = document.getElementById("nameResult");
const emailResult = document.getElementById("emailResult");
const topicsResult = document.getElementById("topicsResult");

/* Catching data to show in summary */

form2.addEventListener("change", e => {
    if (e.target.classList.contains("btn-topic")) {
        updateSummary();
    }
});

function updateSummary() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const topicsChecked = document.querySelectorAll(".btn-topic:checked");

    nameResult.textContent = name;
    emailResult.textContent = email;
    topicsResult.innerHTML = "";

    topicsChecked.forEach(topic => {
        const topicLabel = topic.parentElement.textContent;
        const listItem = document.createElement("li");
        listItem.textContent = topicLabel.trim();
        topicsResult.appendChild(listItem);
    });
}

updateSummary();


/* Checked effect */

const topicsChecked = document.querySelectorAll(".checkbox");
const checkLabel = document.querySelectorAll(".topic");

topicsChecked.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            checkLabel[index].classList.add("checked");
        } else {
            checkLabel[index].classList.remove("checked");
        }
    });
});
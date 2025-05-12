//
const PORT = 8000;
const base_url = `http://127.0.0.1:${PORT}`;

// Important functions
const visibilityMainMenu = (bool) => {
    if (bool === true) {
        menu.style.display = "";
        optionsMenu.hidden = true;
    } else if (bool === false) {
        menu.style.display = "none";
        optionsMenu.hidden = false;
    } else {
        console.error("Insert ONLY BOOLEANS");
    }
};

const registerMember = () => {
    console.log("registerMember clicked");
    alert("registerMember clicked");
    visibilityMainMenu(false);
    registerMemberMenu.hidden = false;
    //
};

const loanBook = () => {
    console.log("loanBook clicked");
    alert("loanBook clicked");
    visibilityMainMenu(false);
    loanBookMenu.hidden = false;
    //
};

const returnBook = () => {
    console.log("returnBook clicked");
    alert("returnBook clicked");
    visibilityMainMenu(false);
    returnBookMenu.hidden = false;
    //
};

const showLoans = () => {
    console.log("showLoans clicked");
    alert("showLoans clicked");
    visibilityMainMenu(false);
    showLoansMenu.hidden = false;
    //
};

const returnMenu = () => {
    console.log("Back to menu");
    alert("Back to menu");
    visibilityMainMenu(true);
    loanBookMenu.hidden = true;
    //
};

// DOM Elements
const menu = document.getElementById("mainMenu");
//
const optionsMenu = document.getElementById("optionsMenu");
//
const registerMemberMenu = document.getElementById("registerMemberMenu");
const loanBookMenu = document.getElementById("loanBookMenu");
const returnBookMenu = document.getElementById("returnBookMenu");
const showLoansMenu = document.getElementById("showLoansMenu");
//
const registerMemberBttn = document.getElementById("registerMemberBttn");
const loanBookBttn = document.getElementById("loanBookBttn");
const returnBookBttn = document.getElementById("returnBookBttn");
const showLoansBttn = document.getElementById("showLoansBttn");
const returnMenuBttns = document.getElementsByClassName("returnToMenuBttn");

// Event Listeners
registerMemberBttn.addEventListener("click", () => registerMember());
loanBookBttn.addEventListener("click", () => loanBook());
returnBookBttn.addEventListener("click", () => returnBook());
showLoansBttn.addEventListener("click", () => showLoans());
returnMenuBttns.addEventListener("click", () => returnMenu());

// Show-Hide DIV's
visibilityMainMenu(true);

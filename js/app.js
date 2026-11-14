// ======================================
// APPLICATION START
// ======================================


document.addEventListener(
"DOMContentLoaded",
()=>{


initialiseLottery();

buildBallMachine();

updateDashboard();

renderManagerEditor();


});

document
.getElementById(
    "inspectButton"
)
.addEventListener(
"click",
()=>{


    inspectMachine();


});

document
.getElementById(
    "saveManagers"
)
.addEventListener(
"click",
()=>{


    saveManagerSettings();


});

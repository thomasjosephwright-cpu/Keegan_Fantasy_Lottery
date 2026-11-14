// ======================================
// APPLICATION START
// ======================================


document.addEventListener(
"DOMContentLoaded",
()=>{


initialiseLottery();

buildBallMachine();

updateDashboard();


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

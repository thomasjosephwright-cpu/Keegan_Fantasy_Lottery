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



    document
    .getElementById(
        "addManager"
    )
    .addEventListener(
    "click",
    ()=>{


        addManager();


    });

    document
.getElementById(
    "drawBall"
)
.addEventListener(
"click",
()=>{


    drawNextBall();


});

});




// ======================================
// REMOVE MANAGER BUTTONS
// ======================================


document
.addEventListener(
"click",
event=>{


    if(
        event.target.classList
        .contains(
            "remove-manager"
        )
    ){

        removeManager(
            event.target.dataset.id
        );

    }


});

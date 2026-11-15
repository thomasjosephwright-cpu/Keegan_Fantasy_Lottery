// ======================================
// LOTTERY STATE
// ======================================


let remainingManagers = [];

let eliminatedManagers = [];

let finalOrder = [];

let lotteryBalls = [];

// ======================================
// APPLICATION STATE
// ======================================

let lotteryState = "idle";


// ======================================
// INITIALISE LOTTERY
// ======================================


function initialiseLottery(){


    remainingManagers =
    managers.map(manager => {


        return {


            ...manager,


            eliminated:false


        };


    });



    eliminatedManagers = [];

    finalOrder = [];



    console.log(
        "Lottery initialised",
        remainingManagers
    );


}

// ======================================
// SET LOTTERY STATE
// ======================================

function setLotteryState(state){

    lotteryState = state;


    const startButton =
    document.getElementById(
        "startButton"
    );

    const drawButton =
    document.getElementById(
        "drawBall"
    );

    const managerSection =
    document.getElementById(
        "managerSection"
    );


    switch(state){

        case "idle":

            startButton.disabled = false;
            startButton.textContent =
            "Start Lottery";

            drawButton.disabled = false;

            managerSection.open = false;

            document
            .getElementById(
                "machineStatus"
            )
            .textContent =
            "READY";

        break;


        case "running":

            startButton.disabled = true;

            drawButton.disabled = true;

            managerSection.open = false;

            document
            .getElementById(
                "machineStatus"
            )
            .textContent =
            "RUNNING";

        break;


        case "complete":

            startButton.disabled = false;

            startButton.textContent =
            "New Lottery";

            drawButton.disabled = false;

            document
            .getElementById(
                "machineStatus"
            )
            .textContent =
            "COMPLETE";

        break;

    }

}

// ======================================
// DELAY
// ======================================

function delay(ms){

    return new Promise(

        resolve =>

        setTimeout(
            resolve,
            ms
        )

    );

}

// ======================================
// RUN AUTOMATIC LOTTERY
// ======================================

async function runAutomaticLottery(){


    while(
        remainingManagers.length > 1
    ){

        drawNextBall();

        await delay(
            2000
        );

    }


}

// ======================================
// START LOTTERY
// ======================================

async function startLottery(){

    initialiseLottery();

    buildBallMachine();

    updateDashboard();

    setLotteryState(
        "running"
    );

    await delay(
        1000
    );

    await runAutomaticLottery();

}

  
// ======================================
// BUILD LOTTERY BALL MACHINE
// ======================================


function buildBallMachine(){


    lotteryBalls = [];



    remainingManagers.forEach(
    manager => {


        for(
            let i = 0;
            i < manager.weight;
            i++
        ){

            lotteryBalls.push({

                managerId:
                manager.id,


                managerName:
                manager.name


            });


        }


    });



    console.log(
        "Lottery machine built",
        lotteryBalls
    );


}

// ======================================
// DRAW NEXT BALL
// ======================================


function drawNextBall(){

  if(lotteryBalls.length === 0){


        console.log(
            "No balls remaining"
        );


        return;


    }



    const randomIndex =

    Math.floor(

        Math.random()
        *
        lotteryBalls.length

    );



    const selectedBall =

    lotteryBalls[randomIndex];



    // Remove selected ball
    lotteryBalls.splice(
        randomIndex,
        1
    );



    console.log(
        "Selected ball",
        selectedBall
    );



    processDraw(
        selectedBall
    );


}

// ======================================
// PROCESS DRAW RESULT
// ======================================


function processDraw(ball){


    const managerId =
    ball.managerId;



    const manager =
    remainingManagers.find(

        m =>
        m.id === managerId

    );



    if(!manager){

        return;

    }



    const result =
    document.getElementById(
        "drawResult"
    );



    if(result){

        result.innerHTML =

        `
        <strong>
        Eliminated:
        </strong>

        ${manager.name}

        `;

    }



   eliminateManager(
    managerId
);


// Check if lottery is complete

if(
    remainingManagers.length === 1
){

    completeLottery();

}


updateDashboard();


}

// ======================================
// ELIMINATE MANAGER
// ======================================


function eliminateManager(id){


    const eliminated =

    remainingManagers.find(

        manager =>
        manager.id === id

    );



    if(!eliminated){

        return;

    }



    eliminatedManagers.push(
    {
        ...eliminated,
        eliminatedAt:
        eliminatedManagers.length + 1
    }
);



    remainingManagers =

    remainingManagers.filter(

        manager =>
        manager.id !== id

    );



    // Remove all remaining balls
    lotteryBalls =

    lotteryBalls.filter(

        ball =>
        ball.managerId !== id

    );

    const results =
    document.getElementById(
        "resultsPanel"
    );



if(results){


    if(
        eliminatedManagers.length === 1
    ){

        results.innerHTML = "";

    }



    results.innerHTML +=

    `

    <p>

    Draw ${eliminatedManagers.length}

    <br>

    Eliminated:

    <strong>
    ${eliminated.name}
    </strong>

    </p>

    `;


}



}

// ======================================
// COMPLETE LOTTERY
// ======================================


function completeLottery(){


    finalOrder =

    [
        ...remainingManagers,
        ...[...eliminatedManagers]
        .reverse()
    ];



    renderFinalOrder();

setLotteryState(
    "complete"
);


document
.getElementById(
    "drawBall"
)
.disabled = true;


document
.getElementById(
    "startButton"
)
.disabled = false;

    const result =
    document.getElementById(
        "resultsPanel"
    );


    if(result){

        result.innerHTML +=

        `

        <hr>

        <p>

        <strong>
        Lottery Complete
        </strong>

        </p>

        `;

    }


}

// ======================================
// DISPLAY FINAL ORDER
// ======================================


function renderFinalOrder(){


    const container =
    document.getElementById(
        "draftPanel"
    );


    if(!container){

        return;

    }



    let html = "<ol>";



    finalOrder.forEach(
    manager => {


       html +=

`
<li>

<strong>
Pick ${finalOrder.indexOf(manager) + 1}
</strong>

-
${manager.name}

</li>

`;


    });



    html += "</ol>";



    container.innerHTML =
    html;


}

// ======================================
// LOTTERY STATE
// ======================================


let remainingManagers = [];

let eliminatedManagers = [];

let finalOrder = [];

let lotteryBalls = [];


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

    buildBallMachine();

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
        eliminated
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

document
.getElementById(
    "machineDisplay"
)
.innerHTML =

`
Balls remaining:
${lotteryBalls.length}
`;

    const results =
    document.getElementById(
        "resultsPanel"
    );



    if(results){

        results.innerHTML +=

        `

        <p>

        Eliminated:

        <strong>
        ${eliminated.name}
        </strong>

        </p>

        `;

    }



}

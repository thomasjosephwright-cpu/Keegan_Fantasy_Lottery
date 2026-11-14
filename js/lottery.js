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


    const managerName =
    ball.managerName;



    const result =
    document.getElementById(
        "drawResult"
    );


    if(result){

        result.innerHTML =

        `
        <strong>
        Drawn Ball:
        </strong>

        ${managerName}

        `;

    }



    const managerId =
    ball.managerId;



    const remainingBalls =

    lotteryBalls.filter(

        item =>
        item.managerId === managerId

    );



    if(
        remainingBalls.length === 0
    ){


        eliminateManager(
            managerId
        );


        if(result){

            result.innerHTML =

            `
            <strong>
            Eliminated:
            </strong>

            ${managerName}

            `;

        }


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
        eliminated
    );



    remainingManagers =

    remainingManagers.filter(

        manager =>
        manager.id !== id

    );



    console.log(
        "Eliminated:",
        eliminated.name
    );


}

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



    console.log(
        "Selected ball",
        selectedBall
    );


}

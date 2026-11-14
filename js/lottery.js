// ======================================
// LOTTERY STATE
// ======================================


let remainingManagers = [];

let eliminatedManagers = [];

let finalOrder = [];

let lotteryballs = [];


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


    lotteryballs = [];



    remainingManagers.forEach(
    manager => {


        for(
            let i = 0;
            i < manager.weight;
            i++
        ){

            lotteryballs.push({

                managerId:
                manager.id,


                managerName:
                manager.name


            });


        }


    });



    console.log(
        "Lottery machine built",
        lotteryballs
    );


}

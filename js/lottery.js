// ======================================
// LOTTERY STATE
// ======================================


let remainingManagers = [];

let eliminatedManagers = [];

let finalOrder = [];




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

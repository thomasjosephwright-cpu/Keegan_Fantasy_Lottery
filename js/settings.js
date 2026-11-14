// ======================================
// LOTTERY SETTINGS
// ======================================


// Managers participating in the lottery
//
// balls = number of elimination balls
//
// More balls = greater chance of early elimination
//
// Change these values to adjust odds


// ======================================
// MANAGER DATA
// ======================================


let managers = [

    {
        id: generateId(),
        name:"Manager 1",
        weight:12
    },

    {
        id: generateId(),
        name:"Manager 2",
        weight:8
    },

    {
        id: generateId(),
        name:"Manager 3",
        weight:6
    },

    {
        id: generateId(),
        name:"Manager 4",
        weight:4
    },

    {
        id: generateId(),
        name:"Manager 5",
        weight:2
    },

    {
        id: generateId(),
        name:"Manager 6",
        weight:1
    }

];


// ======================================
// ID GENERATOR
// ======================================


function generateId(){

    return (
        "manager_" +
        Date.now() +
        "_" +
        Math.floor(
            Math.random()*1000
        )
    );

}




// ======================================
// LOTTERY CONFIGURATION
// ======================================


const lotterySettings = {


    title:
    "Keegan Fantasy Draft Lottery",


    animationSpeed:
    1500,


    simulationRuns:
    10000


};

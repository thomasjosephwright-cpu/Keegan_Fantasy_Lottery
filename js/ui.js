// ======================================
// UI DISPLAY FUNCTIONS
// ======================================



function updateDashboard(){


    renderOdds();

    renderRemaining();

    renderFinalOrder();


}





// ======================================
// ODDS PANEL
// ======================================


function renderOdds(){


    const container =
    document.getElementById(
        "oddsPanel"
    );



    if(!remainingManagers.length){


        container.innerHTML =
        "No managers remaining.";


        return;


    }




    const totalWeight =
    remainingManagers.reduce(

        (total,manager)=>

        total + manager.weight,

        0

    );




    let html = "";




    remainingManagers.forEach(
    manager => {


        const probability =

        (
            manager.weight /
            totalWeight *
            100
        )
        .toFixed(1);



        html += `


        <div class="odds-entry">


            <div class="odds-header">


                <span>
                ${manager.name}
                </span>


                <span>
                ${manager.weight} weight
                |
                ${probability}%
                </span>


            </div>



            <div class="bar">


                <div 
                class="fill"
                style="
                width:${probability}%
                ">
                </div>


            </div>


        </div>


        `;



    });



    container.innerHTML =
    html;



}




// ======================================
// REMAINING MANAGERS
// ======================================



function renderRemaining(){



    const container =
    document.getElementById(
        "remainingPanel"
    );




    if(!remainingManagers.length){


        container.innerHTML =
        "No managers remaining.";


        return;


    }





    let html = "<ul>";



    remainingManagers.forEach(
    manager => {


        html += `

        <li>

        ${manager.name}

        </li>

        `;


    });



    html += "</ul>";



    container.innerHTML =
    html;



}

// ======================================
// FINAL DRAFT ORDER
// ======================================


function renderFinalOrder(){


    const container =
    document.getElementById(
        "draftPanel"
    );


    if(!container){

        return;

    }


    if(!finalOrder.length){

        container.innerHTML =
        "Awaiting lottery.";

        return;

    }



    let html = "<ol>";



    finalOrder.forEach(
    manager => {


        html +=

        `

        <li>

        ${manager.name}

        </li>

        `;


    });



    html += "</ol>";


    container.innerHTML =
    html;


}

    
// ======================================
// INSPECT LOTTERY MACHINE
// ======================================


function inspectMachine(){


    console.log(
        lotteryBalls
    );


    alert(

        "Lottery machine contains "
        +
        lotteryBalls.length
        +
        " balls."

    );


}

// ======================================
// MANAGER EDITOR
// ======================================


function renderManagerEditor(){


    const container =
    document.getElementById(
        "managerEditor"
    );


    let html = "";



    managers.forEach(
    manager => {


        html += `


        <div class="manager-row">


            <input

            class="manager-name"

            data-id="${manager.id}"

            value="${manager.name}"

            >



            <input

            class="manager-weight"

            type="number"

            min="1"

            data-id="${manager.id}"

            value="${manager.weight}"

            >



            <button

            class="remove-manager"

            data-id="${manager.id}"

            >

            Remove

            </button>



        </div>


        `;


    });



    container.innerHTML =
    html;



}

function saveManagerSettings(){


    const names =
    document.querySelectorAll(
        ".manager-name"
    );


    const weights =
    document.querySelectorAll(
        ".manager-weight"
    );



    names.forEach(
    input => {


        const manager =
        managers.find(
            m =>
            m.id ==
            input.dataset.id
        );


        manager.name =
        input.value;


    });



    weights.forEach(
    input => {


        const manager =
        managers.find(
            m =>
            m.id ==
            input.dataset.id
        );


        manager.weight =
Math.max(
    1,
    Number(
        input.value
    )
);


    });



    initialiseLottery();

    buildBallMachine();

    updateDashboard();

    renderManagerEditor();



}

// ======================================
// ADD MANAGER
// ======================================


function addManager(){


    managers.push({

        id:
        generateId(),

        name:
        "New Manager",

        weight:
        1

    });


    renderManagerEditor();


}

// ======================================
// REMOVE MANAGER
// ======================================


function removeManager(id){


    if(managers.length <= 1){

        alert(
            "You must have at least one manager."
        );

        return;

    }



    managers =
    managers.filter(

        manager =>
        manager.id !== id

    );


    renderManagerEditor();


}

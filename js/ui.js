// ======================================
// UI DISPLAY FUNCTIONS
// ======================================



function updateDashboard(){


    renderOdds();

    renderRemaining();


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




    const totalweight =
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
// INSPECT LOTTERY MACHINE
// ======================================


function inspectMachine(){


    console.log(
        lotteryweight
    );


    alert(

        "Lottery machine contains "
        +
        lotteryweight.length
        +
        " weight."

    );


}

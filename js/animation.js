// ======================================
// LOTTERY MACHINE ANIMATION
// ======================================


let animationRunning = false;



function startMachineAnimation(){


    animationRunning = true;


    animateMachine();


}




function stopMachineAnimation(){


    animationRunning = false;


}




// ======================================
// ANIMATE MACHINE
// ======================================


function animateMachine(){


    if(!animationRunning){

        return;

    }



    const width = 650;

    const height = 300;

    const radius = 15;



    lotteryBalls.forEach(ball=>{


        // Move ball

        ball.x += ball.vx;

        ball.y += ball.vy;



        // Bounce off sides

        if(
            ball.x < radius ||
            ball.x > width - radius
        ){

            ball.vx *= -1;

        }



        // Bounce off top and bottom

        if(
            ball.y < radius ||
            ball.y > height - radius
        ){

            ball.vy *= -1;

        }



        // Keep ball inside machine

        ball.x = Math.max(
            radius,
            Math.min(
                width - radius,
                ball.x
            )
        );


        ball.y = Math.max(
            radius,
            Math.min(
                height - radius,
                ball.y
            )
        );


    });



    renderMachineBalls();



    requestAnimationFrame(
        animateMachine
    );


}




// ======================================
// DRAW BALLS ON SCREEN
// ======================================


function renderMachineBalls(){


    const container =
    document.getElementById(
        "machineBalls"
    );



    if(!container){

        return;

    }



    container.innerHTML = "";



    lotteryBalls.forEach(ball=>{


        const element =
        document.createElement(
            "div"
        );



        element.className =
        "lottery-ball";



        element.style.background =
        ball.color;



        element.style.left =
        ball.x + "px";



        element.style.top =
        ball.y + "px";



        container.appendChild(
            element
        );


    });


}

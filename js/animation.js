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




function animateMachine(){


    if(!animationRunning){

        return;

    }


    lotteryBalls.forEach(ball=>{


        ball.x += ball.vx;

        ball.y += ball.vy;



        if(ball.x < 15 || ball.x > 585){

            ball.vx *= -1;

        }


        if(ball.y < 15 || ball.y > 285){

            ball.vy *= -1;

        }


    });



    renderMachineBalls();



    requestAnimationFrame(
        animateMachine
    );


}

function renderMachineBalls(){


    const container =
    document.getElementById(
        "machineBalls"
    );


    if(!container){

        return;

    }


    container.innerHTML="";



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

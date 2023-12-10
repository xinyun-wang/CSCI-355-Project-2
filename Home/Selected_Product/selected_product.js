document.addEventListener('DOMContentLoaded', function() {
    var speed = 10; // Initial speed in seconds

    function updateSpeed() {
        document.getElementById('scrollingText').style.animation = 'scrollText ' + speed + 's linear infinite';
    }

    document.getElementById('increaseSpeed').addEventListener('click', function() {
        speed = Math.max(1, speed - 1); // Decrease speed duration by 1, minimum 1
        updateSpeed();
    });

    document.getElementById('decreaseSpeed').addEventListener('click', function() {
        speed += 1; // Increase speed duration by 1
        updateSpeed();
    });
});



function changeColor() {
    document.getElementById("shop").onmouseover = function() {document.getElementById("down").style.color = "#E71939";}
    document.getElementById("shop").onmouseout = function() {document.getElementById("down").style.color = "black";}
}

function changeColorCart() {
    document.getElementById("cart").onmouseover = function() {document.getElementById("cart").style.color = "#E71939";}
    document.getElementById("cart").onmouseout = function() {document.getElementById("cart").style.color = "black";}
}

window.onload=function(){
    const search = document.querySelector('.search')
    const btn = document.querySelector('.btn')
    const input = document.querySelector('.input')

    btn.addEventListener('click', () => {
        search.classList.toggle('active')
        input.focus()
    })
}


function dropdown() {
    document.getElementById("myDropdown").className = "dropdown-content show";
}

window.onclick = function(event) {
    if (!event.target.matches('#shop')) {

        var sharedowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < sharedowns.length; i++) {
            var openSharedown = sharedowns[i];
            if (openSharedown.classList.contains('show')) {
                openSharedown.classList.remove('show');
            }
        }
    }
}

document.getElementById("myDropdown").addEventListener('click',function(event){
    event.stopPropagation();
});




function dropdown2() {
    document.getElementById("myDropdown2").className = "dropdown-content2 show";
    document.getElementById("side").style.border = "2px solid var(--qc-red)";
}

window.onclick = function(event) {
    if (!event.target.matches('#title')) {

        var sharedowns = document.getElementsByClassName("dropdown-content2");
        // document.getElementById("myDropdown2").className = "dropdown-content2";
        var i;
        for (i = 0; i < sharedowns.length; i++) {
            var openSharedown = sharedowns[i];
            if (openSharedown.classList.contains('show')) {
                openSharedown.classList.remove('show');
            }
        }
    }
}


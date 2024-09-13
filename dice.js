let images = [
    'dice-1.png',
    'dice-2.png',
    'dice-3.png',
    'dice-4.png',
    'dice-5.png',
    'dice-6.png'];

    let dice = document.querySelectorAll("img");

    function roll(){
        dice.forEach(function(die){
            die.style.display = "block";
            die.classList.add("shake");
        });

        setTimeout(function(){
            dice.forEach(function(die){
                die.classList.remove("shake");
            });


            let dieOneValue = Math.floor(Math.random()*6);
            let dieTwoValue = Math.floor(Math.random()*6);

            console.log((dieOneValue +1), (dieTwoValue +1));

            document.querySelector("#die-1").setAttribute("src", "/images/" + images[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src", "/images/" + images[dieTwoValue]);
            document.querySelector("#total").innerHTML = " your roll is " + ( (dieOneValue +1) + (dieTwoValue +1) );

        },
        1000
    );
    
    }

   
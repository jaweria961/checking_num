
let first = parseInt(Math.random()*10);
let second = parseInt(Math.random()*10);

let total =first + second;


let numb1 = document.getElementById("primary-number");


numb1.innerHTML = `<p>${first}</p>`;

let numb2 = document.getElementById("secondary-number");


numb2.innerHTML = `<p>${second}</p>`;

let btn = document.getElementById("btn");

btn.addEventListener('click',function(){

    let guess = document.getElementById("guess").value;

    guess = Number(guess);

    if(guess === total)
    {
        alert("Correct Answer")
        window.location.reload();
    }
    else
    {
        alert("Wrong Answer")
        window.location.reload();
    }
})
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let result = document.querySelector(".result");

let boxes = document.querySelectorAll(".row");

let count=0;

let winComb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let turnO = true;

const disableboxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const resetf = () => {
    enableboxes();
    turnO = true;
    count=0;
    winner.innerHTML = "";
}

let draw=()=>{
    result.innerHTML="Match drawn";
    result.classList.replace("bg-green-800","bg-yellow-500");
    result.classList.replace("text-white","text-red-500");
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let win=checkwinner();
        if(count===9 && !win){
            draw();
        }
    })
});

const checkwinner = () => {
    for (const combination of winComb) {
        let val1 = boxes[combination[0]].innerHTML;
        let val2 = boxes[combination[1]].innerHTML;
        let val3 = boxes[combination[2]].innerHTML;
        if (val1 != "", val2 != "", val3 != "") {
            if (val1 === val2 && val2 === val3) {
                winner.innerHTML = `winner : ${val1}`;
                disableboxes();
                return true;
            }
        }
    }
}

reset.addEventListener("click", resetf);


// let reset = document.querySelector(".reset");
// let winner = document.querySelector(".winner");
// let result = document.querySelector(".result");

// let boxes = document.querySelectorAll(".row");

// let count = 0;

// let winComb = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ]

// let turnO = true;

// const disableboxes = () => {
//     for (const box of boxes) {
//         box.disabled = true;
//     }
// }
// const enableboxes = () => {
//     for (const box of boxes) {
//         box.disabled = false;
//         box.innerHTML = "";
//     }
// }

// const resetf = () => {
//     enableboxes();
//     turnO = true;
//     count = 0;
//     winner.innerHTML = "";
//     result.innerHTML = "";
//     result.classList.remove("bg-yellow-500", "text-red-500");
//     result.classList.add("bg-green-800", "text-white");
// }

// const draw = () => {
//     result.innerHTML = "Match drawn";
//     result.classList.replace("bg-green-800", "bg-yellow-500");
//     result.classList.replace("text-white", "text-red-500");
// }

// boxes.forEach(box => {
//     box.addEventListener("click", () => {
//         if (turnO) {
//             box.innerHTML = "O";
//             turnO = false;
//         } else {
//             box.innerHTML = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         count++;
//         let win = checkwinner();
//         if (count === 9 && !win) {
//             draw();
//         }
//     })
// });

// const checkwinner = () => {
//     for (const combination of winComb) {
//         let val1 = boxes[combination[0]].innerHTML;
//         let val2 = boxes[combination[1]].innerHTML;
//         let val3 = boxes[combination[2]].innerHTML;
//         if (val1 !== "" && val2 !== "" && val3 !== "") {
//             if (val1 === val2 && val2 === val3) {
//                 winner.innerHTML = "Winner: " + val1;
//                 disableboxes();
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// reset.addEventListener("click", resetf);

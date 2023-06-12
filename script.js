const arr = [];

const btn = document.getElementById("enterButton");
const clr = document.getElementById("clr");
btn.addEventListener('click', sketchStructure);
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', clear);
document.getElementById("input").addEventListener('change', function(){
    document.getElementById("rangeValue").innerText=input.value;
});

function Sketch() {
    const l = Number(input.value);
    console.log(typeof l);
    console.log(l);
    const bx = 700 / l;
    console.log(bx);
    const size = l * l;
    for (let i = 0; i < size; i++) {
        arr[i] = document.createElement("div");
        arr[i].id = `arr${i}`;
        arr[i].classList.add('boxClass');
        arr[i].style.height = `${bx}px`;
        arr[i].style.width = `${bx}px`;

        console.log(arr[i].style.height);

        const t = document.getElementById("mainBoard");
        t.appendChild(arr[i]);

       const k= document.getElementById(`arr${i}`);
            k.addEventListener('mouseover', function () {
                k.style.backgroundColor = clr.value;
            });
    }
}
function sketchStructure() {
    document.getElementById("mainBoard").innerHTML = "";
    Sketch();
}

function clear() {
    const l = Number(input.value);
    const size = l * l;
    for (let i = 0; i < size; i++) {
        document.getElementById(`arr${i}`).style.backgroundColor = "white";
    }
}

function clear2() {
    const l = Number(input.value);
    const size = l * l;
    for (let i = 0; i < size; i++) {
        document.getElementById(`arr${i}`).remove;
    }
}
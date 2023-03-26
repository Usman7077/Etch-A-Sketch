// const first = document.createElement("div");
// first.id = "first"
// first.classList.add('firstDiv');
// const s = document.getElementById("mainBoard");
// s.appendChild(first);

const arr = [];
const l = prompt();
const bx = 800/l;
const size = l * l;

for (let i = 0; i < size; i++) {
    arr[i] = document.createElement("div");
    arr[i].id = `arr${i}`;
    arr[i].classList.add('boxClass');
    const t = document.getElementById("mainBoard");
    t.appendChild(arr[i]);

    document.getElementById(`arr${i}`)
        .addEventListener('mouseover', function (e) {
            console.log(e.target.id);
            const y = e.target.id;
            const k = document.getElementById(y);
            k.style.backgroundColor = "blue";
        });
}

// const x = document.getElementById('first');
// x.addEventListener('mouseover', function (e) {
//     console.log(e.target.id);
//     const y = e.target.id;
//     const k = document.getElementById(y);
//     k.style.backgroundColor = "blue";
// });

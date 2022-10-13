const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'red';
});


const d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;
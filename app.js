var i = 1

var button = document.getElementById('theBoxes');


button.addEventListener('click', myfunction);


function myfunction() {
    var oldValue = 0
    let n = document.getElementById('number').value;
    console.log(n)
    n = parseInt(oldValue) + parseInt(n)
    console.log(oldValue)

    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;
        var oldValue = document.getElementById('box').lastElementChild.innerHTML;
    }
}
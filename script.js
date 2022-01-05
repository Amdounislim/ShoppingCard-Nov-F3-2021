let hearts = Array.from(document.getElementsByClassName('fa-heart'))

// for(let i=0; i<hearts.length; i++){
//     hearts[i].addEventListener("click", function(){
//         // if (hearts[i].style.color === "red") {
//         //     hearts[i].style.color = "gray"
//         // } else {
//         //     hearts[i].style.color = "red"
//         // }
//         hearts[i].classList.toggle("myClass")
//     })
// }

for (let heart of hearts) {
    heart.addEventListener("click", function () {
        // if (heart.style.color === "red") {
        //     heart.style.color = "gray"
        // } else {
        //     heart.style.color = "red"
        // }
        heart.classList.toggle("myClass")
    })
}

let trash = Array.from(document.querySelectorAll('.fa-trash-alt'))
let row = Array.from(document.querySelectorAll('.row'))

// for (let i = 0; i < trash.length; i++) {
//     trash[i].addEventListener('click', function(){
//         // row[i].remove()
//         trash[i].parentNode.remove()
//     })
// }

for(let del of trash){
    del.addEventListener('click', function(){
        del.parentElement.remove()
        sum()
    })
}

let adds = Array.from(document.getElementsByClassName('add'))
for(let btn of adds){
    btn.addEventListener('click', function(){
        btn.nextElementSibling.innerHTML++
        sum()
    })
}

let minus = Array.from(document.getElementsByClassName('minus'))
let qte = Array.from(document.getElementsByClassName('qte'))

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function(){
        if (qte[i].innerHTML>0) {
            // minus[i].previousElementSibling.innerHTML--
            qte[i].innerHTML--
            sum()
        }
    })
}

function sum(){
    let qte = Array.from(document.getElementsByClassName('qte'))
    let price = Array.from(document.getElementsByClassName('price'))
    let s = 0;
    for (let i = 0; i < price.length; i++) {
        s+= price[i].innerHTML * qte[i].innerHTML
    }
    return document.getElementById('totalp').innerHTML = "Shopping Bag total : $ " + s
}



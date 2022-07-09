let cards = document.querySelectorAll(".card")
let card =  document.querySelectorAll(".front")
let cardBack =  document.querySelectorAll(".back")
let counter = document.querySelector(".counter")
let arrCompare = []
let arrid = []
let arrEle = []
for(let i = 0; i < cards.length; i++){
    card[i].addEventListener("click",() =>{
        cards[i].style.transform = "rotateY(180deg)"
        arrCompare.push(cardBack[i].style.backgroundImage)
        arrid.push(cards[i].id)
        arrEle.push(cards[i])
        if(arrCompare.length === 2){
            setTimeout(() => {
                if(arrCompare[0] !== arrCompare[1] || arrid[0] === arrid[1]){
                    for(let k = 0;k < 2 ; k++){
                            arrEle[k].style.transform = "rotateY(0deg)"
                    }
                    arrEle.splice(0,2)
                    arrCompare.splice(0,2)
                    arrid.splice(0,2)
                }else{
                    counter.innerHTML = parseInt(counter.innerHTML) + 1;
                    arrCompare.splice(0,2)
                    arrid.splice(0,2)
                    arrEle.splice(0,2)
                }
                if(parseInt(counter.innerHTML) >= 6){
                    let win = document.querySelector(".win")
                    win.innerHTML = "Congratulation!!"
                    win.style.animation = "text 1s linear 1"
                    setTimeout(() => {
                        window.location.reload()
                    },3000)
                }
            },1000)
        }
    })
}
let arr = ["1","2","3","4","5","6"]
let arr1 = []
let btn = document.querySelector("button")
btn.onclick = () => {
    start();
    setTimeout(() => {
        for(let i = 0; i < cards.length; i++){
            cards[i].style.transform = "rotateY(0deg)"
        }
    },1000)
}
function start(){
        for(let i = 0; i < 6; i++){
            let random = Math.floor(Math.random() * arr.length)
            cardBack[i].style.backgroundImage = `url(./image/${arr[random]}.png)`
            arr1.push(arr.splice(random ,1))
        }
        for(let i = 6; i < 12; i++){
            let random = Math.floor(Math.random() * arr1.length)
            cardBack[i].style.backgroundImage = `url(./image/${arr1[random]}.png)`
            arr1.splice(random ,1)
        }
    } 
document.onkeyup = (e) => {
    if(e.key === "Escape"){
        window.location.reload();
    }
}

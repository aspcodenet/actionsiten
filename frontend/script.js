// import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";
// const socket = io("http://localhost:3000");

const gallery = document.getElementById('productgallery')
const selectedCarName = document.getElementById('selectedCarName')
const selectedCarImg = document.getElementById('selectedCarImg')
const contact = document.getElementById('contact')
const buttonBid =  document.getElementById('buttonBid')
const bids =  document.getElementById('bids')

const name =  document.getElementById('name')
const amount =  document.getElementById('amount')

let currentCar = null



function updateCars(){
    cars.forEach(c=>{
        const div = document.createElement('div')
        div.classList.add('productcard')

        const img = document.createElement('img')
        img.src = c.img
        div.appendChild(img)

        const divInformation = document.createElement('div')
        divInformation.classList.add('information')

        const divName = document.createElement('div')
        divName.classList.add('name')
        divName.innerText = c.name
        divInformation.appendChild(divName)


        const divDescription = document.createElement('div')
        divDescription.classList.add('description')
        divDescription.innerText = c.year
        divInformation.appendChild(divDescription)



        const button = document.createElement('a')
        button.classList.add('ctabutton')
        button.innerText = "AUKTION"
        divInformation.appendChild(button)

        button.addEventListener("click",()=>{
            showCar(c)
        })


        div.appendChild(divInformation)

        console.log(div)
        gallery.appendChild(div)

    });
}


function refreshBids(){
    bids.innerHTML = ''
    currentCar.bids.forEach(bid => {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        td1.innerText = bid.name
        td2.innerText = bid.amount
        tr.appendChild(td1)
        tr.appendChild(td2)
        bids.appendChild(tr)
    });
}


function showCar(car){
    currentCar = car
    contact.style.display = "block"
    selectedCarName.innerText = car.name
    selectedCarImg.src = car.img
    selectedCarName.scrollIntoView();
    refreshBids()
}





buttonBid.addEventListener("click",(ev)=>{
    ev.preventDefault()
    // socket.emit("placebid", { auctionId:currentCar.id,
    //                                          amount: Number(amount.value),
    //                                          name:   name.value 
    // });
})

let cars = await (await fetch('http://localhost:3000/api/auctions')).json()
updateCars()

// socket.on("newbid", auction => {
//     cars.forEach((car, i) => { if (car.id == auction.id) cars[i] = car; });
//     if(currentCar.id == auction.id){
//         currentCar = auction
//     }
//     refreshBids()
//   });



// socket.on("allAuctions", auctions => {
//     cars = auctions
//     updateCars()
//   });



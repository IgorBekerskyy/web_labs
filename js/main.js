//let a = 'a';
//console.log(a);

const planeList = document.getElementById('plane__list');
const inputPlane = document.getElementById('header__input');
const clearButton = document.getElementById('clear__btn');

let planes = [
    {
        id: 1,
        imageSrc: "images/plane.jpg",
        title: "Mriya",
        volume: 140,
        priceInUSD: 8000000,
        number_of_passengers: 300,
        spare_engine: true
        
    },
    {
        id: 2,
        imageSrc: "images/plane.jpg",
        title: "Boeing",
        volume: 180,
        priceInUSD: 13000000,
        number_of_passengers: 450,
        spare_engine: true
    },
    {
        id: 3,
        imageSrc: "images/plane.jpg",
        title: "Ruslan",
        volume: 130,
        priceInUSD: 7000000,
        number_of_passengers: 250,
        spare_engine: false
    },
    {
        id: 4,
        imageSrc: "images/plane.jpg",
        title: "Galaxy",
        volume: 200,
        priceInUSD: 17000000,
        number_of_passengers: 360,
        spare_engine: true
    },
    {
        id: 5,
        imageSrc: "images/plane.jpg",
        title: "Hughes",
        volume: 190,
        priceInUSD: 23000000,
        number_of_passengers: 260,
        spare_engine: false
    } , 

    {
        id: 6,
        imageSrc: "images/plane.jpg",
        title: "AH-228",
        volume: 170,
        priceInUSD: 9000000,
        number_of_passengers: 280,
        spare_engine: false
    }  
]

let shownPlanes = planes;

function getPlaneItem (imageSrc, title, volume, priceInUSD, number_of_passengers,spare_engine) {
	if (spare_engine){
        return `
        <li class="plane__item">
            <div class="item__img__wrap">
                <img src="${imageSrc}" alt="plane image" class="plane__img">
            </div>llin
            <h3 class="plane__item__title">${title}</h3>
            <p class="plane__item__paragraph">Volume: ${volume} m^2</p>
            <p class="plane__item__paragraph">Price: ${priceInUSD} USD</p>
            <p class="plane__item__paragraph">Number_Of_Passengers: ${number_of_passengers}</p>
            <p class="plane__item__paragraph">Has spare engine</p>
            <div class= "control__buttons">
                <button class="item__btn edit__btn" id="edit__btn">Edit</button>
                <button class="item__btn delete__btn" id="delete__btn">Delete</button>
            </div>
        </li>
        ` 
    } else {
    	return `
        <li class="plane__item">
            <div class="item__img__wrap">
                <img src="images/plane.jpg" alt="plane image" class="plane__img">
            </div>
            <h3 class="plane__item__title">${title}</h3>
            <p class="plane__item__paragraph">Volume: ${volume} m^2</p>
            <p class="plane__item__paragraph">Price: ${priceInUSD} USD</p>
            <p class="plane__item__paragraph">Number_Of_Passengers: ${number_of_passengers}</p>
            <p class="plane__item__paragraph">Has  spare engine</p>
            <div class= "control__buttons">
                <button class="item__btn edit__btn" id="edit__btn">Edit</button>
                <button class="item__btn delete__btn" id="delete__btn">Delete</button>
            </div>
        </li>
        ` 
    } 
}

//display items
const displayPlanes = (planes) => {
    const displayItems = planes.map((plane)=>{
    	return getPlaneItem(plane.imageSrc, plane.title, plane.volume, plane.priceInUSD, plane.number_of_passengers,  plane.swimmingPool)
    }).join('');

    planeList.innerHTML = displayItems;
}

//sort
function showPlaneListSorted(){
    let sortType = document.getElementById('sort__select').value;
    if (sortType == 'none'){
        displayPlanes(shownPlanes);
        return;
    } else if (sortType == 'name'){
        shownPlanes.sort(nameComparator);
    } else if (sortType == 'volume'){
        shownPlanes.sort(areaComparator);
    } else if (sortType == 'price'){
        shownPlanes.sort(priceComparator);
    } else if (sortType == 'number_of_passengers'){
        shownPlanes.sort(floorsComparator);
    } else if (sortType == 'spare_engine'){
        shownPlanes.sort(poolComparator);
    }
    displayPlanes(shownPlanes);
}

// comparators
function nameComparator(planeFirst, planeSecond){
    let planeNameFirst = planeFirst.title.toLowerCase();
    let planeNameSecond = planeSecond.title.toLowerCase();
    if (planeNameFirst < planeNameSecond) {
        return -1;
    }
    if (planeNameFirst > planeNameSecond) {
        return 1;
    }
    return 0;
}

function areaComparator(planeFirst, planeSecond){
	return planeFirst.volume - planeSecond.volume;
}

function priceComparator(planeFirst, planeSecond){
	return planeFirst.priceInUSD - planeSecond.priceInUSD;
}

function floorsComparator(planeFirst, planeSecond){
	return planeFirst.number_of_passengers - planeSecond.number_of_passengers;
}

function poolComparator(planeFirst, planeSecond){
	return planeFirst.spare_engine - planeSecond.spare_engine;
}

//write input
inputPlane.addEventListener('keyup', (searchedString) => {
    const findFilterString = searchedString.target.value.toLowerCase();
    const findPlanesByTitle = planes.filter(plane =>{
        return plane.title.toLowerCase().includes(findFilterString);
    });
    shownPlanes = findPlanesByTitle;
    showPlaneListSorted();
})

//clear input
clearButton.addEventListener('click', ()=> {
    inputPlane.value = '';
    shownPlanes = planes;
    showPlaneListSorted();
})

//count total price
function countTotalPrice(){
    let sum = 0;
    let totalPrice = document.getElementById('total__price');
    shownPlanes.forEach(plane => sum += plane.priceInUSD);
    totalPrice.textContent = 'Total price: ' + sum +' USD';
}

displayPlanes(shownPlanes)
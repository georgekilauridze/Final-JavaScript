
let navigationItem = document.getElementById('links');
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    navigationItem.classList.toggle('activeNavigation');
})


let data = [
    {
       id: 1,
       imageUrl: 'https://travelbrandindia.com/wp-content/uploads/2017/12/north-india-tour-packages-with-prices-1024x614.jpg' ,
       title: 'Asia',
       url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/6217bb8b43e55d270411f49c/89942177-e25f-425f-a3d6-ef17704fa435/should-you-join.jpg' ,
        title: 'The Bahamas',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'https://www.southamerica.travel/wp-content/uploads/2021/03/south-america-travel-tours-l312a.jpg' ,
        title: 'South America',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'https://mexicanroutes.com/wp-content/uploads/2019/03/MexicanRoutes-MexicoTrip.jpg' ,
        title: 'Mexico',
        url: 'https://google.com'
    }

]


let sliderIndex = 0;


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


function createAtag(item) {
 
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('slide');

    return tag;
}


function createImgTag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');

    return tagImage;
}


function createH2tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.append(item.title);
    tagTitle.classList.add('image-title');

    return tagTitle;
}


function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dot);
    });

    console.log(dots);

    return dots;
}


function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let dots = createDots();


    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

 
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}


function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}


function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    // sliderIndex +=1;
    setSlide();
}


arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);


setSlide();

let filter = document.getElementById('filter');
let result = document.getElementById('result');
let listItems = [];

function getUsers() {
    fetch('https://www.worldometers.info/geography/alphabetical-list-of-countries/', {
        method: 'GET',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        responseData.data.forEach(element => {
            let span = document.createElement('span');
           
        });
    })
    .catch(function(error) {
        console.log(error);
    })
}

getUsers();

function filterData(searchItem) {
    listItems.forEach( (item) => {
       if (item.innerText.toLowerCase().includes(searchItem.toLowerCase() )) {
            item.classList.remove('hide');
       } else {
           item.classList.add('hide');
       }
    })
}

filter.addEventListener('input', function(event) {
    console.log(event);
    filterData(event.target.value)
});
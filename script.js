const imageContaineer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray =[];
//Unsplash API
const count =10;
const apiKey='cJ17g6FusoadeKTjXG_Ew66pAVgQl1eSpzk-6FxlmM4';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes){
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//Create Elements For Links & Photos
function displayPhotos() {
    photosArray.forEach(photo => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item,{
            href: photo.links.html,
            target:'_blank'
        })
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        //Put <img> inside <a>, then put both inside image Container Element
        item.appendChild(img);
        imageContaineer.appendChild(item);
    })
}

// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch (error){
        //catch error here
    }
}
//onLoad
getPhotos();
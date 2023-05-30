//Unsplash API
const count =10;
const apiKey='cJ17g6FusoadeKTjXG_Ew66pAVgQl1eSpzk-6FxlmM4';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch (error){
        //catch error here
    }
}
//onLoad
getPhotos();
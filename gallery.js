const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

let count = 10;
const apikey = "9XF6NqR03ANJkqkjpHNtlxYCWnv7NifdmCWDOrH9xS4";

//Unsplash API
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}`;

// create Elements for links and photos, Add to the dom

function displayPhotos() {
  photosArray.forEach((photo) => {
    // create </a> element to link to unsplash

    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    // create img for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // put <img> inside <a>, thne put both inside imagecontainer

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from unsplash Api
async function getPhotos() {
  try {
    loader.style.display = "block";
    const response = await fetch(apiUrl + `&count=${count}`);
    photosArray = await response.json();
    displayPhotos();
    loader.style.display = "none";
    console.log(photosArray);
  } catch (error) {
    //Catch error
  }
}

getPhotos();

window.addEventListener("scroll", () => {
  // console.log("Event listener");
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    console.log("Event last");
    getPhotos();
  }
});

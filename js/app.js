const dog_api = 'https://dog.ceo/api/';

// Vars by Elements
let selectBreed = document.querySelector("#selectBreed");
let viewDog = document.querySelector("#viewDog");
let breedImage = document.querySelector("#breedImage");
//let breedName = '';


$.ajax({

    // https://dog.ceo/api/breeds/list/all
    url: "https://dog.ceo/api/breeds/list",
    dataType: "json",
    success: data => {
        // console.log(data);
        let dogs = "";
        for (let i = 0; i < data.message.length; i++) {

            dogs += ` <option value ='${data.message[i]}'>${data.message[i].charAt(0).toUpperCase()}${data.message[i].substring(1)} </option>`;
        }
        selectBreed.innerHTML = dogs;
        // breedName = selectBreed.value;
        random();
    },
    error: error => {
        console.log(error);
    }
});

function random() {
    //This is the code
    let breedName = selectBreed.value;
    $.ajax({
        url: `https://dog.ceo/api/breed/${breedName}/images/random`,
        dataType: "json",
        success: data => {
            breedImage.src = data.message;
        },
        error: error => {
            console.log(error);
        }
    });
}

viewDog.addEventListener('click', random);
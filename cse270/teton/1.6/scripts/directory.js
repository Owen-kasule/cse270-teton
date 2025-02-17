// Toggle active/not active buttons

var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// Load JSON data and do stuff
// Business URL loaded in config.js

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayBusinesses = (members) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  members.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${business.imageURL}">
    <p>${business.name}</p>
    <p>${business.streetAddress}</p>
    <p>${business.cityStateZip}</p>
    <p><a href="${business.websiteURL}">Website</a></p>
    `;
    if (business.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); // end of forEach loop
  
}; // end of function expression

async function getBusinessData() {
  try{
  const response = await fetch(businessDataUrl);
  if (response.ok) {
    const data = await response.json();
    displayBusinesses(data.businesses);
  } else {
    console.error("There was an error loading the member directory data.");
    const cards = document.querySelector(".directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
  }
  catch (error){
    console.error("There was an error loading the member directory data.", error);
    const cards = document.querySelector(".directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1><p>Please come back another time.</p></section>";
  }
}

getBusinessData();

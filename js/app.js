document.addEventListener("DOMContentLoaded",() => {

    const newItemForm = document.querySelector("#new-character-form");
    newItemForm.addEventListener("submit", handleFormSubmit);
    
    const characterList= document.querySelector("#character-list");
    
    createDeleteButton();

    const deleteAllButton = document.querySelector("#delete-button")
    deleteAllButton.addEventListener('click', handleDeleteButton);
     
})

// Function that reacts to form submission and populates list with entries
const handleFormSubmit = function (event) {
    // Prevents refresh
    event.preventDefault();
    // Creates list item, selects list, and appends list item to list
    const characterListItem = createCharacterListItem(event.target);
    const characterList= document.querySelector("#character-list");
    characterList.appendChild(characterListItem);
    // Resets form after submit
    event.target.reset();
}
// Helper function 
const createCharacterListItem = function (form){
    // Creates list item for each form submission
    const characterListItem = document.createElement("li");
    characterListItem.classList.add("character-list-item");
    // Creates character name variable and appends to created list item
    const characterName = document.createElement("h2");
    characterName.textContent = `Name: ${form.name.value}`;
    characterListItem.appendChild(characterName);
    // Creates character race variable and appends to created list item
    const characterRace = document.createElement("h3");
    characterRace.textContent = `Race: ${form.race.value}`;
    characterListItem.appendChild(characterRace);
    // Creates character class variable and appends to created list item (includes subclass in listing)
    const characterClass = document.createElement("h3");
    characterClass.textContent = `Class: ${form.class.value} (${form.subclass.value})`;
    characterListItem.appendChild(characterClass);
    // Creates character level variable and appends to created list item
    const characterLevel = document.createElement ("h3");
    characterLevel.textContent = `Level: ${form.level.value}`;
    characterListItem.appendChild(characterLevel);
    
    return characterListItem;
}


// Function to clear character list when delete button is clicked
const handleDeleteButton = function (){
    const characterList = document.querySelector('#character-list');
    characterList.innerHTML = '';
}

// Function that creates delete all button
const createDeleteButton = function (){
    const parentElement = document.querySelector("h1");

    const deleteAllButton = document.createElement("BUTTON");
    deleteAllButton.textContent = "Clear Character List"
    deleteAllButton.id = "delete-button"
    deleteAllButton.classList.add('btn')

   parentElement.appendChild(deleteAllButton);
}

// (CAN'T GET THIS TO WORK) Helper function checking if there is any content in the list of characters
const listNotEmpty = function (element){
    return !!element.childElementCount;
}
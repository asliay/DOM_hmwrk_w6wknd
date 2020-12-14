// D&D Character Tracker

document.addEventListener("DOMContentLoaded",() => {

    const newItemForm = document.querySelector("#new-character-form");
    newItemForm.addEventListener("submit", handleFormSubmit);
    
    // Helper function to load page with characters already in list (function + array of characters can be found in helperFunctions/existingCharacters.js)
    addExistingCharacters(existingCharacters);

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
    // Creates characterName variable and appends to created list item
    const characterName = document.createElement("h2");
    characterName.textContent = `${form.name.value} (Level ${form.level.value})`;
    
    // Creates characterRace variable and appends to created list item
    const characterRace = document.createElement("h3");
    characterRace.textContent = `Race: ${form.race.value}`;
    
    // Creates characterClass variable and appends to created list item (includes subclass in listing)
    const characterClass = document.createElement("h3");
    characterClass.textContent = `Class: ${form.class.value} (${form.subclass.value})`;

    const childrenElements = [characterName, characterRace, characterClass]
    appendMultiple(childrenElements, characterListItem);
    return characterListItem;
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

// Function to clear character list when delete button is clicked
const handleDeleteButton = function (){
    const characterList = document.querySelector('#character-list');
    characterList.innerHTML = '';
}





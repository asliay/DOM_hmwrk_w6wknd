document.addEventListener("DOMContentLoaded",() => {

    const newItemForm = document.querySelector("#new-character-form");
    newItemForm.addEventListener("submit", handleFormSubmit);

    const deleteAllButton = document.createElement("button");

})

// NOTE TO SELF: MAKE THIS D&D CHARACTER TRACKER INSTEAD!

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
    characterName.textContent = form.title.value;
    characterListItem.appendChild(characterName);
    // Creates character race variable and appends to created list item
    const characterRace = document.createElement("h3");
    characterRace.textContent = form.race.value;
    characterListItem.appendChild(characterRace);
    // Creates character class variable and appends to created list item (includes subclass in listing)
    const characterClass = document.createElement("h3");
    characterClass.textContent = `${form.class.value} (${form.subclass.value})`;
    characterListItem.appendChild(characterClass);
    // Creates character level variable and appends to created list item
    const characterLevel = document.createElement ("h3");
    characterLevel.textContent = form.level.value;
    characterListItem.appendChild(characterLevel);
    
    return characterListItem;
}
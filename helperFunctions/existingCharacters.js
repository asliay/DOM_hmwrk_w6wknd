// Helper function + array to load page with existing characters already in list

const addExistingCharacters = function (characters) {
    characters.forEach(character => {
        const characterList = document.querySelector("#character-list")

        const characterInfo = document.createElement("li");
        characterInfo.classList.add('character-list-item');
        
        const characterName = document.createElement("h2");
        characterName.textContent = `${character.name} (Level ${character.level})`;

        const characterRace = document.createElement("h3");
        characterRace.textContent = `Race: ${character.race}`;

        const characterClass = document.createElement("h3");
        characterClass.textContent = `Class: ${character.class} (${character.subclass})`;

        const childrenElements = [characterName, characterRace, characterClass];
        appendMultiple(childrenElements, characterInfo);
        characterList.appendChild(characterInfo);

        return characterInfo
    });
}

const existingCharacters = [
    eg = {
        name: "Eg",
        race: "Aasimar",
        class: "Cleric",
        subclass: "Grave Cleric",
        level: 6
    },
    ok = {
        name: "O.K.",
        race: "Tiefling",
        class: "Wizard",
        subclass: "War Magic",
        level: 7
    },
    buck = {
        name: "Buck",
        race: "Warforged",
        class: "Monk",
        subclass: "Way of the Drunken Master",
        level: 3
    }

]



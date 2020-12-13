// Loads page with character named Eg already in list
const addEg = function () {
    const characterList = document.querySelector("#character-list")
    const eg = {
        name: "Eg",
        race: "Aasimar",
        class: "Cleric",
        subclass: "Grave Cleric",
        level: 6
    }

    const egInfo = document.createElement("li");
    egInfo.classList.add('character-list-item')

    const egName = document.createElement("h2");
    egName.textContent = `${eg.name} (Level ${eg.level})`;
    egInfo.appendChild(egName);

    const egRace = document.createElement("h3");
    egRace.textContent = `Race: ${eg.race}`;
    egInfo.appendChild(egRace);

    const egClass = document.createElement("h3");
    egClass.textContent = `Class: ${eg.class} (${eg.subclass})`;
    egInfo.appendChild(egClass);
    
    characterList.appendChild(egInfo);
    return egInfo;
}


// Loads page with character name O.K. already in list
const addOk = function () {
    const characterList = document.querySelector("#character-list")

    const ok = {
        name: "O.K.",
        race: "Tiefling",
        class: "Wizard",
        subclass: "War Magic",
        level: 7
    }

    const okInfo = document.createElement("li");
    okInfo.classList.add('character-list-item')

    const okName = document.createElement("h2");
    okName.textContent = `${ok.name} (Level ${ok.level})`;
    okInfo.appendChild(okName);

    const okRace = document.createElement("h3");
    okRace.textContent = `Race: ${ok.race}`;
    okInfo.appendChild(okRace);

    const okClass = document.createElement("h3");
    okClass.textContent = `Class: ${ok.class} (${ok.subclass})`;
    okInfo.appendChild(okClass);
    
    characterList.appendChild(okInfo);
    return okInfo;
    
}

// Loads page with character named Buck already in list
const addBuck = function () {
    const characterList = document.querySelector("#character-list")

    const buck = {
        name: "Buck",
        race: "Warforged",
        class: "Monk",
        subclass: "Way of the Drunken Master",
        level: 3
    }
    
    const buckInfo = document.createElement("li");
    buckInfo.classList.add('character-list-item')

    const buckName = document.createElement("h2");
    buckName.textContent = `${buck.name} (Level ${buck.level})`;
    buckInfo.appendChild(buckName);

    const buckRace = document.createElement("h3");
    buckRace.textContent = `Race: ${buck.race}`;
    buckInfo.appendChild(buckRace);

    const buckClass = document.createElement("h3");
    buckClass.textContent = `Class: ${buck.class} (${buck.subclass})`;
    buckInfo.appendChild(buckClass);
    
    characterList.appendChild(buckInfo);
    return buckInfo;
}
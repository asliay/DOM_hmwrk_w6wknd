const appendMultiple = (childElements, parentElement) => {
    childElements.forEach(child => {
        parentElement.appendChild(child);
    });
}
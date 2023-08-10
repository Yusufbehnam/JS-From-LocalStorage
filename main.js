const hexInputContainer = document.querySelector("#hexInputContainer")

const newDivElement = document.createElement("div")

newDivElement.classList.add("col-sm")

newDivElement.innerHTML = `
    <label for="color" class="form-label">HEX Color</label>
    <input
    type="text"
    minlength="6"
    maxlength="6"
    class="form-control"
    name="color1"
    />
`
hexInputContainer.append(newDivElement)
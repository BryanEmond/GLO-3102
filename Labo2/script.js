const Diners = ["salad", "chicken", "beef", "steak", "poutine", "lasagna", "mac and cheese", "spaghettie", "ramen", "sushi", "sandwich", "taco", "dumpling"]
const showDropdown = () => {
    const dropdownEl = document.getElementById("dropdown");
    dropdownEl.appendChild(createSearchBar());
    const searchBar = document.getElementById("searchBar");
    dropdownEl.appendChild(resetButton(searchBar));
    searchBar.addEventListener("click", () => renderFilterArray(searchBar.value));
    searchBar.addEventListener("keydown", (event) => renderFilterArray(event));
    searchBar.addEventListener("focusout", deleteOptionDiv)
}
const renderFilterArray = (value) => {
    const dropdownEl = document.getElementById("dropdown");
    dropdownEl.appendChild(filterArray(value))
}
const deleteOptionDiv = () => {
    const alreadyExist = document.getElementById("optionsDiv");
    if (alreadyExist) {
        alreadyExist.remove();
    }
}
const resetButton = (searchBar) => {
    var element = document.createElement("span");
    element.innerText = "X";
    element.style.cursor = "pointer";
    element.addEventListener("click", () => {
        searchBar.value = ""
        renderFilterArray("");
        searchBar.focus()
    })
    return element;
}
const createOptions = (diners) => {
    deleteOptionDiv();
    const optionsDiv = document.createElement("div")
    optionsDiv.id = "optionsDiv";
    diners.forEach(diner => {
        const option = document.createElement("div")
        option.innerText = diner;
        optionsDiv.appendChild(option);
    })
    return optionsDiv;
}

const createSearchBar = () => {
    const searchBar = document.createElement("input");
    searchBar.placeholder = "search...";
    searchBar.id = "searchBar";
    return searchBar;
}

const filterArray = (e) => {
    let diners = Diners.filter(diner => {
        return diner.startsWith(typeof (e) !== "string" ? e.target.value : e)
    })
    if (diners.length === 0) {
        return createOptions(["No results found"])
    }
    else {
        return createOptions(diners)
    }
}
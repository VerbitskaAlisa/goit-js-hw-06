const categoriesListEl = document.querySelectorAll(".item");
console.log(categoriesListEl);
console.log(`Number of categories: ${categoriesListEl.length}`);

categoriesListEl.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    const itemsListEl = category.querySelectorAll("li");
    console.log(`Elements: ${itemsListEl.length}`);
})
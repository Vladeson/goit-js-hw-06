const categories = document.querySelectorAll(".item");
console.dir(`Number of categories: ${categories.length}`);


// categories.forEach((category) => {
//     console.dir(`Category: ${category.firstElementChild.textContent}
// Elements: ${category.lastElementChild.children.length}`)
// })


categories.forEach((category) => {
    const titleCategory = category.querySelector("h2").textContent;
    const elementsCategory = category.querySelectorAll("li").length

    console.log(`Category: ${titleCategory}`)
    console.log(`Elements: ${elementsCategory}`)
})
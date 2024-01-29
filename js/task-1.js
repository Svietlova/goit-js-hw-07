'use strict';

const categories = document.getElementsByClassName("item");
console.dir(`Numbers of categories: ${categories.length}`);

const newArray = Array.from(categories);  
    newArray.forEach(item => {
        const titles = item.getElementsByTagName("h2");
        console.dir(`Category: ${titles[0].textContent}`);
        
        const elements = item.getElementsByTagName("li");
        console.dir(`Elements: ${elements.length}`);
    });

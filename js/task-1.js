'use strict';

const categories = document.getElementsByClassName('item');
console.log(`Numbers of categories: ${categories.length}`);

const newArray = Array.from(categories);  
    newArray.forEach(item => {
        const titles = item.getElementsByTagName("h2");
        console.log(`Category: ${titles[0].textContent}`);
        
        const elements = item.getElementsByTagName("li");
        console.log(`Elements: ${elements.length}`);
    });

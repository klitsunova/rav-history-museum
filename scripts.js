const dataArray = [
    { preview: 'images/items_preview/microphone.jpg' },
    { preview: 'images/items_preview/spider.jpg' },
    { preview: 'images/items_preview/rainbow.jpg' },
    { preview: 'images/items_preview/shoes.jpg' },
    { preview: 'images/items_preview/owl_paw.jpg' },
    { preview: 'images/items_preview/fff_scenario.jpg' },
    { preview: 'images/items_preview/penguin.jpg' },
    { preview: 'images/items_preview/shovel.jpg' },
    { preview: 'images/items_preview/robe.jpg' },
    { preview: 'images/items_preview/bike.jpg' },
    { preview: 'images/items_preview/feather.jpg' },
    { preview: 'images/items_preview/wrackspurts.jpg' },
    { preview: 'images/items_preview/bear.jpg' },
    { preview: 'images/items_preview/pumpkin.jpg' },
    { preview: 'images/items_preview/lasso.jpg' },
    { preview: 'images/items_preview/potion.jpg' },
];

const container = document.getElementById('items');


function createDivBlocks(data) {
    data.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.className = 'dynamic-div';

        const img = document.createElement('img');
        img.src = item.preview;

        newDiv.appendChild(img);
        container.appendChild(newDiv);
    });
}

createDivBlocks(dataArray);
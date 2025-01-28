let clothingVisibleCount = 6;
let shopVisibleCount = 6;

function showMore(listId, itemsToShow) {
    const list = document.getElementById(listId);
    const items = Array.from(list.getElementsByClassName('card'));
    
    let visibleItems = items.filter(item => item.style.display !== 'none');
    let itemsToDisplay = visibleItems.slice(visibleItems.length, visibleItems.length + itemsToShow);

    itemsToDisplay.forEach(item => item.style.display = 'block');

    if (listId === 'clothingList') {
        clothingVisibleCount += itemsToShow;
        document.getElementById('viewMoreClothing').style.display = clothingVisibleCount < items.length ? 'block' : 'none';
    } else if (listId === 'shopList') {
        shopVisibleCount += itemsToShow;
        document.getElementById('viewMoreShops').style.display = shopVisibleCount < items.length ? 'block' : 'none';
    }
}

// Sort Clothing Items
function sortClothing() {
    const sortOption = document.getElementById('sortClothing').value;
    const clothingList = document.getElementById('clothingList');
    const items = Array.from(clothingList.getElementsByClassName('card'));

    items.forEach(item => item.style.display = 'none'); // Hide all items initially

    let filteredItems = items;

    if (sortOption === 'men') {
        filteredItems = items.filter(item => item.classList.contains('men'));
    } else if (sortOption === 'women') {
        filteredItems = items.filter(item => item.classList.contains('women'));
    } else if (sortOption === 'kids') {
        filteredItems = items.filter(item => item.classList.contains('kids'));
    } else if (sortOption === 'price') {
        filteredItems.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    }

    filteredItems.forEach((item, index) => {
        if (index < clothingVisibleCount) {
            item.style.display = 'block';
        }
    });

    document.getElementById('viewMoreClothing').style.display = filteredItems.length > clothingVisibleCount ? 'block' : 'none';
}

// Sort Nearby Shops
function sortNearbyShops() {
    const sortOption = document.getElementById('sortShops').value;
    const shopList = document.getElementById('shopList');
    const items = Array.from(shopList.getElementsByClassName('card'));

    items.forEach(item => item.style.display = 'none'); // Hide all items initially

    let sortedItems = items;

    if (sortOption === 'nearest') {
        sortedItems.sort((a, b) => parseFloat(a.dataset.distance) - parseFloat(b.dataset.distance));
    } else if (sortOption === 'ratings') {
        sortedItems.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
    }

    sortedItems.forEach((item, index) => {
        if (index < shopVisibleCount) {
            item.style.display = 'block';
        }
    });

    document.getElementById('viewMoreShops').style.display = sortedItems.length > shopVisibleCount ? 'block' : 'none';
}

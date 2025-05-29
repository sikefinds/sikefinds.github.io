// Sample product data - you can replace this with your actual data
const products = [
    {
        id: 1,
        title: "Wireless Earbuds",
        price: "$29.99",
        image: "https://via.placeholder.com/300x200",
        productLink: "https://example.com/product1",
        reviewLink: "https://tiktok.com/@user/video/123456",
        reviewPlatform: "tiktok" // or "reddit"
    },
    // Add more products here
];

// Function to create a product card
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <div class="product-links">
                    <a href="${product.productLink}" target="_blank" class="link-button product-link">
                        <i class="fas fa-shopping-cart"></i>
                        Buy Now
                    </a>
                    <a href="${product.reviewLink}" target="_blank" class="link-button review-link">
                        <i class="fab fa-${product.reviewPlatform}"></i>
                        Review
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to display products
function displayProducts(productsToShow = products) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = productsToShow
        .map(product => createProductCard(product))
        .join('');
}

// Function to filter products
function filterProducts(searchText) {
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    filterProducts(e.target.value);
});

// Initial display of products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

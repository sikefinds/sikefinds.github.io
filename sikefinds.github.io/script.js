// Product data with real sneaker images
const products = [
    {
        id: 1,
        title: "Travis Scott x Air Jordan 1 Low OG 'Reverse Mocha'",
        image: "img/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha_V2-Product-removebg-preview.png",
        productLink: "https://weidian.com/item.html?itemID=7369844463",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 2,
        title: "Nike Air Force 1 Low",
        image: "img/airforce1-removebg-preview.png",
        productLink: "https://weidian.com/item.html?itemID=7401761297&spider_token=68ff",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },    {
        id: 3,
        title: "Hermès Bouncing Sneaker Grey",
        image: "img/Alexander_Hermes_Bouncing_Grey-removebg-preview.png",
        productLink: "https://weidian.com/item.html?itemID=7004658746&spider_token=b577",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 4,
        title: "Dior B22 White",
        image: "img/Dior_B22_White-removebg-preview.png",
        productLink: "https://item.taobao.com/item.htm?id=765005637664",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },    {
        id: 5,
        title: "Dior B27 White",
        image: "img/Dior_B27_White_on_White-removebg-preview.png",
        productLink: "https://weidian.com/item.html?itemID=6930400688&spider_token=91a2",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 6,
        title: "Dior B30 Light Gray/Black",
        image: "img/Dior-B30-Light-Gray-Black-removebg-preview.png",
        productLink: "https://shop1850717273.v.weidian.com/item.html?itemID=7305076471",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },    {
        id: 7,
        title: "Dior B30 Black",
        image: "img/DiorB30-removebg-preview.png",
        productLink: "https://shop1850717273.v.weidian.com/item.html?itemID=7305076471",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 8,
        title: "Louis Vuitton Trainer Black/White",
        image: "img/LV-Trainer-Black_White-removebg-preview.png",
        productLink: "https://item.taobao.com/item.htm?ft=t&id=730428049541",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 9,
        title: "LV Skate Swarovski Black",
        image: "img/LVSkateSwarovskiBlack-removebg-preview.png",
        productLink: "https://weidian.com/item.html?itemID=7407483412&wfr=c",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    }
];

// Function to create a product card with animation
function createProductCard(product, index) {
    return `
        <div class="product-card" style="--index: ${index}">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy"><div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-links">                    <a href="${product.productLink}" target="_blank" class="link-button product-link" title="Comprar ${product.title}">
                        <i class="fas fa-shopping-cart"></i>
                        Comprar
                    </a>
                    <a href="${product.reviewLink}" target="_blank" class="link-button review-link" title="Ver reseña en ${product.reviewPlatform}">
                        <i class="fab fa-${product.reviewPlatform}"></i>
                        Reseña
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to display products with animations
function displayProducts(productsToShow = products) {
    const productsGrid = document.querySelector('.products-grid');
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `        <div class="no-results">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>No se encontraron productos. Intenta con otra búsqueda.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToShow
        .map((product, index) => createProductCard(product, index))
        .join('');
}

// Enhanced function to filter products
function filterProducts(searchText) {
    const searchTerms = searchText.toLowerCase().split(' ');
    const filteredProducts = products.filter(product => {
        const productText = product.title.toLowerCase();
        return searchTerms.every(term => productText.includes(term));
    });
    displayProducts(filteredProducts);
}

// Debounce function to improve search performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Event listener for search input with debounce
const debouncedFilter = debounce((text) => filterProducts(text), 300);
document.getElementById('searchInput').addEventListener('input', (e) => {
    debouncedFilter(e.target.value);
});

// Initial display of products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Add fade-in animation to header
    document.querySelector('.header-content').style.animation = 'fadeInUp 0.5s ease-out';
});

// Modal para el registro
document.getElementById('signupBtn').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>¡Regístrate y obtén 200€ en cupones!</h2>
            <p>Suscríbete para recibir las mejores ofertas y cupones exclusivos.</p>
            <form id="signupForm">
                <input type="email" placeholder="Tu email" required>
                <button type="submit">¡Quiero mis cupones!</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close-btn');
    const form = modal.querySelector('#signupForm');

    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        // Aquí puedes agregar la lógica para manejar el email
        modal.innerHTML = `
            <div class="modal-content success">
                <h2>¡Gracias por registrarte! 🎉</h2>
                <p>Revisa tu email para obtener tus cupones.</p>
                <button onclick="this.closest('.modal').remove()">Cerrar</button>
            </div>
        `;
    });
});

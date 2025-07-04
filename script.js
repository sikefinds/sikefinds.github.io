// Product data with real sneaker images
const products = [
    {
        id: 1,
        title: "Conjunto Supreme Track",
        image: "img/supreme-track-set.png",
        productLink: "https://weidian.com/item.html?itemID=7484518956",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 2,
        title: "Conjunto Nike Sportswear",
        image: "img/nike-set.png",
        productLink: "https://weidian.com/item.html?itemID=7482656767",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 3,
        title: "Camiseta Ralph Lauren Negra",
        image: "img/rl-black-tee.png",
        productLink: "https://weidian.com/item.html?itemID=7459637495",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 4,
        title: "Shorts Ralph Lauren Blancos",
        image: "img/rl-white-shorts.png",
        productLink: "https://weidian.com/item.html?itemID=7484518800",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 5,
        title: "Camiseta Nocta Blanca",
        image: "img/nocta-white-tee.png",
        productLink: "https://weidian.com/item.html?itemID=7482589407",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 6,
        title: "Shorts CP Company",
        image: "img/cp-company-shorts.png",
        productLink: "https://weidian.com/item.html?itemID=7473405860",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 7,
        title: "Camiseta Nocta Negra",
        image: "img/nocta-black-tee.png",
        productLink: "https://weidian.com/item.html?itemID=7482631021",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 8,
        title: "Shorts Stone Island Grises",
        image: "img/stone-island-grey-shorts.png",
        productLink: "https://weidian.com/item.html?itemID=7482703891",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 9,
        title: "Camiseta Undefeated",
        image: "img/undefeated-tee.png",
        productLink: "https://weidian.com/item.html?itemID=7482648511",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 10,
        title: "Shorts Stone Island Verdes",
        image: "img/stone-island-green-shorts.png",
        productLink: "https://weidian.com/item.html?itemID=7482692155",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 11,
        title: "Cartera Vans",
        image: "img/vans-wallet.png",
        productLink: "https://weidian.com/item.html?itemID=7482175525",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 12,
        title: "Abrebotellas Vans",
        image: "img/vans-bottle-opener.png",
        productLink: "https://weidian.com/item.html?itemID=7482674295",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 13,
        title: "Sandalias Birkenstock",
        image: "img/birkenstock-slippers.png",
        productLink: "https://weidian.com/item.html?itemID=7457306479",
        reviewLink: "https://vm.tiktok.com/ZNdknjRrn/",
        reviewPlatform: "tiktok"
    },
    {
        id: 14,
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
                <div class="product-links">
                    <a href="${product.productLink}" target="_blank" class="link-button product-link" title="Buy ${product.title}">
                        <i class="fas fa-shopping-cart"></i>
                        Buy Now
                    </a>
                    <a href="${product.reviewLink}" target="_blank" class="link-button review-link" title="Watch review on ${product.reviewPlatform}">
                        <i class="fab fa-${product.reviewPlatform}"></i>
                        Review
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
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>No products found. Try a different search term.</p>
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

// Modal functionality
function setupModal() {
    const modal = document.getElementById('signupModal');
    const btn = document.getElementById('signupBtn');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('signupForm');

    btn.onclick = () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        // Aquí irá la lógica para procesar el email
        modal.innerHTML = `
            <div class="modal-content success">
                <h2>¡Gracias por registrarte!</h2>
                <p>Te hemos enviado el cupón a tu email:</p>
                <p style="color: var(--accent-color); margin: 1rem 0;">${email}</p>
                <button onclick="document.getElementById('signupModal').style.display='none';">Cerrar</button>
            </div>
        `;
    }
}

// Initial display of products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupModal();
    
    // Add fade-in animation to header
    document.querySelector('.header-content').style.animation = 'fadeInUp 0.5s ease-out';
});

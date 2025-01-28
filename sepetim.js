// Sepetteki ürünler
const cartItems = [
    { id: 1, name: "Ürün A", price: 150 },
    { id: 2, name: "Ürün B", price: 200 },
    { id: 3, name: "Ürün C", price: 120 }
];

// Sepet öğelerini ekleme
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Sepeti temizle

    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>${item.price} TL</p>
        `;

        total += item.price;
        cartItemsContainer.appendChild(itemElement);
    });

    // Toplam tutarı güncelle
    document.getElementById('total').textContent = `${total} TL`;
}

// Ödeme butonuna tıklama işlevi
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert("Ödeme işlemi başlatılıyor...");
});

// Sayfa yüklendiğinde sepeti göster
window.onload = displayCartItems;

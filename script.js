// Slider'ı kontrol etmek için fonksiyonlar
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const newTransform = -100 * currentSlide + '%';
    document.querySelector('.slider-container').style.transform = `translateX(${newTransform})`;
}

// Hizmetler için "İncele" butonu işlevi
function openHizmetDetails(hizmetName) {
    alert(`${hizmetName} detaylarını incelemek için lütfen bizimle iletişime geçin.`);
}

// Sıkça Sorulan Sorular - Açılıp kapanma fonksiyonu
const sssButtons = document.querySelectorAll('.sss-toggle');
sssButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Tüm cevapları gizle
        document.querySelectorAll('.sss-answer').forEach(item => item.style.display = 'none');

        // Cevapları göster
        if (!isVisible) {
            answer.style.display = 'block';
        }
    });
});

// Sayfa yüklendiğinde slider'ı başlatmak için
document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextSlide, 5000);  // 5 saniyede bir slide değişir
});

//HESABIM GİRİŞ


// DOM elemanlarını seçiyoruz
const registerSection = document.getElementById('register-section');
const loginSection = document.getElementById('login-section');
const accountSection = document.getElementById('account-section');
const accountSettingsContent = document.getElementById('account-settings-content');

// Kayıt Ol ve Giriş Yap butonları
const goToRegisterBtn = document.getElementById('go-to-register');
const goToLoginBtn = document.getElementById('go-to-login');

// Kayıt Ol'a gitmek
goToRegisterBtn.addEventListener('click', () => {
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

// Giriş Yap'a gitmek
goToLoginBtn.addEventListener('click', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// İlk yükleme sırasında Giriş Yap bölümü görünür olsun
window.onload = () => {
    loginSection.style.display = 'block';  // İlk olarak giriş yap sayfası gösterilecek
    registerSection.style.display = 'none';
    accountSection.style.display = 'none';
};

// Kayıt işlemi
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;
    const phoneNumber = document.getElementById('phone-number').value;

    // Kullanıcıyı kaydetme (Demo amaçlı)
    alert('Kayıt başarılı! Lütfen giriş yapın.');
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Giriş yapma işlemi
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    
    // Giriş işlemi (Alert kaldırıldı)
    loginSection.style.display = 'none';
    accountSection.style.display = 'block';
});

// Hesap ayarları - Şifre değiştir butonu
const changePasswordButton = document.getElementById('change-password');
changePasswordButton.addEventListener('click', () => {
    alert('Şifreyi değiştirme işlemi.');
});

// Siparişlerim linki
const viewOrdersLink = document.getElementById('view-orders');
viewOrdersLink.addEventListener('click', () => {
    alert('Siparişlerim bölümü açılıyor.');
});

// Satıcı ile Görüşme linki
const contactSellerLink = document.getElementById('contact-seller');
contactSellerLink.addEventListener('click', () => {
    alert('Satıcı ile görüşme başlatılıyor.');
});

// Çıkış yapma
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    alert('Çıkış yapılıyor.');
    accountSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Hesap ayarları açma/kapama
const accountSettingsBtn = document.getElementById('account-settings-btn');
accountSettingsBtn.addEventListener('click', () => {
    if (accountSettingsContent.style.display === "none") {
        accountSettingsContent.style.display = "block";
    } else {
        accountSettingsContent.style.display = "none";
    }
});

//HESABIM BİTİŞ
//ini javascript external
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//ini ganti slide
function changeSlide(n) {
    slideIndex += n - 1;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Data otomatis masuk ke tabel daftar pesanan
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let produk = document.getElementById("produk").value;
    
    let table = document.getElementById("orderTable");
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = produk;
    
    document.getElementById("productForm").reset();

    // Scroll otomatis ke daftar pesanan
    document.getElementById("orderSection").scrollIntoView({ behavior: "smooth" });
});
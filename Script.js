// ==============================
// LOADING SCREEN
// ==============================

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
    }, 1500);
});

// ==============================
// HEADER SCROLL
// ==============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.25)";
        header.style.boxShadow = "none";
    }

});

// ==============================
// BOOKING
// ==============================

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const hp = form.querySelector('input[type="tel"]').value;
    const kamar = form.querySelector("select").value;

    const checkin = form.querySelectorAll('input[type="date"]')[0].value;
    const checkout = form.querySelectorAll('input[type="date"]')[1].value;

    const tamu = form.querySelector('input[type="number"]').value;

    const hasil = document.getElementById("hasilBooking");

    hasil.style.display = "block";

    hasil.innerHTML = `
    <h2>✅ Booking Berhasil</h2>

    <p><b>Nama :</b> ${nama}</p>

    <p><b>Email :</b> ${email}</p>

    <p><b>No HP :</b> ${hp}</p>

    <p><b>Kamar :</b> ${kamar}</p>

    <p><b>Check In :</b> ${checkin}</p>

    <p><b>Check Out :</b> ${checkout}</p>

    <p><b>Jumlah Tamu :</b> ${tamu}</p>

    <br>

    <p>
    Terima kasih telah melakukan reservasi di
    <b>Hotel Indonesia ★★★★★</b>.
    Tim kami akan segera menghubungi Anda.
    </p>
    `;

    hasil.scrollIntoView({
        behavior: "smooth"
    });

    form.reset();

});

// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".room,.item,.gallery img,.booking-box,.about")
.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s";

    observer.observe(el);

});

// ==============================
// GALLERY LIGHTBOX
// ==============================

const gambar = document.querySelectorAll(".gallery img");

gambar.forEach(img => {

    img.addEventListener("click", function () {

        const bg = document.createElement("div");

        bg.style.position = "fixed";
        bg.style.top = "0";
        bg.style.left = "0";
        bg.style.width = "100%";
        bg.style.height = "100%";
        bg.style.background = "rgba(0,0,0,.9)";
        bg.style.display = "flex";
        bg.style.justifyContent = "center";
        bg.style.alignItems = "center";
        bg.style.zIndex = "99999";

        const foto = document.createElement("img");

        foto.src = this.src;
        foto.style.maxWidth = "90%";
        foto.style.maxHeight = "90%";
        foto.style.borderRadius = "15px";
        foto.style.boxShadow = "0 0 30px #fff";

        bg.appendChild(foto);

        document.body.appendChild(bg);

        bg.addEventListener("click", function () {

            bg.remove();

        });

    });

});

// ==============================
// BUTTON PILIH KAMAR
// ==============================

document.querySelectorAll(".room button").forEach(btn => {

    btn.addEventListener("click", function () {

        const namaKamar =
            this.parentElement.querySelector("h3").innerText;

        document.querySelector("select").value = namaKamar;

        document.getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// ==============================
// TAHUN FOOTER OTOMATIS
// ==============================

const footer = document.querySelector("footer");

footer.innerHTML +=
`<p style="margin-top:20px;">
© ${new Date().getFullYear()} Hotel Indonesia ★★★★★
</p>`;
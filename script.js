const semuaTombol = document.querySelectorAll(".btn-tambah");
const toast = document.getElementById("toast");
const formKontak = document.getElementById("form-kontak");
const pesanSukses = document.getElementById("pesan-sukses");
const sections = document.querySelectorAll("section[id]");

let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const produkNama = this.closest("tr").querySelector("td").textContent;
    this.textContent = "✅ ditambahkan";
    showToast(`${produkNama} ditambahkan ke keranjang`);
    setTimeout(() => {
      this.textContent = "+ Tambah";
    }, 700);
  });
});

formKontak.addEventListener("submit", function (event) {
  event.preventDefault();
  pesanSukses.style.display = "block";
  formKontak.reset();
  setTimeout(function () {
    pesanSukses.style.display = "none";
  }, 2000);
});

function updateActiveNav() {
  const scrollPosition = window.scrollY + 150;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);

    if (!link) return;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav(); 
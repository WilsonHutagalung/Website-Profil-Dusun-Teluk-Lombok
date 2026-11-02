document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const nav = document.querySelector('nav');
    const body = document.body;

    if (hamburger && navMenu && nav) {
        hamburger.addEventListener('click', () => {
            const isOpen = !body.classList.contains('menu-open');
            hamburger.classList.toggle('active', isOpen);
            navMenu.classList.toggle('active', isOpen);
            nav.classList.toggle('active', isOpen);
            body.classList.toggle('menu-open', isOpen);
            nav.style.display = isOpen ? 'block' : '';
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });
        hamburger.dataset.menuBound = 'true';
    }
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryGrid = document.getElementById('gallery-grid');
    
    const mapButtons = document.querySelectorAll('.map-button'); // Tambahkan selektor untuk tombol peta
    const assetPrefix = window.location.pathname.includes('/views/LandingPagePotensi/')
        ? '../../assets/'
        : window.location.pathname.includes('/views/')
            ? '../assets/'
            : 'assets/';
    const imageCategories = {
        // Define category-to-image mapping manually
        "all": [],
        "Kesehatan": [
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu.jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(1).jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(2).jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(3).jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(5).jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(6).jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(7).jpg", alt: "Posyandu Bunga Rosela" },
            { src: "/assets/galeri/Kesehatan/Kegiatan Posyandu(8).jpg", alt: "Posyandu Bunga Rosela" },
        ],
        "Pariwisata": [
            { src: "/assets/galeri/Pariwisata/Hutan-mangrove.jpg", alt: "Mangrove" }
        ],
        "Lingkungan": [
            { src: "/assets/galeri/Lingkungan/Penanaman dan Budidaya Mangrove.jpg", alt: "Penanaman dan Budidaya Mangrove" },
            { src: "/assets/galeri/Lingkungan/Penanaman dan Budidaya Mangrove (1).jpg", alt: "Penanaman dan Budidaya Mangrove" },
            { src: "/assets/galeri/Lingkungan/Bersih Pantai.jpg", alt: "Bersih Pantai" },
        ],
        "Olahraga": [
            { src: "/assets/galeri/Olahraga/Bermain Voli.jpg", alt: "Bermain Voli Bersama Warga" },
            { src: "/assets/galeri/Olahraga/Bermain Voli(2).jpg", alt: "Bermain Voli Bersama Warga" }
        ],
        "Pendidikan": [
            { src: "/assets/galeri/Pendidikan/Day 2-MPLS.jpg", alt: "MPLS" },
            { src: "/assets/galeri/Pendidikan/Day 2-MPLS(1).jpg", alt: "MPLS" },
            { src: "/assets/galeri/Pendidikan/Day 2-MPLS(2).jpg", alt: "MPLS" },
            { src: "/assets/galeri/Pendidikan/Anak Sekolah.jpg", alt: "SD" },
            { src: "/assets/galeri/Pendidikan/Anak SD.jpg", alt: "SD" },
            { src: "/assets/galeri/Pendidikan/Anak SD (1).jpg", alt: "SD" },
            { src: "/assets/galeri/Pendidikan/Hasil Karya Anak SD.jpg", alt: "SD" },
            { src: "/assets/galeri/Pendidikan/Kegiatan Pramuka.jpg", alt: "SD" },
            { src: "/assets/galeri/Pendidikan/Upacara.jpg", alt: "SD" },
            { src: "/assets/galeri/Pendidikan/MPLS.jpg", alt: "SD" }
        ],
        "Perekonomian": [],
        "Perkebunan": [
            { src: "/assets/galeri/Perkebunan/Kebun RT 21.jpg", alt: "Berkebun di Kebun Pak RT 21" },
            { src: "/assets/galeri/Perkebunan/Kebun RT 21 (1).jpg", alt: "Berkebun di Kebun Pak RT 21" },
            { src: "/assets/galeri/Perkebunan/Kebun RT 21 (2).jpg", alt: "Berkebun di Kebun Pak RT 21" },
            { src: "/assets/galeri/Perkebunan/Berkebun.jpg", alt: "Berkebun di Kebun Pak RT 21" }
        ],
        "Lomba 17an": [
            { "src": "/assets/galeri/Lomba 17an/1.jpg", "alt": "Lomba 17an Event 1" },
            { "src": "/assets/galeri/Lomba 17an/2.jpg", "alt": "Lomba 17an Event 2" },
            { "src": "/assets/galeri/Lomba 17an/3.jpg", "alt": "Lomba 17an Event 3" },
            { "src": "/assets/galeri/Lomba 17an/4.jpg", "alt": "Lomba 17an Event 4" },
            { "src": "/assets/galeri/Lomba 17an/5.jpg", "alt": "Lomba 17an Event 5" },
            { "src": "/assets/galeri/Lomba 17an/6.jpg", "alt": "Lomba 17an Event 6" },
            { "src": "/assets/galeri/Lomba 17an/7.jpg", "alt": "Lomba 17an Event 7" },
            { "src": "/assets/galeri/Lomba 17an/8.jpg", "alt": "Lomba 17an Event 8" },
            { "src": "/assets/galeri/Lomba 17an/9.jpg", "alt": "Lomba 17an Event 9" },
            { "src": "/assets/galeri/Lomba 17an/10.jpg", "alt": "Lomba 17an Event 10" },
            { "src": "/assets/galeri/Lomba 17an/11.jpg", "alt": "Lomba 17an Event 11" },
            { "src": "/assets/galeri/Lomba 17an/12.jpg", "alt": "Lomba 17an Event 12" },
            { "src": "/assets/galeri/Lomba 17an/13.jpg", "alt": "Lomba 17an Event 13" },
            { "src": "/assets/galeri/Lomba 17an/14.jpg", "alt": "Lomba 17an Event 14" },
            { "src": "/assets/galeri/Lomba 17an/15.jpg", "alt": "Lomba 17an Event 15" },
            { "src": "/assets/galeri/Lomba 17an/17.jpg", "alt": "Lomba 17an Event 17" },
            { "src": "/assets/galeri/Lomba 17an/18.jpg", "alt": "Lomba 17an Event 18" },
            { "src": "/assets/galeri/Lomba 17an/19.jpg", "alt": "Lomba 17an Event 19" },
            { "src": "/assets/galeri/Lomba 17an/20.jpg", "alt": "Lomba 17an Event 20" },
            { "src": "/assets/galeri/Lomba 17an/21.jpg", "alt": "Lomba 17an Event 21" },
            { "src": "/assets/galeri/Lomba 17an/22.jpg", "alt": "Lomba 17an Event 22" },
            { "src": "/assets/galeri/Lomba 17an/23.jpg", "alt": "Lomba 17an Event 23" },
            { "src": "/assets/galeri/Lomba 17an/24.jpg", "alt": "Lomba 17an Event 24" },
            { "src": "/assets/galeri/Lomba 17an/25.jpg", "alt": "Lomba 17an Event 25" },
            { "src": "/assets/galeri/Lomba 17an/26.jpg", "alt": "Lomba 17an Event 26" },
            { "src": "/assets/galeri/Lomba 17an/27.jpg", "alt": "Lomba 17an Event 27" },
            { "src": "/assets/galeri/Lomba 17an/28.jpg", "alt": "Lomba 17an Event 28" },
            { "src": "/assets/galeri/Lomba 17an/29.jpg", "alt": "Lomba 17an Event 29" },
            { "src": "/assets/galeri/Lomba 17an/30.jpg", "alt": "Lomba 17an Event 30" },
            { "src": "/assets/galeri/Lomba 17an/31.jpg", "alt": "Lomba 17an Event 31" },
            { "src": "/assets/galeri/Lomba 17an/32.jpg", "alt": "Lomba 17an Event 32" },
            { "src": "/assets/galeri/Lomba 17an/33.jpg", "alt": "Lomba 17an Event 33" },
            { "src": "/assets/galeri/Lomba 17an/34.jpg", "alt": "Lomba 17an Event 34" },
            { "src": "/assets/galeri/Lomba 17an/35.jpg", "alt": "Lomba 17an Event 35" },
            { "src": "/assets/galeri/Lomba 17an/36.jpg", "alt": "Lomba 17an Event 36" },
            { "src": "/assets/galeri/Lomba 17an/37.jpg", "alt": "Lomba 17an Event 37" },
            // { "src": "/assets/galeri/Lomba 17an/38.jpg", "alt": "Lomba 17an Event 38" },
            // { "src": "/assets/galeri/Lomba 17an/39.jpg", "alt": "Lomba 17an Event 39" },
            // { "src": "/assets/galeri/Lomba 17an/40.jpg", "alt": "Lomba 17an Event 40" },
            // { "src": "/assets/galeri/Lomba 17an/41.jpg", "alt": "Lomba 17an Event 41" },
            // { "src": "/assets/galeri/Lomba 17an/42.jpg", "alt": "Lomba 17an Event 42" },
            // { "src": "/assets/galeri/Lomba 17an/43.jpg", "alt": "Lomba 17an Event 43" },
            // { "src": "/assets/galeri/Lomba 17an/44.jpg", "alt": "Lomba 17an Event 44" },
            // { "src": "/assets/galeri/Lomba 17an/45.jpg", "alt": "Lomba 17an Event 45" },
            // { "src": "/assets/galeri/Lomba 17an/46.jpg", "alt": "Lomba 17an Event 46" },
            // { "src": "/assets/galeri/Lomba 17an/47.jpg", "alt": "Lomba 17an Event 47" },
            // { "src": "/assets/galeri/Lomba 17an/48.jpg", "alt": "Lomba 17an Event 48" },
            // { "src": "/assets/galeri/Lomba 17an/49.jpg", "alt": "Lomba 17an Event 49" },
            // { "src": "/assets/galeri/Lomba 17an/50.jpg", "alt": "Lomba 17an Event 50" },
            // { "src": "/assets/galeri/Lomba 17an/51.jpg", "alt": "Lomba 17an Event 51" },
            // { "src": "/assets/galeri/Lomba 17an/52.jpg", "alt": "Lomba 17an Event 52" },
            // { "src": "/assets/galeri/Lomba 17an/53.jpg", "alt": "Lomba 17an Event 53" },
            // { "src": "/assets/galeri/Lomba 17an/54.jpg", "alt": "Lomba 17an Event 54" },
            // { "src": "/assets/galeri/Lomba 17an/55.jpg", "alt": "Lomba 17an Event 55" },
            // { "src": "/assets/galeri/Lomba 17an/56.jpg", "alt": "Lomba 17an Event 56" },
            // { "src": "/assets/galeri/Lomba 17an/57.jpg", "alt": "Lomba 17an Event 57" },
            // { "src": "/assets/galeri/Lomba 17an/58.jpg", "alt": "Lomba 17an Event 58" },
            // { "src": "/assets/galeri/Lomba 17an/59.jpg", "alt": "Lomba 17an Event 59" },
            // { "src": "/assets/galeri/Lomba 17an/60.jpg", "alt": "Lomba 17an Event 60" },
            // { "src": "/assets/galeri/Lomba 17an/61.jpg", "alt": "Lomba 17an Event 61" },
            // { "src": "/assets/galeri/Lomba 17an/62.jpg", "alt": "Lomba 17an Event 62" },
            // { "src": "/assets/galeri/Lomba 17an/63.jpg", "alt": "Lomba 17an Event 63" },
            // { "src": "/assets/galeri/Lomba 17an/64.jpg", "alt": "Lomba 17an Event 64" },
            // { "src": "/assets/galeri/Lomba 17an/65.jpg", "alt": "Lomba 17an Event 65" },
            // { "src": "/assets/galeri/Lomba 17an/66.jpg", "alt": "Lomba 17an Event 66" },
            // { "src": "/assets/galeri/Lomba 17an/67.jpg", "alt": "Lomba 17an Event 67" },
            // { "src": "/assets/galeri/Lomba 17an/68.jpg", "alt": "Lomba 17an Event 68" },
            // { "src": "/assets/galeri/Lomba 17an/69.jpg", "alt": "Lomba 17an Event 69" },
            // { "src": "/assets/galeri/Lomba 17an/70.jpg", "alt": "Lomba 17an Event 70" },
            // { "src": "/assets/galeri/Lomba 17an/71.jpg", "alt": "Lomba 17an Event 71" },
            // { "src": "/assets/galeri/Lomba 17an/72.jpg", "alt": "Lomba 17an Event 72" },
            // { "src": "/assets/galeri/Lomba 17an/73.jpg", "alt": "Lomba 17an Event 73" },
            // { "src": "/assets/galeri/Lomba 17an/74.jpg", "alt": "Lomba 17an Event 74" },
            // { "src": "/assets/galeri/Lomba 17an/75.jpg", "alt": "Lomba 17an Event 75" },
            // { "src": "/assets/galeri/Lomba 17an/76.jpg", "alt": "Lomba 17an Event 76" },
            // { "src": "/assets/galeri/Lomba 17an/77.jpg", "alt": "Lomba 17an Event 77" },
            // { "src": "/assets/galeri/Lomba 17an/78.jpg", "alt": "Lomba 17an Event 78" },
            // { "src": "/assets/galeri/Lomba 17an/79.jpg", "alt": "Lomba 17an Event 79" },
            // { "src": "/assets/galeri/Lomba 17an/80.jpg", "alt": "Lomba 17an Event 80" },
            // { "src": "/assets/galeri/Lomba 17an/81.jpg", "alt": "Lomba 17an Event 81" },
            // { "src": "/assets/galeri/Lomba 17an/82.jpg", "alt": "Lomba 17an Event 82" },
            // { "src": "/assets/galeri/Lomba 17an/83.jpg", "alt": "Lomba 17an Event 83" },
            // { "src": "/assets/galeri/Lomba 17an/84.jpg", "alt": "Lomba 17an Event 84" },
            // { "src": "/assets/galeri/Lomba 17an/85.jpg", "alt": "Lomba 17an Event 85" },
            // { "src": "/assets/galeri/Lomba 17an/86.jpg", "alt": "Lomba 17an Event 86" },
            // { "src": "/assets/galeri/Lomba 17an/87.jpg", "alt": "Lomba 17an Event 87" },
            // { "src": "/assets/galeri/Lomba 17an/88.jpg", "alt": "Lomba 17an Event 88" },
            // { "src": "/assets/galeri/Lomba 17an/89.jpg", "alt": "Lomba 17an Event 89" },
            // { "src": "/assets/galeri/Lomba 17an/90.jpg", "alt": "Lomba 17an Event 90" },
            // { "src": "/assets/galeri/Lomba 17an/91.jpg", "alt": "Lomba 17an Event 91" },
            // { "src": "/assets/galeri/Lomba 17an/92.jpg", "alt": "Lomba 17an Event 92" },
            // { "src": "/assets/galeri/Lomba 17an/93.jpg", "alt": "Lomba 17an Event 93" },
            // { "src": "/assets/galeri/Lomba 17an/94.jpg", "alt": "Lomba 17an Event 94" },
            // { "src": "/assets/galeri/Lomba 17an/95.jpg", "alt": "Lomba 17an Event 95" },
            // { "src": "/assets/galeri/Lomba 17an/96.jpg", "alt": "Lomba 17an Event 96" },
            // { "src": "/assets/galeri/Lomba 17an/97.jpg", "alt": "Lomba 17an Event 97" },
            // { "src": "/assets/galeri/Lomba 17an/98.jpg", "alt": "Lomba 17an Event 98" },
            // { "src": "/assets/galeri/Lomba 17an/99.jpg", "alt": "Lomba 17an Event 99" },
            // { "src": "/assets/galeri/Lomba 17an/100.jpg", "alt": "Lomba 17an Event 100" }
        ],
        "Kemasyrakatan": [
            { src: "/assets/galeri/Kemasyrakatan/Makan Bersama.jpg", alt: "Makan Bersama Kader Posyandu dan Kepala Dusun" },
            { src: "/assets/galeri/Kemasyrakatan/Menyambut 10 Muharam.jpg", alt: "Menyambut 10 Muharam" },
            { src: "/assets/galeri/Kemasyrakatan/Mencari Kerang Bersama Warga Teluk Lombok.jpg", alt: "Mencari Kerang Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Kerja Bakti.jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Kerja Bakti(2).jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Kerja Bakti(3).jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Kerja Bakti(4).jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Kerja Bakti(5).jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Kerja Bakti(6).jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Membersihkan Gedung Serbaguna.jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Membersihkan Gedung Serbaguna(2).jpg", alt: "Kerja Bakti Bersama Warga" },
            { src: "/assets/galeri/Kemasyrakatan/Sosialisasi Program Kerja Individu.jpg", alt: "Sosialisasi Program Kerja Individu" },
            { src: "/assets/galeri/Kemasyrakatan/Sosialisasi Program Kerja Individu (1).jpg", alt: "Sosialisasi Program Kerja individu" },
            { src: "/assets/galeri/Kemasyrakatan/Sosialisasi Kegiatan Program Kerja Individu(3).jpg", alt: "Sosialisasi Program Kerja individu" },
            { src: "/assets/galeri/Kemasyrakatan/Sosialiasi Proker.jpg", alt: "Sosialisasi Program Kerja" },

        ],
        "Pemerintah": [],
        "Teknologi": [],
    };

    // Cache for gallery items
    let currentCategory = null;
    const galleryCache = new Map();

    // Preload all images
    function preloadImages() {
        const allImages = Object.values(imageCategories).flat().map(item => item.src || item);
        allImages.forEach(imageSrc => {
            const img = new Image();
            const resolvedImageSrc = resolveAssetPath(imageSrc);
            img.src = resolvedImageSrc;
            img.onload = () => console.log(`Image preloaded: ${resolvedImageSrc}`);
            img.onerror = () => console.log(`Failed to preload image: ${resolvedImageSrc}`);
        });
    }

    function resolveAssetPath(imageSrc) {
        return imageSrc.startsWith('/assets/') ? `${assetPrefix}${imageSrc.slice('/assets/'.length)}` : imageSrc;
    }

    // Helper function to extract category from image path
    function getCategoryFromPath(path) {
        const match = path.match(/\/assets\/galeri\/([^\/]+)\//);
        return match ? match[1] : 'unknown';
    }

    // Function to check if a category has images
    function hasImages(category) {
        if (category === 'all') {
            return Object.values(imageCategories).some(images => images.length > 0);
        }
        return imageCategories[category]?.length > 0;
    }

    // Function to create a gallery item
    function createGalleryItem(imageSrc, category, altText) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.setAttribute('data-category', category);

        const img = document.createElement('img');
        img.src = resolveAssetPath(imageSrc);
        img.alt = altText || `Image from ${category}`;
        img.loading = 'lazy';
        img.onload = () => console.log(`Image loaded: ${imageSrc}`);
        img.onerror = () => {
            img.src = resolveAssetPath('/assets/galeri/Pantai-Teluk-Lombok.jpg');
            img.alt = 'Placeholder Image';
            console.log(`Failed to load image: ${imageSrc}, using placeholder`);
        };

        galleryItem.appendChild(img);
        return galleryItem;
    }

    // Function to populate gallery grid
    function populateGallery(category) {
        if (!galleryGrid) {
            return;
        }

        console.log(`Populating gallery for category: ${category}`);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        } else {
            console.error(`No button found for category: ${category}`);
        }

        galleryGrid.style.opacity = '0';
        setTimeout(() => {
            galleryGrid.querySelectorAll('.gallery-item, p').forEach(item => {
                item.style.display = 'none';
            });

            if (!hasImages(category)) {
                let noImagesMessage = galleryGrid.querySelector('p');
                if (!noImagesMessage) {
                    noImagesMessage = document.createElement('p');
                    noImagesMessage.textContent = 'No images found for this category.';
                    galleryGrid.appendChild(noImagesMessage);
                }
                noImagesMessage.style.display = 'block';
                galleryGrid.style.opacity = '1';
                currentCategory = category;
                return;
            }

            let imagesToShow = category === 'all'
                ? Object.values(imageCategories).flat()
                : imageCategories[category] || [];

            imagesToShow.forEach(image => {
                const imageSrc = image.src || image;
                const altText = image.alt || `Image from ${category}`;
                const cat = category === 'all' ? getCategoryFromPath(imageSrc) : category;

                if (!galleryCache.has(imageSrc)) {
                    const galleryItem = createGalleryItem(imageSrc, cat, altText);
                    galleryCache.set(imageSrc, galleryItem);
                    galleryGrid.appendChild(galleryItem);
                }
                galleryCache.get(imageSrc).style.display = 'block';
            });

            setTimeout(() => {
                galleryGrid.style.opacity = '1';
            }, 10);

            currentCategory = category;
        }, 300);
    }

    // Hamburger menu toggle
    if (hamburger && navMenu && nav && hamburger.dataset.menuBound !== 'true') {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
            nav.style.display = body.classList.contains('menu-open') ? 'block' : '';
            hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
        });
    }

    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            nav?.classList.remove('active');
            if (nav) {
                nav.style.display = '';
            }
            body.classList.remove('menu-open');
            hamburger?.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scrolling for same-page anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const category = button.getAttribute('data-category');
            console.log(`Filter button clicked for category: ${category}`);
            populateGallery(category);
        });
    });

    if (mapButtons.length > 0) {
        // Add click event listeners to map buttons
        mapButtons.forEach(button => {
            button.addEventListener('click', () => {
                const action = button.getAttribute('data-action');
                if (action === 'zoom-in') {
                    window.location.href = 'https://poorsuply.github.io/PETA-TELUK-LOMBOK';
                    // Redirect to the map website
                }
            });
        });
    }

    // Preload images and load "all" category by default
    preloadImages();
    populateGallery('all');
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (!header) {
        return;
    }
    if (window.scrollY > 650) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll to Top Functionality
window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (!scrollToTopButton) {
        return;
    }
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
};

const scrollToTopButton = document.getElementById("scrollToTop");
if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Header scroll effect
window.addEventListener("scroll", function() {
    const header = document.getElementById('header');
    if (!header) {
        return;
    }
    if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
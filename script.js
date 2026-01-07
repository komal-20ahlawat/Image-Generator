// ================================
// ELEMENTS
// ================================
const describeBtn = document.getElementById("describeBtn");
const promptOptions = document.getElementById("promptOptions");
const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const imageSection = document.getElementById("imageSection");
const loadingText = document.getElementById("loadingText");
const themeToggle = document.getElementById("themeToggle");

// ================================
// FIXED IMAGE DATA (YOU CAN CHANGE)
// ================================
const imageData = {
sunset: [
  "https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740&q=80",
  "https://images.pexels.com/photos/221387/pexels-photo-221387.jpeg?cs=srgb&dl=pexels-pixabay-221387.jpg&fm=jpg",
  "https://i.pinimg.com/236x/cf/48/41/cf4841751961fecddc9a33153534a808.jpg", 
  "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fsunset-silhouettes-at-kozhikode-beach-1748513164_2987e02136a5f9b7c1d2.webp&w=3840&q=75", 
  "https://images.stockcake.com/public/5/5/5/55535d01-37cf-4d2d-b11b-8f78f7e62b66_large/sunset-ocean-view-stockcake.jpg", 
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/evening-dramatic-sky-with-silhouettes-of-tropical-palms-free-image.jpeg?w=600&quality=80" 
],
  nature: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",   
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",   
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",  
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",   
    "https://images.unsplash.com/photo-1470770903676-69b98201ea1c"    
],

    dogs: [
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
        "https://images.unsplash.com/photo-1517849845537-4d257902454a",
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-1108099.jpg&fm=jpg"
    ],
    space: [
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        "https://images.unsplash.com/photo-1450849608880-6f787542c88a",
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg",
        "https://t4.ftcdn.net/jpg/17/03/38/01/360_F_1703380166_mD7en8QpxpL2XHWzvYsxTOcwIl5tJauZ.jpg"
    ],
    flower: [
        "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Beautiful-Flowers.jpg.webp",
        "https://t3.ftcdn.net/jpg/06/16/34/92/360_F_616349295_hw3oZYyNeRrz2s1h2n6x5fBLwHUA4Gpw.jpg",
        "https://m.media-amazon.com/images/I/81OXEQrFPTL._AC_UF1000,1000_QL80_.jpg",
        "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
        "https://www.southsideblooms.com/wp-content/uploads/2021/12/pexels-lisa-2106037-scaled.jpg",
        "https://media.istockphoto.com/id/1130636356/photo/sunset-over-mountain-with-cosmos-blooming.webp?b=1&s=612x612&w=0&k=20&c=ELKAmDvOkIvjUyeSaKz64FO1S_e6-XCXxiGd1ifnw1A="
    ],
    cafe: [
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljJTIwY2FmZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/03/cafe-users.jpg",
        "https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/03/pexels-jason-toevs-2068296.jpg",
        "https://assets.architecturaldigest.in/photos/685d161824cf32b66072768a/4:3/w_5332,h_3999,c_limit/EDIT%201.jpg",
        "https://www.shutterstock.com/image-photo/barista-hands-over-beautifully-crafted-600nw-2393868099.jpg"
    ],
    season: [
        "https://images.pexels.com/photos/10180387/pexels-photo-10180387.jpeg",
        "https://static.vecteezy.com/system/resources/thumbnails/070/451/671/small/autumn-leaves-backlit-by-sunlight-nature-s-intricate-beauty-for-seasonal-decor-photo.jpg",
        "https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_1280.jpg",
        "https://media.istockphoto.com/id/1684876651/photo/vibrant-maple-tree-during-autumn-with-wooden-chairs-and-fallen-leaves.jpg?s=612x612&w=0&k=20&c=JXYlmlJ8RsaIzPjbXUWLxCnL2ZCQaZ-Lc9X17l99FOA=",
        "https://i0.wp.com/cms.babbel.news/wp-content/uploads/2020/09/CM_MagazineHeader_FallVsAutumn.png?fit=1200%2C675&strip=none&ssl=1"
    ]
};

// Store selected prompt key
let selectedPromptKey = "";

// ================================
// SHOW PROMPT SUGGESTIONS
// ================================
describeBtn.addEventListener("click", () => {
    promptOptions.style.display =
        promptOptions.style.display === "flex" ? "none" : "flex";
});

// ================================
// SELECT PROMPT → FILL INPUT
// ================================
promptOptions.addEventListener("click", (e) => {
    if (!e.target.dataset.prompt) return;

    selectedPromptKey = e.target.dataset.prompt;
    promptInput.value = e.target.innerText;

    // Hide prompt options after selection
    promptOptions.style.display = "none";
});

// ================================
// GENERATE IMAGES
// ================================
generateBtn.addEventListener("click", () => {
    if (!selectedPromptKey) {
        alert("Please describe what you want first ✨");
        return;
    }

    // Reset UI
    imageSection.innerHTML = "";
    loadingText.style.display = "block";

    // Fake AI delay
    setTimeout(() => {
        loadingText.style.display = "none";

        imageData[selectedPromptKey].forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = promptInput.value;
            imageSection.appendChild(img);
        });
    }, 1500);
});

// ================================
// THEME TOGGLE (DARK / LIGHT)
// ================================
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Toggle icon
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});

// Sample videos array
let videos = [
    {title: "Sample Video 1", thumbnail: "videos/thumb1.jpg", url: "video.html?v=1", desc: "This is sample video 1"},
    {title: "Sample Video 2", thumbnail: "videos/thumb2.jpg", url: "video.html?v=2", desc: "This is sample video 2"},
];

const feed = document.getElementById("video-feed");

// Render video cards
function renderVideos(filter="") {
    feed.innerHTML = "";
    videos
        .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((video, index) => {
            const card = document.createElement("div");
            card.className = "video-card";
            card.innerHTML = `
                <a href="video.html?v=${index+1}">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <h3>${video.title}</h3>
                </a>
            `;
            feed.appendChild(card);
        });
}

renderVideos();

// Search functionality
document.getElementById("search").addEventListener("input", e => {
    renderVideos(e.target.value);
});

// Theme toggle
const body = document.body;
document.getElementById("theme-toggle").addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

// Make VIDEO Modal
const modal = document.getElementById("video-modal");
document.getElementById("make-video").addEventListener("click", () => modal.style.display = "block");
document.getElementById("close-modal").addEventListener("click", () => modal.style.display = "none");

// Add new video
document.getElementById("add-video-btn").addEventListener("click", () => {
    const title = document.getElementById("new-title").value;
    const desc = document.getElementById("new-desc").value;
    const thumb = document.getElementById("new-thumb").value;
    const file = document.getElementById("new-file").value;

    if(title && thumb && file){
        videos.push({
            title: title,
            thumbnail: thumb,
            url: "video.html?v=" + (videos.length+1),
            desc: desc || "No description"
        });
        renderVideos();
        modal.style.display = "none";
        document.getElementById("new-title").value = "";
        document.getElementById("new-desc").value = "";
        document.getElementById("new-thumb").value = "";
        document.getElementById("new-file").value = "";
    }
});

// Close modal on outside click
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};

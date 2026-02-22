const videos = [
    {title: "Sample Video 1", thumbnail: "videos/thumb1.jpg", url: "video.html?v=1"},
    {title: "Sample Video 2", thumbnail: "videos/thumb2.jpg", url: "video.html?v=2"},
];

const feed = document.getElementById("video-feed");

videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
        <a href="${video.url}">
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        </a>
    `;
    feed.appendChild(card);
});

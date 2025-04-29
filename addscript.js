// JavaScript for handling the modal and navigation between images/videos
const portfolioItems = document.querySelectorAll('.portfolio-img, .portfolio-video');
const modal = document.getElementById('mediaModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalVideoSource = document.getElementById('modalVideoSource');
const closeModal = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let mediaArray = [];

// Store portfolio images and videos in the array
portfolioItems.forEach((item, index) => {
    mediaArray.push(item);
    item.addEventListener('click', () => openModal(index));
});

// Ensure only one video plays at a time
const allVideos = document.querySelectorAll('video');
allVideos.forEach((vid) => {
    vid.addEventListener('play', () => {
        allVideos.forEach((v) => {
            if (v !== vid) v.pause();
        });
    });
});

// Open modal with the selected media
function openModal(index) {
    currentIndex = index;
    const media = mediaArray[currentIndex];

    // Pause all background videos
    document.querySelectorAll('video').forEach(v => v.pause());

    modal.style.display = 'flex';

    if (media.tagName === 'IMG') {
        modalImage.src = media.src;
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (media.tagName === 'VIDEO') {
        const src = media.currentSrc || media.src || media.querySelector('source')?.src;

        modalVideoSource.src = src;
        modalVideo.load();
        modalVideo.play();

        modalImage.style.display = 'none';
        modalVideo.style.display = 'block';
    }
}

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
});

// Navigate to the previous media item
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : mediaArray.length - 1;
    openModal(currentIndex);
});

// Navigate to the next media item
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < mediaArray.length - 1) ? currentIndex + 1 : 0;
    openModal(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.portfolio-video');

    videos.forEach(video => {
        const src = video.getAttribute('data-src');
        if (!src) return;

        // Create a hidden video to load the real video file
        const tempVideo = document.createElement('video');
        tempVideo.src = src;
        tempVideo.crossOrigin = "anonymous"; // allow drawing to canvas
        tempVideo.muted = true;
        tempVideo.playsInline = true;

        tempVideo.addEventListener('loadedmetadata', () => {
            const middleTime = tempVideo.duration / 2;
            tempVideo.currentTime = middleTime;
        });

        tempVideo.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = tempVideo.videoWidth;
            canvas.height = tempVideo.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);

            // Convert frame to image URL
            const dataURL = canvas.toDataURL('image/jpeg');

            // Set it as video poster
            video.setAttribute('poster', dataURL);
        });

        tempVideo.load();
    });
});

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

// Open modal with the selected media
function openModal(index) {
    currentIndex = index;
    const media = mediaArray[currentIndex];

    modal.style.display = 'flex';

    if (media.tagName === 'IMG') {
        modalImage.src = media.src;
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (media.tagName === 'VIDEO') {
        modalVideoSource.src = media.querySelector('source').src;
        modalVideo.style.display = 'block';
        modalImage.style.display = 'none';
        modalVideo.load();
    }
}

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
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

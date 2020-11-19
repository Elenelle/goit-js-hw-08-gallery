import images from "../gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery")

const lightboxRef = document.querySelector(".js-lightbox")

const lightboxContentImgRef = document.querySelector(".lightbox__image")


const closeModalBtn = document.querySelector(
    "button[data-action='close-lightbox']"
)

const overlay = document.querySelector(".lightbox__overlay")

const itemsMarkup = createGalleryItemsMarkup(images)

let currentImg;

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

galleryContainer.addEventListener("click", onImgClick);
closeModalBtn.addEventListener("click", onCloseModal);
overlay.addEventListener("click", () => onCloseModal());

// Cоздание разметки
function createGalleryItemsMarkup(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
  >
    <img
    class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </li>
      `;
        })
        .join("");
}

// Реализация делегирования
function onImgClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }

    currentImg = e.target;

    e.preventDefault();
    addLightboxContent(currentImg);
    onOpenModal();
}

// Открытие модального окна по клику на элементе галереи
function onOpenModal() {
    lightboxRef.classList.add("is-open");
    document.addEventListener("keydown", onEscKeyPress);
    document.addEventListener("keyup", imageArrowsFlipping);
}

// Закрытие модального окна
function onCloseModal() {
    lightboxRef.classList.remove("is-open");
    document.removeEventListener("keydown", onEscKeyPress);
    document.removeEventListener("keyup", imageArrowsFlipping);
}

// Добавление url изображения в модалку
function addLightboxContent(url) {
    if (lightboxContentImgRef.src !== "") {
        lightboxContentImgRef.src = "";
    }
    lightboxContentImgRef.src = url.dataset.source;
    lightboxContentImgRef.alt = url.alt;
}

// Закрытие по ESC
function onEscKeyPress(e) {
    const ESC_KEY_CODE = "Escape";
    if (e.code === ESC_KEY_CODE) {
        onCloseModal();
    }
}

// Перелистывание срелками
function imageArrowsFlipping(e) {
    const parrent = currentImg.closest("li");

    if (e.code === "ArrowRight") {
        onNextKeyPress(parrent);
    } else if (e.code === "ArrowLeft") {
        onPrevKeyPress(parrent);
    }
}

function onNextKeyPress(parrent) {
    currentImg = parrent.nextElementSibling.querySelector("img");
    addLightboxContent(currentImg);
}

function onPrevKeyPress(parrent) {
    currentImg = parrent.previousElementSibling.querySelector("img");
    addLightboxContent(currentImg);
}
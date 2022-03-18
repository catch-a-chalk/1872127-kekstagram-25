import {isEscapeKey, isEnterKey} from "./util";
import {renderPhotos, clearPhotos} from './render.js';

const pageBody = document.querySelector('body');
const photoProcessing = document.querySelector('.img-upload__overlay');
const photoProcessingOpen = document.querySelector('#upload-file');
const photoProcessingClose = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

function openPhotoModal () { 
  photoProcessing.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  renderPhotos();

  // обработчик закрытия при нажатии ESC
  document.addEventListener('keydown', onPopupEscKeydown);
};

function closePhotoModal () { 
  photoProcessing.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  clearPhotos();

  document.removeEventListener('keydown', onPopupEscKeydown);
};

// обработчик открытия:
photoProcessingOpen.addEventListener('click', () => {
  openPhotoModal();
});

// обработчик открытия при нажатии ENTER
photoProcessingOpen.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openPhotoModal();
  }
});

// обработчик закрытия:
photoProcessingClose.addEventListener('click', () => {
  openPhotoModal();
});

// обработчик закрытия при нажатии ENTER
photoProcessingClose.addEventListener('keydown', function (evt) {
  if (isEnterKey(evt)) {
    openPhotoModal();
  }
});

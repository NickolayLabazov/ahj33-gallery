import Image from './imageclass.js';

export default class Gallery {
  constructor() {
    this.galleryForm = 0;
    this.name = 0;
    this.link = 0;
    this.button = 0;
  }

  galleryCreate() {
    this.galleryForm = document.createElement('form');
    const labelName = document.createElement('label');
    this.name = document.createElement('input');
    const labelLink = document.createElement('label');
    this.link = document.createElement('input');
    this.button = document.createElement('button');
    document.body.appendChild(this.galleryForm);
    labelName.innerHTML = 'Название';
    labelLink.innerHTML = 'Ссылка на изображение';
    labelName.appendChild(this.name);
    labelLink.appendChild(this.link);
    labelName.classList.add('lab');
    labelLink.classList.add('lab');
    this.galleryForm.appendChild(labelName);
    this.galleryForm.appendChild(labelLink);
    this.galleryForm.appendChild(this.button);
    this.button.innerHTML = 'Добавить';
    this.galleryForm.classList.add('galleryForm');
    this.name.classList.add('input');
    this.link.classList.add('input');
    this.button.classList.add('button');
    this.inputLisstener();
    this.buttonLisstener();
  }

  inputLisstener() {
    this.name.addEventListener('keydown', (event) => {
      this.removeMesage(this.galleryForm);
      if (event.keyCode === 13) {
        event.preventDefault();
        this.startLoad();
      }
    });

    this.link.addEventListener('keydown', (event) => {
      this.removeMesage(this.galleryForm);
      if (event.keyCode === 13) {
        event.preventDefault();
        this.startLoad();
      }
    });
  }

  buttonLisstener() {
    this.button.addEventListener('click', () => {
      event.preventDefault();
      this.removeMesage(this.galleryForm);
      this.startLoad();
    });
  }

  startLoad() {
    if (this.name.value === '') {
      Gallery.insertMesage(this.galleryForm, 'Введите название изображения');
    } else if (this.link.value === '') {
      Gallery.insertMesage(this.galleryForm, 'Введите ссылку на изображение');
    } else {
      const img = new Image(this.name.value, this.link.value, this.galleryForm);
      img.addImg();

      if (img.loadError) {
        alert('Ошибка загрузки');
        Gallery.insertMesage(this.link, 'Ошибка загрузки');
      }
    }
    this.name.value = '';
    this.link.value = '';
  }

  static insertMesage(div, mes) {
    const mesage = document.createElement('p');
    mesage.innerHTML = mes;
    mesage.setAttribute('id', 'mesage');
    div.appendChild(mesage);
  }

  removeMesage(parent) {
    const mes = document.querySelector('#mesage');
    if (mes != null) {
      parent.removeChild(mes);
    }
  }
}
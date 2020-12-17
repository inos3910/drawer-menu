import Utils from './utils';
export class Main extends Utils {
  constructor() {
    super();
    this.body = document.getElementById('js-body');
  }

 /*
  * メニュー開閉
  */
  toggleMenu() {
    this.body.classList.toggle('is-menu-active');
  }

  /*
  * メニュー開く
  */
  openMenu() {
    this.body.classList.add('is-menu-active');
  }

  /*
  * メニュー閉じる
  */
  closeMenu() {
    this.body.classList.remove('is-menu-active');
  }

}

export default Main;
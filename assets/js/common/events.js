import Main from './main';
class Events extends Main {
  constructor() {
    super();

    this.bind();
  }

  /*
  * クリックとタップを分ける
  * @param {Object} target ターゲット要素
  * @param {Number} func 実行する関数
  */
  touchEventHandler(target, func){
    const firstLetter = target.slice(0, 1);
    const isID        = firstLetter === '#';
    const isClass     = firstLetter === '.';
    const targetName  = target.slice(1);

    const $target = document.querySelector(target);
    if(!$target){
      return;
    }

    $target.addEventListener('click', (e) => {
      if(this.isTouch){
        return;
      }

      const self = e.target || e.srcElement;
      if(isID && self.id !== targetName){
        return;
      }

      if(isClass && !self.classList.contains(targetName)){
        return;
      }

      func(e);
    },{passive: false});

    $target.addEventListener('touchstart', (e) => {
      if(!this.isTouch){
        return;
      }

      const self = e.target || e.srcElement;
      if(isID && self.id !== targetName){
        return;
      }

      if(isClass && !self.classList.contains(targetName)){
        return;
      }

      func(e);
    },{passive: false});
  }

  bind() {
    //ドロワーメニューを開く
    this.touchEventHandler('#js-menu-btn', (e) => {
      if(e.cancelable){
        e.preventDefault();
      }
      this.toggleMenu();
    });

    //ドロワーメニューを閉じる
    this.touchEventHandler('.js-menu-close', (e) => {
      if(e.cancelable){
        e.preventDefault();
      }
      this.closeMenu();
    });


  }
}

export default Events;
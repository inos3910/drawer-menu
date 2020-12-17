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
  touchEventHandler(targetName, func){
    const $target = document.querySelector(targetName);
    if(!$target){
      return;
    }

    $target.addEventListener('click', (e) => {
      if(this.isTouch){
        return;
      }

      func(e);
    },{passive: false});

    $target.addEventListener('touchstart', (e) => {
      if(!this.isTouch){
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
  }
}

export default Events;
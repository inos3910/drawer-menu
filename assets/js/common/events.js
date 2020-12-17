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

   /*
  * 複数要素のクリックとタップを分ける
  * @param {Object} target ターゲット要素
  * @param {Number} func 実行する関数
  */
  multipleTouchEventHandler(targetName, func){
    const $targets = document.querySelectorAll(targetName);
    [...$targets].forEach(target => {
      target.addEventListener('click', (e) => {
        if(this.isTouch){
          return;
        }

        func(e);
      },{passive: false});

      target.addEventListener('touchstart', (e) => {
        if(!this.isTouch){
          return;
        }

        func(e);
      },{passive: false});
    });
  }

  bind() {

    //スマホ：メニュ-閉じる
    this.multipleTouchEventHandler('#js-menu-btn', (e) => {
      if(e.cancelable){
        e.preventDefault();
      }
      this.toggleMenu();
    });

    //スマホ：メニューボタンタップ
    // document.addEventListener('click', (e) => {
    //   if(this.isTouch){
    //     return;
    //   }

    //   const self = e.target || e.srcElement;
    //   if(self.id !== 'js-menu-btn'){
    //     return;
    //   }

    //   if(e.cancelable){
    //     e.preventDefault();
    //   }

    //   this.toggleMenu();
    // },{passive: false});

    // document.addEventListener('touchstart', (e) => {
    //   if(!this.isTouch){
    //     return;
    //   }

    //   const self = e.target || e.srcElement;
    //   if(self.id !== 'js-menu-btn'){
    //     return;
    //   }

    //   if(e.cancelable){
    //     e.preventDefault();
    //   }

    //   this.toggleMenu();
    // },{passive: false});

    //スマホ：メニュー閉じる
    // document.addEventListener('click', (e) => {
    //   if(this.isTouch){
    //     return;
    //   }

    //   const self = e.target || e.srcElement;
    //   if(!self.classList.contains('js-menu-close')){
    //     return;
    //   }

    //   if(e.cancelable){
    //     e.preventDefault();
    //   }

    //   this.closeMenu();
    // },{passive: false});

    // document.addEventListener('touchstart', (e) => {
    //   if(!this.isTouch){
    //     return;
    //   }

    //   const self = e.target || e.srcElement;
    //   if(!self.classList.contains('js-menu-close')){
    //     return;
    //   }

    //   if(e.cancelable){
    //     e.preventDefault();
    //   }

    //   this.closeMenu();
    // },{passive: false});
  }
}

export default Events;
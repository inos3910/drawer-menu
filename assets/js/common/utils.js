export class Utils {
  constructor() {
    this.isTouch = this.isTouchDevice();
  }

  //タッチデバイス判定
  isTouchDevice() {
    const touchEvent = window.ontouchstart;
    const touchPoints = navigator.maxTouchPoints;

    if (touchEvent !== undefined && 0 < touchPoints) {
      return true;
    }

    return false;
  }

}

export default Utils;
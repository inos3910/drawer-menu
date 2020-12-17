export class Utils {
  constructor() {
    this.isTouch = this.isTouchDevice();
  }

  //タッチデバイス判定
  isTouchDevice() {
    const isTouch  = ('ontouchstart' in document) && ('orientation' in window);
    const isSp     = this.isSp();
    const isTablet = this.isTablet();
    return isTouch && (isSp || isTablet);
  }

  //スマホ判定
  isSp() {
    const ua = navigator.userAgent;
    const isSp = (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0) && (ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0);
    return isSp;
  }

  //タブレット判定
  isTablet() {
    const ua = navigator.userAgent;
    const isSp = this.isSp();
    if(isSp){
      return false;
    }
    //タブレットの場合
    else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
      return true;
    }
    else{
      return false;
    }
  }

  //PC判定
  isPC() {
    return !(this.isSp() || this.isTablet());
  }

  //各デバイス判定
  device() {
    return {
      isSp     : this.isSp(),
      isTablet : this.isTablet(),
      isPC     : this.isPC()
    };
  }

  //IE・Edge判定
  isIE() {
    const ua = navigator.userAgent.toLowerCase();
    const isIE = (ua.indexOf('msie') > -1 || ua.indexOf('trident') > -1 || ua.indexOf('edge') > -1);
    return isIE;
  }
}

export default Utils;
<?php
/**
* ------------------------//
* fileName  : index.php
* content   : position:fixed;した要素でtouchイベントが時々反応しなくなる不具合のデモ
* updated   : 2020-12-17 12:45:16
* version   : 1.0
* ------------------------//
**/
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex,nofollow">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="format-detection" content="telephone=no, email=no, address=no">
  <title>position:fixed;した要素でtouchイベントが時々反応しなくなる不具合のデモ</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body id="js-body">
  <div class="l-cover">
    <header class="l-header">
      <div class="l-header__inner u-frame">
        <h1 class="l-header__logo">LOGO</h1>
        <button class="l-header__button" type="button" id="js-menu-btn">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
      </div>
      <!-- /.l-header__inner -->
      <nav class="c-menu">
        <div class="c-menu__inner u-frame">
          <a href="./">HOME</a>
          <a href="./">ABOUT</a>
          <a href="./">BLOG</a>
          <a href="./">CONTACT</a>
        </div>
        <!-- /.c-menu__inner -->
      </nav>
      <!-- /.c-menu -->
    </header>
    <!-- /.l-header -->
    <main class="l-main">
      <div class="l-main__inner u-frame">
        <?php
        for ($i=1; $i <= 36 ; $i++) {
          ?>
          <div class="c-item">
            <div class="c-item__visual"></div>
            <div class="c-item__title">ITEM <?php echo $i?></div>
            <div class="c-item__description">Item Description <?php echo $i?>.</div>
          </div>
          <?php
        }
        ?>
      </div>
      <!-- /.l-main__inner -->
    </main>
    <!-- /.l-main -->
    <footer class="l-footer">
      <div class="l-footer__inner u-frame">
        <p>footer</p>
      </div>
      <!-- /.l-footer__inner -->
    </footer>
    <!-- /.l-footer -->
  </div>
  <!-- /.l-cover -->
  <script src="assets/dist/common.bundle.js" async></script>
</body>

</html>
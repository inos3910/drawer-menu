# CSSと簡単なJSでできるドロワーメニューの実装方法のデモ

## ブログ記事
[https://notes.sharesl.net/articles/1925/](https://notes.sharesl.net/articles/1925/)

## 環境
- node v14.5.0
- gulp 4.0.2
  - sassコンパイル
  - image 圧縮
  - svg 最適化
- webpack 5.9.0
  - js バンドル 圧縮 最適化
- babel 7.11.1
  - js es6最適化
- browserSync
  - ライブリロード

## メモ
- タスクランナーはテーマに設置してあるのでテーマディレクトリで起動する
- `sudo yarn` or `npm install`で環境作成
- node_modulesがpermission errorの場合は `sudo chmod 777 [node_modulesのパス]`で権限を変更すればOK

### npm scripts
- `npm run dev` or `yarn dev` 開発モードでビルド
- `npm run build` or `yarn build` 本番モードでビルド
- `npm run imagemin` or `yarn imagemin` 画像圧縮
- `npm run sprite` or `yarn sprite` スプライト画像の生成
- `npm run spritemin` or `yarn spritemin`スプライト画像の圧縮

### gulp タスク
- `npx gulp` or `yarn gulp` gulp起動
- `npx gulp imagemin` or `yarn gulp imagemin` 画像圧縮
- `npx gulp sprite` or `yarn gulp  sprite` スプライト画像の生成
- `npx gulp spritemin` or `yarngulp  spritemin` スプライト画像の圧縮

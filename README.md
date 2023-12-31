# Reactで作成した席替えアプリ
Ver 2.1 (2023/12月時点)
- 縦1\~15名横1\~10名の最大150人まで利用可能な席替えをするためのWebアプリ

- 作成したサイト：https://iso1216.github.io/seat-allocation-app/

## 概要
- プロダクト名：seat-allocation-app
- 使用言語：JavaScript(React)、HTML/CSS
- 開発環境：VSCode
- CSS設計：MUIを使用(使いやすく、シンプルな見た目で作成がしやすい為)

## サイト内容
- 上記URLからアプリにアクセスしていただき、最初の画面で縦横の幅を選択してください。
- テンプレートを作成を押していただくと、設定した縦横幅の座席テンプレートが出力されます。
- 出力された座席のテンプレートから利用しない座席を選択していただき、席替えボタンを押してください。
  - 利用しない選択された座席はグレーに変わります。
- 席替えボタンを押した後Loadingを挟み、席替えが完了した座席が出力されます。
- 最初の画面に戻るボタンを押すと、最初の画面に戻ります。
- 再実行ボタンを押すと、再度同じ条件のもと席替えが行われます。

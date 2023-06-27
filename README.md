# Reactで作成した席替えアプリ

縦8名横7名の最大56人まで利用可能な席替えをするためのWebアプリ

## 利用方法

<a target="_blank" href="https://iso1216.github.io/seat-allocation-app/">https://iso1216.github.io/seat-allocation-app/</a>
<li>上記ページにアクセスしていただくと、縦8×横7マスの表と席替え・初期化のボタンが表示されます</li>
<li>各マス一つ一つが座席となっており、それぞれクリックすると白からグレーに色がかわります</li>
<li>色がグレーになっている座席が利用しないものとして扱われます</li>

### 席替えの流れ
<ol>
<li>利用する座席の選択後、「席替え」ボタンを押すことで席替えが開始されます</li>
<li>席替え開始後Loading画面に移り変わりその後、利用する各マスに1から利用座席数までの数値がランダムに割り当てられます</li>
<li>再度「席替え」ボタンを押すと、①で選択したものと同じ配置で席替えが行われます</li>
<li>「初期化」ボタンを押すと、再度利用する座席の指定から行えます</li>
</ol>

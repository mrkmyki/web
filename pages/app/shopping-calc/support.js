import Breadcrumbs from '../../../components/breadcrumbs'

const Paths = [
  { href: '/', label: 'ホーム' },
];

export default function ShoppingCalocPage() {
    return (
      <>
          <Breadcrumbs paths={Paths} />
      <div className="container my-4">
        <h1 className="display-2 text-center text-primary">かんたん合計金額</h1>
        <p className="lead text-center">こちらは「かんたん合計金額」アプリのサポートページです。</p>
        <img src="/images/shopping-calc-feature.jpg" className="img-fluid rounded mx-auto d-block" alt="かんたん合計金額" width="300" height="300" />
  
        <h2 className="display-4 text-secondary my-4">アプリ概要</h2>
        <p>シンプルで直感的に使えるお買い物計算アプリ。</p>
        <p>お買い物の間に追加した商品の合計金額をすぐに計算します。</p>
        <p>余計な機能は省いて、起動してすぐに計算できます。</p>
        <p>リセットも一瞬で可能。これでお買い物中の計算が手間なく、快適になります。</p>
  
        <h2 className="display-4 text-secondary my-4">お問い合わせ等</h2>
        <p>・<a href="./privacy-policy" className="text-decoration-none">プライバシーポリシー</a></p>
        <p>・<a href="https://forms.gle/zPiqK2VwUjyn2zUF7" target="_blank" className="text-decoration-none">お問い合わせ</a></p>
      </div>
      </>

    );
  }

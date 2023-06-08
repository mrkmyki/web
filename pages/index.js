import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="my-4 display-2 text-center text-primary">Yukiのページへようこそ</h1>
      <p className="lead text-center">Yukiが個人で開発しているアプリやプロダクトを紹介するページです。</p>
      <h2 className="my-4 display-4 text-secondary">プロダクト</h2>
      <ul className="list-group">
        <li>
          <Link className="list-group-item list-group-item-action" href="/app/shopping-calc/support">かんたん合計金額</Link>
        </li>
      </ul>
    </div>
  );
}


import Head from 'next/head';
import styles from '../../../styles/privacy-policy.module.css';
import Breadcrumbs from '../../../components/breadcrumbs'

const Paths = [
    { href: '/', label: 'ホーム' },
    { href: '/app/shopping-calc/support', label: 'かんたん合計金額' },
];

  export default function PrivacyPolicy() {
  return (
    <>
    <Breadcrumbs paths={Paths} />
      <div className={styles.container}>
        <h1 className={styles.heading}>「かんたん合計金額」アプリのプライバシーポリシー</h1>
        <p>
          私たちは、ユーザーのプライバシーを尊重することをお約束します。このプライバシーポリシーでは、私たちが収集する個人情報の種類、その情報を使用する方法、およびその情報を共有する方法について説明します。
        </p>
        <p>私たちは、お買い物計算アプリの使用中に次の個人情報を収集する場合があります。</p>
        <ul>
          <li>デバイスの種類、オペレーティングシステム、および言語などのデバイス情報。</li>
          <li>アプリの使用状況に関する情報、たとえば、どの機能が使用されているか、どのページが閲覧されているかなど。</li>
        </ul>
        <p>私たちは、次の目的で個人情報を収集します。</p>
        <ul>
          <li>お買い物計算アプリを提供および維持する。</li>
          <li>アプリの機能とパフォーマンスを改善する。</li>
          <li>アプリの使用状況に関する統計を収集する。</li>
          <li>法律で要求または許可されている場合、または私たちの権利を保護するために必要な場合、個人情報を共有する。</li>
        </ul>
        <p>ユーザーは、いつでも個人情報の収集をオプトアウトできます。これを行うには、アプリをアンインストールしてください。</p>
        <p>私たちは、個人情報を保護するための技術的および組織的対策を講じています。これらの対策には、データの暗号化、物理的なセキュリティ対策、およびアクセス制御が含まれます。</p>
        <p>私たちは、個人情報の取り扱い方針を随時変更する場合があります。このプライバシーポリシーに変更を加える場合は、このページに変更を掲載し、変更の有効日を記載します。変更は、変更の掲載日から有効となります。</p>
        <p>このプライバシーポリシーについてご不明な点がございましたら、お気軽にお問い合わせください。</p>
        <p className={styles.footer}>2023年5月14日 yuki apps</p>
        <p className={styles.footer}>email: yukiapps644@gmail.com</p>
      </div>
    </>
  );
}

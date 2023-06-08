import Link from 'next/link';
import styles from '../styles/breadcrumbs.module.css';

export default function Breadcrumbs({ paths }) {
  return (
    <div className={styles.container}>
      {paths.map((path, index) => (
        <dev key={index}>
          <Link href={path.href}>
            {path.label}
          </Link>
          {index < paths.length - 1 && <span> &gt; </span>}
        </dev>
      ))}
    </div>
  );
}

import Link from 'next/link'

export default () =>
  <>
    <p>This page is served by the index function.</p>
    <ul>
      <li>
        <Link href='/nextjs'>Why NextJS?</Link>
      </li>
      <li>
        <Link href='/serverless'>Why serverless mode?</Link>
      </li>
      <li>
        <Link href='/firebase'>Why Firebase Functions?</Link>
      </li>
    </ul>
  </>

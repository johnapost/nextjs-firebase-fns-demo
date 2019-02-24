import Link from 'next/link'

export default () =>
  <ul>
    <li>
      <Link href='/'><a>Home</a></Link>
    </li>
    <li>
      <Link href='/nextjs'><a>Why NextJS?</a></Link>
    </li>
    <li>
      <Link href='/serverless'><a>Why serverless mode?</a></Link>
    </li>
    <li>
      <Link href='/firebase'><a>Why Firebase Functions?</a></Link>
    </li>
  </ul>

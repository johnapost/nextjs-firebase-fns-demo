import Link from 'next/link'

export default () =>
  <>
    <p>This page is served by the serverless function.</p>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/nextjs'>Why NextJS?</Link>
      </li>
      <li>
        <Link href='/firebase'>Why Firebase Functions?</Link>
      </li>
    </ul>
    <p>
      Pay for the computing that you use. Scale your app without being stuck in the infrastructure weeds. It's a great choice to handle future traffic with little upfront investment.
    </p>
  </>

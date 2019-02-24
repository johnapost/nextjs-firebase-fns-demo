import Link from 'next/link'

export default () =>
<>
    <p>This page is served by the nextjs function.</p>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/serverless'>Why serverless mode?</Link>
      </li>
      <li>
        <Link href='/firebase'>Why Firebase Functions?</Link>
      </li>
    </ul>
    <p>
      NextJS is a React framework optimized out of the box for server-side rendering, which is extremely important for SEO visibility. It also handles routing and server-side logic in a smart way. Check out the project for a detailed overview.
    </p>
  </>

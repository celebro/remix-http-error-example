import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/example">Exception in loader, works as expected</Link>
        </li>
        <li>
          <Link to="/example?httpError">Forced http error, produces empty route instead</Link>
        </li>
      </ul>
    </div>
  );
}

import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout():JSX.Element{
  return(
    <Fragment>
      <header>
        <h1>Test</h1>

        <nav>
          <Link to='/' title='/'>
            Main
          </Link>{'  '}
          &bull;{'  '}
          <Link to='notfound' title='404'>
            Not Found 404
          </Link>{'  '}
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default Layout;

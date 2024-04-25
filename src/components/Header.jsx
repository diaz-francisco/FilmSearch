export default function Header() {
  return (
    <>
      <header className="primary-header flex">
        <nav>
          <ul className="nav-bar flex">
            <li>
              <a className="logo">
                <img alt="film logo" src="icon.png"></img>
              </a>
            </li>
            <li>
              <a className="link" target="_blank">
                Fylm
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

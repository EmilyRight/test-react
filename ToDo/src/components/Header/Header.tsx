import "./Header.scss";

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Todo app</h1>
      <div className='header__calendar-icon'>
        <img src='./src/assets/images/calendar.png' alt='' />
      </div>
    </header>
  );
}

export default Header;

import "./Footer.scss";

type FooterProps = {
  filterTodos: () => void;
  showAllTodos: () => void;
};

function Footer({ filterTodos, showAllTodos }: FooterProps) {
  return (
    <footer className='footer'>
      <div className='footer__btn-block sort'>
        <button
          className='sort__choose-all-button sort-all sort-button'
          onClick={() => showAllTodos()}
        >
          <img
            className='sort-all__image'
            src='../src/assets/images/Playlist.svg'
            alt=''
          />
          <div className='sort-all__text sort-text'>All</div>
        </button>
        <button
          className='sort__choose-completed-button sort-completed sort-button'
          onClick={() => filterTodos()}
        >
          <img
            className='sort-completed__image'
            src='../src/assets/images/Tick.svg'
            alt=''
          />
          <div className='sort-completed__text sort-text'>Completed</div>
        </button>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import "./PageHeader.scss";

type PageHeader = {
  title: string;
};

function PageHeader({ title }: PageHeader) {
  return (
    <div className='page-header'>
      <Link to={"/"}>
        <img src='../src/assets/images/BackPage.svg' alt='' />
      </Link>
      <div className='page-header__title'>{title}</div>
    </div>
  );
}

export default PageHeader;

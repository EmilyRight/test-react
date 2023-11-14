import Form from "../../components/Form/Form";
import "./AddPage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

function AddPage() {
  return (
    <div className='add-page'>
      <PageHeader title='Add Task' />
      <Form formClassName='add' sourcePage='add-page' />
    </div>
  );
}

export default AddPage;

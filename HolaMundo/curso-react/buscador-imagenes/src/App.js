import { Formik, Form, Field } from 'formik';
import './header.css';

const App = () => {
  return (
    <div>
      <header>
        <Formik
        initialValues={{ search: '' }}
        onSubmit={async (values) => {
           //lamar a la api de unsplash
        }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './header.css';
import './content.css';
import './article.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url) => window.open(url);
  return (
    <div>
      <header>
        <Formik
        initialValues={{ search: '' }}
        onSubmit={async (values) => {
           //lamar a la api de unsplash
           
           const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
             headers: {
             'Authorization': 'Client-ID ANDOK5hRNP_y3OMLVx1xHSifG4oHvON8zeimMThJ4_c'
             }
           })
           const data = await response.json()
           setPhotos(data.results);
           console.log(photos);
        }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo => 
          <article key={photo.id} onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular} />
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>)}
        </div>
      </div>
    </div>
  );
}

export default App;

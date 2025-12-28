//define the router for our app
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';


function App() {

  return (
    <>
    <BrowserRouter> {/*define the routes inside of it*/}
      <Routes> {/*define routes components, which I only have 2 (main page and form)*/}
        <Route index element={<Home />} /> {/*route for the main page, imported from home.jsx*/}
        <Route path='*' element={<NotFound />} /> {/*this notfound path has to be the last one to be defined, which means after defining all
        pages before (only home in this case) it will default to my NotFound page*/}

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;

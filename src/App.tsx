import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import Profile from '../src/views/Profile';
import Upload from '../src/views/Upload';
import Layout from './components/Layout';
import Single from '../src/views/Signle';
import Example from './views/Example';

const App = () => {
  return (
    <>
<BrowserRouter basename={import.meta.env.BASE_URL}>

      {/* <BrowserRouter> */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single" element={<Single />} />
            <Route path="/example" element={<Example />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import './assets/css/App.scss';
import './utils/print'

import Header from './components/common/Header/Header'
import Section from './components/common/Section/Section'
import Footer from './components/common/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;

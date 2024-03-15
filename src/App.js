import './App.css';
import News from './components/news/news';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Shop from './components/shop/shop';
import Advisory from './components/advisory/advisory';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Footer />
      <Shop />
      <Advisory />
      <Contact />
    </div>
  );
}

export default App;

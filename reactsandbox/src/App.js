import './App.css';
import Header from './components/Header';
import FadeIn from 'utils/FadeIn';

function App() {

  return (
    <>
      <FadeIn duration={4500} delay={250}>
        <Header/>
      </FadeIn>
    </>
  );
}

export default App;

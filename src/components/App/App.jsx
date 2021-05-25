import Header from 'components/Header';
import Main from 'components/Main';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';

const App = () => {
  return (
    <>
      <Header children="NAV"/>
      <Main>
        <Spinner />
      </Main>
      <Footer />
    </>
  );
}

export default App;

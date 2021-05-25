import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Main from 'components/Main';
import NotFoundView from 'views/NotFoundView';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';

const ContentView = lazy(() =>
  import('views/ContentView' /* webpackChunkName: "ContentView" */),
);

const App = () => {
  return (
    <>      
      <Header children="NAV"/>
      <Main>

        <Suspense fallback={<Spinner />}>

          <Switch>
            <Route path="/" exact>
              <ContentView />
            </Route>
            
            <Route >
              <NotFoundView />
            </Route>
          </Switch>
                    
        </Suspense>
        
      </Main>
      <Footer />
    </>
  );
}

export default App;

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import Test from './Test';
import { store } from './store';

const App = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state);
  return (
    <Provider store={store}>
      <div>
        Welcome to Host App
        {/* {JSON.stringify(state)} */}
        <Test/>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

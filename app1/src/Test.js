import React, {Suspense} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import {store} from './store'

// const dynamicFederation = async (scope, module) => {
//   const container = window[scope]; // or get the container somewhere else
//   // Initialize the container, it may provide shared modules
//   await container.init(__webpack_share_scopes__.default);
//   return container.get(module).then(factory => {
//     const Module = factory();
//     return Module;
//   });
// };

// const RemoteApp = React.lazy(() => dynamicFederation('app2', './RemoteApp'));

const RemoteApp = React.lazy(() => import("app2/RemoteApp"));


const Test = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  return (
    <>
    {JSON.stringify(state)}
    <div>
          <Suspense fallback="Loading...">
            <RemoteApp store={store} />
          </Suspense>
        </div>
    </>
  )
}
export default Test;
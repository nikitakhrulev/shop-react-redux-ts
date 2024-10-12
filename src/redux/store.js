import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './root-reducer';
import { logger } from 'redux-logger'




const middleware = [];
if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
    console.log(middleware);
  }

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware, thunk),
    )
)

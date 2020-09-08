import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from "./user/reducers"
import { imagestoreReducer } from "./imagestore/reducers";
import { newsReducer } from "./news/reducers"
import { messageReducer } from "./message/reducers"

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  imagestore: imagestoreReducer,
  message: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware()
    )
  );
  return store;
}
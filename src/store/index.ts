import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from "./user/reducers"
import { newsReducer } from "./news/reducers"

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer
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
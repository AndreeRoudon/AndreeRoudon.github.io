import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./app/routes/rooter.tsx";
import './sass/main.scss';
import {store} from "./app/core/store/store.ts";
import {Provider} from "react-redux";

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <Provider store={store}>
            <RouterProvider router={router}/>
          </Provider>
        </React.StrictMode>,
    );
}

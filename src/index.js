import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//=======================================================================================================//


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//     createBrowserRouter, createRoutesFromElements, Route,
//     RouterProvider,
// } from "react-router-dom";
//
// import ErrorPage from "./error-page";
//
// import Main from "./main/Main";
// import Skills from "./skills/Skills";
// import Projects from "./projects/Projects";
// import Contacts from "./contacts/contacts";
// import Root from "./root/root";

// const router = createBrowserRouter([
//     {
//         path: "/portfolio/",
//         element: <Root />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 errorElement: <ErrorPage />,
//                 children: [
//                     // { index: true, element: <Index /> },
//                     {
//                         path: '',
//                         element: <Main />,
//                     },
//                     {
//                         path: "skills",
//                         element: <Skills />,
//                     },
//                     {
//                         path: "projects",
//                         element: <Projects />,
//                     },
//                     {
//                         path: "contacts",
//                         element: <Contacts />,
//                     },
//                 ],
//             }
//         ]
//     },
// ]);

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route
//             path="/portfolio/"
//             element={<Root/>}
//             // errorElement={<ErrorPage/>}
//         >
//             <Route
//                 path=""
//                 element={<Main/>}
//             />
//             <Route
//                 path="skills"
//                 element={<Skills/>}
//             />
//             <Route
//                 path="projects"
//                 element={<Projects/>}
//             />
//             <Route
//                 path="contacts"
//                 element={<Contacts/>}
//             />
//         </Route>
//     )
// );
//
//
//
//
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );

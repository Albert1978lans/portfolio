import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, {
    loader as rootLoader,
    action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";

import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/contacts";

// const router = createBrowserRouter([
//     {
//         path: "/portfolio/",
//         element: <Root />,
//         errorElement: <ErrorPage />,
//         loader: rootLoader,
//         action: rootAction,
//         children: [
//             {
//                 errorElement: <ErrorPage />,
//                 children: [
//                     // { index: true, element: <Index /> },
//                     {
//                         path: "portfolio/",
//                         element: <Main />,
//                     },
//                     {
//                         path: "/skills",
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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/portfolio/"
            element={<Root/>}
            errorElement={<ErrorPage/>}
        >
            <Route
                path=""
                element={<Main/>}
            />
            <Route
                path="skills"
                element={<Skills/>}
            />
            <Route
                path="projects"
                element={<Projects/>}
            />
            <Route
                path="contacts"
                element={<Contacts/>}
            />
        </Route>
    )
);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// children: [
//     {
//         errorElement: <ErrorPage />,
//         children: [
//             { index: true, element: <Index /> },
//             {
//                 path: "contacts/:contactId",
//                 element: <Contact />,
//                 loader: contactLoader,
//                 action: contactAction,
//             },
//             {
//                 path: "contacts/:contactId/edit",
//                 element: <EditContact />,
//                 loader: contactLoader,
//                 action: editAction,
//             },
//             {
//                 path: "contacts/:contactId/destroy",
//                 action: destroyAction,
//                 errorElement: <div>Oops! There was an error.</div>,
//             },
//         ],
//     }
// ]
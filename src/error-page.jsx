import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    console.log(error.statusText)

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

// #error-page {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
// }
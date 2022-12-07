import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oh no!</h1>
      <p>An unexpected error has occurred:</p>
      <i>{isRouteErrorResponse(error) && error.statusText}</i>
    </div>
  )
}
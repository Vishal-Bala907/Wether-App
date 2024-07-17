export default function ErrorPage() {
  return (
    <div className="bg-light-gray d-flex align-items-center">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-1">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-4">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <a href="/" className="btn btn-primary">
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

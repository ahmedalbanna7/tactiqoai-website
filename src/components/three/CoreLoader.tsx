export function CoreLoader() {
  return (
    <div className="core-loader" aria-hidden="true">
      <span className="core-loader__ring" />
      <span className="core-loader__pulse" />
      <small>Initializing Intelligence</small>
    </div>
  );
}

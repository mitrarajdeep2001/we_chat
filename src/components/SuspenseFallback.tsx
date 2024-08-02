function SuspenseFallback() {
  return (
    <div className="suspense">
      <div className="suspense-text">
        <h1 className="text-3xl font-bold">WeChat</h1>
        <span className="text-sm">Chat anytime, anywhere</span>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default SuspenseFallback;

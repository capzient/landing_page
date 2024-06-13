const WithRedRect = ({ children }) => (
  <div className="flex items-end">
    <div>{children}</div>
    <div className={`text-red-500 dot`}>.</div>
  </div>
);
export default WithRedRect;

const WithRedRect = ({ children }) => (
  <span className="flex items-end">
    <span>{children}</span>
    <span className={`text-red-500 dot`}>.</span>
  </span>
);
export default WithRedRect;

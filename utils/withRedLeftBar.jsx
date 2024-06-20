export const WithRedLeftBar = ({ children, width }) => (
  <div className="flex">
    <div className="bg-red-500 mr-[50px]" style={{ width: `${width}px` }}></div>
    {children}
  </div>
);

export const WithRedTopBar = ({ children, width }) => (
  <div className="flex flex-col">
    <div className="bg-red-500 mb-[20px]" style={{ width: `${width}px`, height: '5px' }}></div>
    {children}
  </div>
);

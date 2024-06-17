export const Container = ({ containerClassName, children }) => (
  <div className={`animation-element container--bordered p-[20px] rounded-lg border-[2px] ${containerClassName}`}>
    {children}
  </div>
);

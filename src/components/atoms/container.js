const Container = ({ containerClassName, children }) => (
  <div className={`appear animation-element p-[20px] rounded-lg border-[#1F1F1F] border-[2px] ${containerClassName}`}>
    {children}
  </div>
);

export default Container;

export const Card = ({ bodyClassName, children, noHover }) => (
  <div
    style={{
      transitionDuration: '500ms',
    }}
    className={`height-animated   bg-[#1A1A1A] ${
      !noHover ? 'hover:bg-[#131313]' : ''
    } hover:shadow-lg cursor-pointer rounded-lg ${bodyClassName}`}
  >
    {children}
  </div>
);

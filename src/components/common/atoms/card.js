const Card = ({ bodyClassName, children }) => (
  <div
    className={`height-animated animation-element appear bg-[#1A1A1A] hover:bg-[#131313] hover:shadow-lg cursor-pointer rounded-lg ${bodyClassName}`}
  >
    {children}
  </div>
);

export default Card;

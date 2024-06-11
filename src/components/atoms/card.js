const Card = ({ bodyClassName, children }) => (
  <div className={`animation-element appear bg-[#1A1A1A]  rounded-lg ${bodyClassName}`}>{children}</div>
);

export default Card;

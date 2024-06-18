export const AnimatedTitle = (title, redStart, redEnd, useRedDot) => (
  <div class="animation-element home-title">
    {title.split('').map((char, index) =>
      char === ' ' ? (
        <span style={{ animationDelay: `${index * 0.03}s` }} key={index}>
          &nbsp;
        </span>
      ) : (
        <span
          className={
            (index >= redStart && index <= redEnd) || (useRedDot && index === title.length - 1)
              ? 'text-red-500'
              : 'text-white'
          }
          style={{ animationDelay: `${index * 0.03}s` }}
          key={index}
        >
          {char}
        </span>
      ),
    )}
  </div>
);

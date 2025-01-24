// import { ThemeConsumer } from "../contexts/ThemeContext";
// import { FaMoon, FaSun } from "react-icons/fa";

// function ThemeToggle() {
//   return (
//     <ThemeConsumer>
//       {({ theme, toggleTheme }) => (
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? <FaMoon /> : <FaSun />}
//         </button>
//       )}
//     </ThemeConsumer>
//   );
// }

// export default ThemeToggle;

import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;

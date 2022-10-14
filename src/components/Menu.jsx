import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/frontend">Front-End</NavLink>
      <NavLink to="/backend">Back-End</NavLink>
    </nav>
  );
};
export default Menu;

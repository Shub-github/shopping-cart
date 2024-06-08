import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img src="" alt="image" />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>HOme</p>
          </NavLink>

          <NavLink to="/Cart">
            <BsCart4 />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import { Link } from 'react-router-dom';
// import './navigation.css';

// export function Navigation() {
//     return (
//         <nav className='navigation-nav'>
//             <li><Link to="main">მთავარი</Link></li>
//             <li><Link to="education">განათლება</Link></li>
//             <li><Link to="experience">გამოცდილება</Link></li>
//         </nav>
//     );
// }


import { NavLink } from 'react-router-dom';
import './navigation.css';

export function Navigation() {
  return (
    <nav className="navigation-nav">
      <ul>
        <li>
          <NavLink 
            to="main" 
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            მთავარი
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="education" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            განათლება
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="experience" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            გამოცდილება
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}





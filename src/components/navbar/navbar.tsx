import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>AdminIQ</span>
      </div>
      <div className="links">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="" />
        <img src="expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="profile-icon">
          <img className='profile-icon-image'src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <span>Umar</span>
        </div>
        <img src="setting.svg" alt="" />

      </div>
    </div>
  );
};

export default navbar;

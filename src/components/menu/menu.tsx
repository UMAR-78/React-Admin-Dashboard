import { Link } from "react-router-dom";
import "./menu.css";
import { menuData } from "../../menuData";

const menu = () => {
  return (
    <div className="menu">
      {menuData.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>

          {item.listItems.map((listItem) => (
            <Link className="listItems" to={listItem.url} key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default menu;

import "./TopDeals.css";
import { topDealUsers } from "../../menuData";
const TopDeals = () => {
  return (
    <div>
      <h1>Top Deals</h1>
      {topDealUsers.map((item) => (
        <div className="items" key={item.id}>
          <div className="left-side-content">
            <img src={item.img} alt="" className="profile-image" />
            <div className="userDetails">
              <span className="username">{item.username}</span>
              <span className="useremail">{item.email}</span>
            </div>
          </div>
          <div className="rigt-side-content">
            <span className="amount">${item.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopDeals;

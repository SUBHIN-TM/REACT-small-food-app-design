import LOGO from "../utils/constants"
const HeaderContainer = () => {
    return (
      <div className="headerContainer">
        <div className="logo">
          <img
            className="logoImg"
            src={LOGO}
          ></img>
          <p className="NAME">Star Food</p>
        </div>
        <div className="navContainer">
          <ul className="lists">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    );
  };

  export default  HeaderContainer ;
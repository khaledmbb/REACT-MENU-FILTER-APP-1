import "../Styles/Menu.css";
const Menu = ({ data }) => {
  return (
    <div className="menu">
      <div className="container">
        <ul>
          {data.map(({ id, title, category, price, img, desc }) => (
            <li key={id}>
              <div className="img-box">
                <img src={img} alt={title} />
              </div>
              <div className="info-box">
                <div className="top">
                  <p>{title}</p>
                  <p className="price">${price}</p>
                </div>
                <div className="desc">
                  <p>{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

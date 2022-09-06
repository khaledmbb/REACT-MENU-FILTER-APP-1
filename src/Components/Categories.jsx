import "../Styles/Categories.css";
const Categories = ({ categories, filterCategories }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => (
          <li key={idx} onClick={() => filterCategories(el)}>
            {el}
          </li>
        ))}
        {/* <li onClick={() => filterCategories(undefined)}>All</li>
        <li onClick={() => filterCategories("lunch")}>Lunch</li>
        <li onClick={() => filterCategories("breakfast")}>BreakFast</li>
        <li onClick={() => filterCategories("shakes")}>Drinks</li> */}
      </ul>
    </div>
  );
};

export default Categories;

import Menu from "./Components/Menu";
import Categories from "./Components/Categories";
import data from "./Components/data";
import { useState } from "react";

const uniqueData = ["all", ...new Set(data.map((el) => el.category))];

const App = () => {
  const [items, setItems] = useState(data);
  const filterCategories = (category) => {
    const newCategories = data.filter((item) =>
      category === "all" ? item : item.category === category
    );
    setItems(newCategories);
  };
  return (
    <div className="App">
      <main>
        <div className="container">
          <h1>Menu App</h1>
          <section>
            <Categories
              categories={uniqueData}
              filterCategories={filterCategories}
            />
            <Menu data={items} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;

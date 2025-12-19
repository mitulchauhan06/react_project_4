import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdata, setFilterdata] = useState(null);
  const [selectBtn, setSelectBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilterdata(json);
      } catch (error) {
        setError("Unable to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilterdata(data);
      return;
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilterdata(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterdata(data);
      setSelectBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilterdata(filter);
    setSelectBtn(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input
            onChange={searchFood}
            placeholder="Search food"
          />
        </div>
      </TopContainer>

      <FilterContainer>
        <button onClick={() => filterFood("all")} className={selectBtn === "all" ? "active" : ""}>All</button>
        <button onClick={() => filterFood("Breakfast")} className={selectBtn === "Breakfast" ? "active" : ""}>Breakfast</button>
        <button onClick={() => filterFood("Lunch")} className={selectBtn === "Lunch" ? "active" : ""}>Lunch</button>
        <button onClick={() => filterFood("Dinner")} className={selectBtn === "Dinner" ? "active" : ""}>Dinner</button>
      </FilterContainer>

      <SearchResult mitul={filterdata} />
    </Container>
  );
};

export default App;

/* Styled Components */

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;

  button {
    background-color: red;
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
    border: none;
    cursor: pointer;
  }
`;

const Container = styled.div``;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  .search input {
    background-color: transparent;
    border: 1px solid red;
    width: 285px;
    height: 40px;
    border-radius: 5px;
    color: white;
    text-align: center;
    font-size: 16px;
  }
`;

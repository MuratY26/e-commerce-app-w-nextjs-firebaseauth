import { BsArrowDownUp } from "react-icons/bs";
import { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillCloseSquare } from "react-icons/ai";

export default function Filter(props) {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  function handleSort(rule) {
    props.setSort(rule);
  }

  function handleChange(event) {
    if (props.filter[event.target.value]) {
      let newFilter = { ...props.filter };
      delete newFilter[event.target.value];
      props.setFilter({ ...newFilter });
    } else {
      props.setFilter({ ...props.filter, [event.target.value]: true });
    }
  }

  function toggleSortVisibility() {
    setShowSort(!showSort);
  }

  function toggleFilterVisibility() {
    setShowFilter(!showFilter);
  }
  return (
    <div className="filterBar">
      <div className="categoryName filterText ">
        {props.category.toUpperCase()}
      </div>
      <div
        className="sort filterText flex flex-row items-center gap-2 text-lg"
        onClick={toggleSortVisibility}
      >
        Sort{" "}
        <span>
          <BsArrowDownUp />
        </span>
        <div
          className={
            showSort ? "sortSelectionContainer show" : "sortSelectionContainer"
          }
        >
          <div
            className="sortSelection"
            onClick={() => handleSort("increasing")}
          >
            Price: Increasing
          </div>
          <div
            className="sortSelection"
            onClick={() => handleSort("decreasing")}
          >
            Price: Decreasing
          </div>
        </div>
      </div>
      <div className="categoryFilter">
        <div className="filterText" onClick={toggleFilterVisibility}>
          Filter
        </div>
        <div
          className={showFilter ? "filterContainer show" : "filterContainer"}
        >
          <IconContext.Provider value={{ className: "filterCloseButton" }}>
            <div onClick={toggleFilterVisibility} className="buttonContainer">
              <AiFillCloseSquare />
            </div>
          </IconContext.Provider>
          <div className="priceFilter">
            <p className="checkbox-label">Select Price: </p>
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleChange}
                value="0-50"
                className="checkbox-input"
              />
              0-50 $
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleChange}
                value="50-100"
                className="checkbox-input"
              />
              50-100 $
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleChange}
                value="100-150"
                className="checkbox-input"
              />
              100-150 $
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleChange}
                value="150-200"
                className="checkbox-input"
              />
              150-200 $
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleChange}
                value="200-999999"
                className="checkbox-input"
              />
              200+ $
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

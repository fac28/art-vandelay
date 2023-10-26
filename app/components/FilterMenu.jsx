import React from 'react'

const FilterMenu = ({maxPrice, setMaxPrice}) => {
  function update(event) {
    // `+` converts the string value to a number
    setMaxPrice(+event.target.value);
  }

  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="250000"
          max="1250000"
          step="50000"
          value={maxPrice}
          onChange={update}
        />
      </label>
    </fieldset>
  );
}

export default FilterMenu

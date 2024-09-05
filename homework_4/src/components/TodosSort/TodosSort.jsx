const TodosSort = ({ sortByLow, sortByHigh }) => {
  const handleLowPrice = () => {
    sortByLow(true);
  };
  const handleHighPrice = () => {
    sortByHigh(true);
  };

  const handleFilterByPrice = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {
        <form className="price--form" onSubmit={handleFilterByPrice}>
          <label>
            By low price
            <input type="checkbox" onChange={handleLowPrice} />
          </label>
          <label>
            By hight price
            <input type="checkbox" onChange={handleHighPrice} />
          </label>
        </form>
      }
    </>
  );
};

export default TodosSort;

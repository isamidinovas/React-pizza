import React, { useState } from "react";
import PropTypes from "prop-types";
const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => {
            onClickCategory(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // acriveCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

//если свойство отсутствует , предотвращает ошибку
Categories.defaultProps = {
  acriveCategory: null,
  items: [],
};

export default Categories;

//с помощью классового коспонента
// class Categories extends React.Component {
//   state ={
//     activeItem: 3,
//     test:123,
//   };

//   onSelectItem=(index) =>{
//     this.setState({
//       activeItem:index,
//     });
//   };
//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

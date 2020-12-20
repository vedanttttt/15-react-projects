import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, deleteItem, editItem }) => {
  return (
    <>
      <div className="grocery-list">
        {list.map((item) => {
          const { name, id } = item;
          return (
            <>
              <article className="grocery-item" key={id}>
                <p className="title">{name}</p>
                <div className="btn-container">
                  <button className="edit-btn" type="button">
                    <FaEdit onClick={() => editItem(id)} />
                  </button>
                  <button type="button" className="delete-btn">
                    <FaTrash onClick={() => deleteItem(id)} />
                  </button>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;

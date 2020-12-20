import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey");
    if (!name) {
      //display alert
      showAlert(true, "danger", "please enter value");
    } else if (name && isEdit) {
      //deal with edit
      const updatedList = list.map((item) => {
        if (item.id === editId) {
          item.name = name;
        }
      });
      setEditId(null);
      setEdit(false);
      setName("");
      showAlert(true, "success", "item name changed");
    } else {
      //show alert
      showAlert(true, "success", "item added to the list");
      setList([...list, { id: new Date().getTime().toString(), name }]);
      // localStorage.setItem("itemsList", JSON.stringify(list));
      setName("");
    }
    // console.log(list);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "list is cleared");
    setList([]);
  };

  const editItem = (id) => {
    setEdit(true);
    list.map((item) => {
      if (item.id === id) {
        setName(item.name);
      }
    });
    setEditId(id);
  };

  const deleteItem = (id) => {
    showAlert(true, "danger", "item removed");
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter item"
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            // list={JSON.parse(localStorage.getItem("itemsList"))}
            list={list}
            deleteItem={deleteItem}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

const express = require("express");
const app = express();
let items = require("../Data/Data.json");
const cors = require("cors");
app.use(cors());

app.get("/api/items", (req, res) => {
  res.send(items);
});

app.delete("/api/items/:id", (req, res) => {
  let itemId = req.params.id;
  itemId = Number(itemId);
  items = items.filter((item) => item.id !== itemId);
  res.send(items);
});

app.use(express.json());

app.post("/api/items", (req, res) => {
  const item = req.body;
  if (!item.name || !item.category || !item.price || !item.rating) {
    res.send("Some data is missing please check");
  } else {
    const newItem = { id: items.length + 1, ...item };
    items.push(newItem);
    res.send(items);
  }
});

app.put("/api/items/:id", (req, res) => {
  let itemId = req.params.id;
  itemId = Number(itemId);
  const item = req.body;
  if (!item.id || !item.name || !item.category || !item.price || !item.rating) {
    res.send("Some data is missing please check");
  } else {
    items = items.map((eitem) => {
      if (eitem.id === itemId) {
        return item;
      } else {
        return eitem;
      }
    });
  }
  res.send(items);
});

const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

import axios from "axios";

export const fetchItems = async (endpoint, setItems, setFilteredItems) => {
  try {
    const response = await axios.get(endpoint);
    setItems(response.data.data);
    setFilteredItems(response.data.data);
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
  }
};

export const editItem = async (
  endpoint,
  itemId,
  updatedData,
  fetchItemsCallback
) => {
  try {
    await axios.put(`${endpoint}/${itemId}`, updatedData);
    fetchItemsCallback();
  } catch (error) {
    console.error(`Error updating data at ${endpoint}/${itemId}:`, error);
  }
};

export const deleteItem = async (endpoint, itemId, fetchItemsCallback) => {
  try {
    await axios.delete(`${endpoint}/${itemId}`);
    fetchItemsCallback();
  } catch (error) {
    console.error(`Error deleting data at ${endpoint}/${itemId}:`, error);
  }
};

export const searchItems = (items, term, setFilteredItems) => {
  const filtered = items.filter(
    (item) =>
      item.Name.toLowerCase().includes(term.toLowerCase()) ||
      item.Role.toLowerCase().includes(term.toLowerCase()) ||
      item.ExperienceLevel.toString().includes(term.toLowerCase()) ||
      item.AssignedSpaceshipID.toString().includes(term.toLowerCase())
  );
  setFilteredItems(filtered);
};

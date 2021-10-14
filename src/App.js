import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from './mock-data.json';
import ReadOnlyRow from './component/ReadOnlyRow';
import EditableRow from './component/EditableRow';

function App() {
  const [bookDetails, setBookDetails] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Author: '',
    Title: '',
    Published: "",
    Branch: "",
    Quantity: ""
  })
  const [editFormData, setEditFormData] = useState({
    Author: '',
    Title: '',
    Published: "",
    Branch: "",
    Quantity: ""
  })

  const [editBookId, setEditBookId] = useState(null);

  const handleFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newBookDetail = {
      id: nanoid(),
      Author: addFormData.Author,
      Title: addFormData.Title,
      Published: addFormData.Published,
      Branch: addFormData.Branch,
      Quantity: addFormData.Quantity
    }
    const newBookDetails = [...bookDetails, newBookDetail];
    setBookDetails(newBookDetails);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedBookDetail = {
      id: editBookId,
      Author: editFormData.Author,
      Title: editFormData.Title,
      Published: editFormData.Published,
      Branch: editFormData.Branch,
      Quantity: editFormData.Quantity
    }
    const newBookDetails = [...bookDetails];
    const index = bookDetails.findIndex((bookDetail) => bookDetail.id === editBookId);
    newBookDetails[index] = editedBookDetail;
    setBookDetails(newBookDetails);
    setEditBookId(null);
  }


  const handleEditClick = (event, bookDetail) => {
    event.preventDefault();
    setEditBookId(bookDetail.id);

    const formValues = {
      Author: bookDetail.Author,
      Title: bookDetail.Title,
      Published: bookDetail.Published,
      Branch: bookDetail.Branch,
      Quantity: bookDetail.Quantity
    }
    setEditFormData(formValues);

  }
  const handleCancelClick = () => {
    setEditBookId(null);
  }
  const handleDeleteClick = (bookId) => {
    const newBookDetails = [...bookDetails];
    const index = bookDetails.findIndex((bookDetail) => bookDetail.id === bookId);
    newBookDetails.splice(index, 1);
    setBookDetails(newBookDetails);

  }
  return (
    <div className="app-container">
      <h1>Library Management System (Using React Hooks)</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Published</th>
              <th>Branch</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookDetails.map((bookDetail) => (
              <>
                {editBookId === bookDetail.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />) : (<ReadOnlyRow bookDetail={bookDetail} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}


              </>
            ))}

          </tbody>
        </table>
      </form>
      <h2>Add New Books Details</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type='text' name='Author' required="required" placeholder="Enter Author..." onChange={handleFormChange} />
        <input type='text' name='Title' required="required" placeholder="Enter Title of book..." onChange={handleFormChange} />
        <input type='text' name='Published' required="required" placeholder="Enter Published Year..." onChange={handleFormChange} />
        <input type='text' name='Branch' required="required" placeholder="Enter Branch..." onChange={handleFormChange} />
        <input type='text' name='Quantity' required="required" placeholder="Enter Quantity..." onChange={handleFormChange} />
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

export default App;

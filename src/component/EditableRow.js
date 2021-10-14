import React from "react";

const EditableRow =({editFormData,handleEditFormChange , handleCancelClick })=>{
    return(
        <tr>
            <td> <input type='text' value ={editFormData.Author} name='Author' required ="required" placeholder ="Enter Author..." onChange ={handleEditFormChange} /></td>
            <td> <input type='text' value ={editFormData.Title} name='Title' required ="required" placeholder ="Enter Title of book..." onChange ={handleEditFormChange}/></td>
            <td><input type='text' value={editFormData.Published} name='Published' required ="required" placeholder="Enter Published Year..." onChange ={handleEditFormChange}/></td>
            <td>  <input type='text' value={editFormData.Branch}name='Branch' required ="required" placeholder ="Enter Branch..."onChange ={handleEditFormChange}/></td>
            <td><input type='text' value={editFormData.Quantity}name='Quantity' required ="required" placeholder ="Enter Quantity..."onChange ={handleEditFormChange}></input></td>
            <td><button type='submit'>Save</button> <button type='button' onClick ={handleCancelClick}>Cancel</button></td>
            {/* <td></td> */}
            
        </tr>
    )
}
export default EditableRow;

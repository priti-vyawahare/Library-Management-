import React  from "react";

const ReadOnlyRow =({bookDetail,handleEditClick,handleDeleteClick})=>{
    return(
        
            <tr>
          <td>{bookDetail.Author}</td>
          <td>{bookDetail.Title}</td>
          <td>{bookDetail.Published}</td>
          <td>{bookDetail.Branch}</td>
          <td>{bookDetail.Quantity}</td>
          <td>
              <button type='button ' onClick={(event)=>handleEditClick(event,bookDetail)}>Edit</button>
              <button type ='button' onClick ={()=>handleDeleteClick(bookDetail.id)}>Delete</button>
          </td>
          </tr>
        
    );
};
export default ReadOnlyRow;
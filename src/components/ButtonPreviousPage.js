import React from "react";

const ButtonPreviousPage = ({ onClick, disabled }) => (
    <button onClick={onClick} type="button" disabled={disabled} className="button-page_prev">
      Anterior 
    </button>
  );
  
  export default ButtonPreviousPage;
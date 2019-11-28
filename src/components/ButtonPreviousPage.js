import React from "react";

const ButtonPreviousPage = ({ onClick, disabled }) => (
    <button onClick={onClick} type="button" disabled={disabled}>
      Atrás
    </button>
  );
  
  export default ButtonPreviousPage;
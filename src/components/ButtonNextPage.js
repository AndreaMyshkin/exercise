import React from "react";

const ButtonNextPage = ({ onClick, disabled }) => (
    <button onClick={onClick} type="button" className="button-page_next" >
      Siguiente
    </button>
  );
  
  export default ButtonNextPage;
import React from "react";
import { useGlobalContext } from "../utils/context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage, toFirstPage, toLastPage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={()=>toFirstPage("first")}>first page</button>
      <button disabled={isLoading} onClick={()=>handlePage('dec')}>prev</button>
      <p>{page+1} of {nbPages}</p>
      <button disabled={isLoading} onClick={()=>handlePage('inc')}>next</button>
      <button disabled={isLoading} onClick={()=>toLastPage('last')}>last page</button>
    </div>
  )
};

export default Buttons;

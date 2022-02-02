import React from "react";

export const Footer = () => {
  let Footerstyle = {
    position: "relative",
    width: "100%",
    top: "30vh",
  };
  return (
    <footer className="bg-dark text-light py-3" style={Footerstyle}>
      <div className="text-center"> Copyright &copy;MyTodosList.com</div>
    </footer>
  );
};

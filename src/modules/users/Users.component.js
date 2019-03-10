import React from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <ol>
      <li>
        <Link to="/users/john">John</Link>
      </li>
      <li>
        <Link to="/users/jesus">Jesus</Link>
      </li>
      <li>
        <Link to="/users/pepe">Pepe</Link>
      </li>
      <li>
        <Link to="/users/juan">Juan</Link>
      </li>
    </ol>
  );
};

import React from "react";

export const UserSelect = ({ match }) => {
  return (
    <ol>
      <li>{match.params.id}</li>
    </ol>
  );
};

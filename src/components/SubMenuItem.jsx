// SubMenuItem.jsx
import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';

const SubMenuItem = ({ primary, route }) => {
  const history = useHistory();

  const handleSubItemClick = () => {
    console.log('Redirigiendo a:', route);
    history.push(route); // Redirecciona a la ruta correspondiente
  };

  return (
    <ListItem button onClick={handleSubItemClick}>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default SubMenuItem;

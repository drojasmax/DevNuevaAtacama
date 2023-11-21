import React, { useState } from 'react';
import LogoImage from '../../src/img/LogoNuevaAtacama.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';



export const SideBar = () => {
    

  const initialAccordions = new Array(6).fill(false);
  const [openAccordions, setOpenAccordions] = useState(initialAccordions);
  const [activeSubItems, setActiveSubItems] = useState(Array.from({ length: 12 }, () => null));

  const handleAccordionClick = (index) => {
    const updatedAccordions = openAccordions.map((accordion, i) => i === index ? !accordion : false);
    setOpenAccordions(updatedAccordions);
    setActiveSubItems(Array.from({ length: 12 }, () => null));
  };

  const handleSubItemClick = (accordionIndex, subIndex) => {
    const updatedActiveSubItems = activeSubItems.map((subItem, index) =>
      index === accordionIndex * 2 + subIndex ? subIndex : null
    );
    setActiveSubItems(updatedActiveSubItems);
  };

  const menus = [
    {
      title: 'Copiapó',
      submenuItems: [
        { title: 'Diagrama' },
        { title: 'Grafico' },
      ],
    },
    {
      title: 'Caldera',
      submenuItems: [
        { title: 'Diagrama' },
        { title: 'Grafico' },
      ],
    },
    {
      title: 'Vallenar',
      submenuItems: [
        { title: 'Diagrama' },
        { title: 'Grafico' },
      ],
    },
    {
      title: 'Caldera',
      submenuItems: [
        { title: 'Diagrama' },
        { title: 'Grafico' },
      ],
    },
    {
      title: 'Huasco',
      submenuItems: [
        { title: 'Diagrama' },
        { title: 'Grafico' },
      ],
    },
    {
      title: 'Chañaral',
      submenuItems: [
        { title: 'Diagrama' },
        { title: 'Grafico' },
      ],
    },
  ];

  const getItemStyles = (accordionIndex, subIndex) => {
    const itemIndex = accordionIndex * 2 + subIndex;
    return {
      paddingLeft: '2rem',
      transition: 'background-color 0.5s ease-in-out',
      backgroundColor: activeSubItems[itemIndex] === subIndex ? '#30609F' : 'transparent',
      color: activeSubItems[itemIndex] === subIndex ? 'white' : 'black',
    };
  };

  

  return (
    <div className="flex">

      
      <div className={'w-72 h-screen bg-gray relative'}>
        <img src={LogoImage} className='w-72 h-14 border-black' />
        {menus.map((menu, index) => (
          <Accordion
            key={index}
            expanded={openAccordions[index]}
            onChange={() => handleAccordionClick(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography>{menu.title}</Typography>
            </AccordionSummary>
            <Collapse in={openAccordions[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.submenuItems.map((item, subIndex) => (
                  <ListItemButton
                    key={subIndex}
                    onClick={() => handleSubItemClick(index, subIndex)}
                    style={getItemStyles(index, subIndex)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                ))}
              </List>
        
            </Collapse>
          </Accordion>
        )
        )
        }
              <List className='bg-slate-300 m-5 border-black'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Mantenimiento" />
            </ListItemButton>
          </ListItem>
        </List>

        <List className='bg-stone-400 m-5 border-black'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Informes " />
            </ListItemButton>
          </ListItem>
        </List>

            <div className='flex items-center justify-between  absolute bottom-0 '>
          <IconButton>
            <PersonIcon className='text-black' />
          </IconButton>
          <div className='w-40'></div> {/* Espacio entre los botones */}
          <IconButton size='large'>
            <ExitToAppIcon className='text-black' />
          </IconButton>
        </div>
      </div>
      </div>

      )
}

export default SideBar;

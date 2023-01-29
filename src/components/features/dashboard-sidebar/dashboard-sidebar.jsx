import * as React from 'react';
import './dashboard-sidebar.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

export default function DashboardSidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

const icons = [<CalendarMonthIcon/>,<MapIcon/>,<ListAltIcon/>,<LiveHelpIcon/>]
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{marginTop:'150px'}}>
        {['calendar', 'geography', 'form', 'faq'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text}`}>
              <ListItemIcon>
                {icons[index]}
              </ListItemIcon>
              <ListItemText  primary={text } />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
      <Divider />
  
    </Box>
  );

  return (
    <div className='btnSize'>
      {['MENU'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='SideMenu' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

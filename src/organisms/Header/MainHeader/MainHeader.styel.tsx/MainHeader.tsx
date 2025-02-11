import { useState } from 'react';
import LogoDecor from '../../../../assets/images/logo/Layer_x0020_1.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import {
  Header,
  HeaderProfileIcon,
  HeaderTitle,
  Line,
  Logo,
  ProfileBox,
  StyledHeader,
} from './MainHeader.styel';
import DrawerMenu from '../../../../atoms/Drawer/Drawer';
import profileImage from '../../../../assets/images/logo/profile.png';

const MainHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const userName = 'Gupi debnath';
  const userImage = '';

  const DrawerOpen = () => {
    setOpen(true);
  };
  const DrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      icon: <AccountBoxIcon />,
      text: 'Update Profile',
      onClick: () => console.log('Update Profile'),
    },
    {
      icon: <AutoFixHighIcon />,
      text: 'Edit',
      onClick: () => console.log('Edit'),
    },
    {
      icon: <LogoutIcon />,
      text: 'Logout',
      onClick: () => console.log('Logout'),
    },
  ];

  return (
    <div>
      <Header>
        <StyledHeader>
          <Logo src={LogoDecor} alt="Decord-mistri Logo" />
          <Line />
          <HeaderTitle>DecorMistri</HeaderTitle>
        </StyledHeader>
        <HeaderProfileIcon onClick={DrawerOpen}>
          <ProfileBox>
            {userImage ? (
              <img
                src={profileImage}
                alt="User"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              userName.charAt(0).toUpperCase()
            )}
          </ProfileBox>
        </HeaderProfileIcon>
      </Header>

      <DrawerMenu
        open={open}
        onClose={DrawerClose}
        userName={userName}
        menuItems={menuItems}
      />
    </div>
  );
};

export default MainHeader;

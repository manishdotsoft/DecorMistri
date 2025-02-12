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
  Profileimg,
  StyledHeader,
} from './MainHeader.styel';
import DrawerMenu from '../../../../atoms/ProfileDrawer/Drawer';
import profileImage from '../../../../assets/images/logo/profile.png';
import useDrawer from './MainHeader.hook';

const MainHeader: React.FC = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();

  const userName = 'Gupi debnath';
  const userImage = '';

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
        <HeaderProfileIcon onClick={openDrawer}>
          <ProfileBox>
            {userImage ? (
              <Profileimg src={profileImage} alt="User" />
            ) : (
              userName.charAt(0).toUpperCase()
            )}
          </ProfileBox>
        </HeaderProfileIcon>
      </Header>

      <DrawerMenu
        open={open}
        onClose={closeDrawer}
        userName={userName}
        menuItems={menuItems}
      />
    </div>
  );
};

export default MainHeader;

// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', py: '2rem',
    }}
  >
    <Typography component="p">© Gde Agung. 2022 All rights reserved</Typography>
  </Box>
);

export default Footer;

import { Box } from '@mui/material';

const SvgIconStyle = ({ src, color = 'inherit', sx }) => {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: 'background.paper',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        ...sx
      }}
    />
  );
};

export default SvgIconStyle;
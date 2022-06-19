
const Card = (theme) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadiusMd,
          position: 'relative',
          zIndex: 0,
          boxShadow: 'none',

          transition: "150ms",
          "&:hover": {
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));',
          },
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3)
        }
      }
    }
  };
};

export default Card;
//import { Dialog } from '@gessa/ui';
import { Backdrop, Box, CircularProgress } from '@mui/material';

const OverlappedLoader = (props) => {
  return (
    <Box
      sx={{
        position: 'absolute',

      }}
    >
      {props && props.status && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.status}
        >
          <CircularProgress sx={{ color: '#1E9CC8' }} size={props.size || 40} />
        </Backdrop>
      )}
    </Box>
  );
};

export default OverlappedLoader;

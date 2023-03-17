/* eslint-disable */
import { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface PropsTabPanel {
  children: ReactNode;
  value: number;
  index: number;
  padding?: number | string;
  [key: string]: any;
}

export default function TabPanel({ children, value, index, padding, ...rest }: PropsTabPanel) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...rest}
    >
      <Box p={3} style={{ padding }}>
        {children}
      </Box>
    </Typography>
  );
}

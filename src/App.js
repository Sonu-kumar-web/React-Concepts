import { memo } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import "./app.css";

const conceptsArray = [
  {
    conceptName: "Error Boundaries",
    style: {
      color: "red",
      borderColor: "red",
    },
  },
];

const App = () => {
  return (
    <Grid container columnGap={2} sx={{ padding: 3 }}>
      {conceptsArray?.map(({ conceptName, style }) => (
        <Grid item>
          <Button variant="outlined" sx={{ ...style }}>
            {conceptName}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(App);

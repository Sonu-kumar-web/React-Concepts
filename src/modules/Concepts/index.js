import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const conceptsArray = [
  {
    id: 1,
    conceptName: "Error Boundaries",
    url: "/error-boundaries",
    style: {
      color: "red",
      borderColor: "red",
    },
  },
];

const Concepts = () => {
  return (
    <Grid container columnGap={2} sx={{ padding: 3 }}>
      {conceptsArray?.map(({ conceptName, style, url }) => (
        <Grid item>
          <Button
            variant="outlined"
            sx={{ ...style }}
            onClick={() => window.open(url, "_self")}
          >
            {conceptName}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Concepts;

import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ErrorBoundaries = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mb: 2,
        }}
        onClick={() => navigate("/concepts")}
      >
        <ArrowBackIcon /> <span>Back to Concepts page</span>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="outlined"
          sx={{ color: "green", border: "1px solid green" }}
          onClick={() => navigate("/with-error-boundary")}
        >
          With Error boundaries
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "red", border: "1px solid red" }}
          onClick={() => navigate("/without-error-boundary")}
        >
          Without Error boundaries
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorBoundaries;

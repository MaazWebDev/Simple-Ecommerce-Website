import { Box } from "@mui/material";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <Box className="position-absolute top-0 d-flex justify-content-center align-items-center z-index-9 w-100 vh-100 bg-primary">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#000000"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  );
}

export default Loader;
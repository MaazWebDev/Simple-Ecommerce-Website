import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

function SingalProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setSingleProduct(res.data);
      console.log(res.data);
    });
  }, [IDBIndex]);
  return (
    <Box>
      {singleProduct ? (
        <Box
          className="d-flex justify-content-center gap-5 align-items-center w-100 flex-column flex-sm-column flex-md-row"
          sx={{
            padding: {
              xs: "20px 10px",
              sm: "20px",
              md: "25px",
              lg: "30px 70px",
            },
          }}
        >
          <Box sx={{ padding: { xs: "0 40px" } }}>
            <img
              width={"100%"}
              height={"450px"}
              src={singleProduct.image}
              alt={SingalProduct.title}
            />
          </Box>
          <Box className="text-center text-md-start text-lg-start w-75">
            <Typography
              variant="h5"
              sx={{ letterSpacing: "2px" }}
              className="fs-1 font-bold"
            >
              {singleProduct.title}
            </Typography>{" "}
            <Typography component="p" className="mt-2 fs-5">
              {singleProduct.description}
            </Typography>{" "}
            <Typography component="p" className="mt-1 fs-4">
              $ <strong className="fw-bold mr-2"> {singleProduct.price}</strong>
            </Typography>
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
}

export default SingalProduct;
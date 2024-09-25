import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgMediaCard from "../Card";
import Loader from "../Loader";

function Home() {
  const [student, setStudents] = useState(null);
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setStudents(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        mx: "20px",
        my: "60px",
      }}
    >
      {student ? (
        student.map((item) => (
          <Box key={item.id}>
            <ImgMediaCard
              img={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          </Box>
        ))
      ) : (
        <Loader />
      )}
    </Box>
  );
}

export default Home;
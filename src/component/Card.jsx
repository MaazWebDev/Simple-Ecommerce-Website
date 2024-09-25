import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ImgMediaCard({ img, title, price, id }) {
  const navigate = useNavigate();
  const getSingle = () => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <Card
      sx={{
        width: 370,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" alt={title} height="200" image={img} />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={getSingle} size="medium" variant="contained">
          Show More
        </Button>
      </CardActions>
    </Card>
  );
}
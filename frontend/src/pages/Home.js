import React from "react";
import Logo from "../assets/cute-plant.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Home() {
  return (
    <Grid align="center" justifyContent="center" padding={5}>
      <Grid>
        <Grid color="white" backgroundColor="#11455c" borderRadius={10} maxWidth={1200} >
          <Typography variant="h1" component="h1">
            BE YOUR PLANT!?
          </Typography>
          <Typography variant="h2" component="h2">
            What does it mean?
          </Typography>
        </Grid>
        <ImageList sx={{ maxWidth: 250, maxHeight: 300 }} cols={4}>
          <ImageListItem><img src={Logo} alt="" /></ImageListItem>
          <ImageListItem><img src={Logo} alt="" /></ImageListItem>
          <ImageListItem><img src={Logo} alt="" /></ImageListItem>
          <ImageListItem><img src={Logo} alt="" /></ImageListItem>
        </ImageList>
        <Typography
          padding={5}
          backgroundColor="#00677c"
          maxWidth={1000}
          borderRadius={10}
          color="white"
          align="justify"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type s pecimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type s
          pecimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;

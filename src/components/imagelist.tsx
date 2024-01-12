import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import image1 from "assets/images/BetterHealth.png";
import image2 from "assets/images/BetterAssistance.png";
import image6 from "assets/images/HappyHealth.png";
import image7 from "assets/images/DeerMountain.png";
import image4 from "assets/images/FirstCare.png";
import image5 from "assets/images/CaveCreek.png";

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: "auto", height: "auto" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Gallery</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} subtitle={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image1,
    title: "Better Health",
    author: "California",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: image2,
    title: "Better Assistance",
    author: "Texas",
  },
  {
    img: image6,
    title: "Happy Health",
    author: "Texas",
  },
  {
    img: image7,
    title: "Deer Mountain",
    author: "Colorado",
    cols: 2,
  },
  {
    img: image4,
    title: "First Care",
    author: "California",
    cols: 2,
  },
  {
    img: image5,
    title: "Cave Creek",
    author: "Arizona",
    rows: 2,
    cols: 2,
    featured: true,
  },
];

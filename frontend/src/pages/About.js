import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom";
import FbLogo from "../assets/facebook.png";
import InstaLogo from "../assets/instagram.png";
import LinkedInLogo from "../assets/linkedin.png";
import "../assets/about.css";
import CopyrightIcon from '@mui/icons-material/Copyright';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';

function About() {
  return (
    <Grid padding={2}>
      <Grid color="#11455c" fontWeight="bold" fontSize={30} >
        Follow us on:
      </Grid>
      <ImageList display="flex" sx={{ maxWidth: 130, maxHeight: 130 }} cols={3}>
        <Link to="https://www.facebook.com/">
          <ImageListItem > <img src={FbLogo} alt="" id="fb" style={{borderRadius:10}}/></ImageListItem>
          </Link>
          <Link to="https://www.instagram.com/">
          <ImageListItem> <img src={InstaLogo} alt="" id="insta" style={{borderRadius:10}}/></ImageListItem>
          </Link>
          <Link to="https://www.linkedin.com/">
          <ImageListItem> <img src={LinkedInLogo} alt="" id="linkedin" style={{borderRadius:10}}/></ImageListItem>
          </Link>
        </ImageList>
      <Typography
        color="#0095a0"
        fontWeight="bold"
        fontSize={30}
      >Our Mission</Typography>
      <Typography
          padding={3}
          backgroundColor="#00677c"
          maxWidth="100%"
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
        <Typography
        color="#0095a0"
        fontWeight="bold"
        fontSize={30}
      >Our Values</Typography>
        <Typography
        padding={3}
        backgroundColor="#00677c"
        maxWidth="100%"
        borderRadius={10}
        color="white"
        align="justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type s pecimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
          <Grid 
        display="flex" 
        flexDirection="column" 
        maxWidth={200}
        backgroundColor="#00677c"
        color="white">
          <ListItemText>1. Lorem Ipsum</ListItemText>
          <ListItemText>2. Lorem Ipsum</ListItemText>
          <ListItemText>3. Lorem Ipsum</ListItemText>
          <ListItemText>4. Lorem Ipsum</ListItemText>
          <ListItemText>5. Lorem Ipsum</ListItemText>
          </Grid>
        </Typography>
        <Typography
        color="#0095a0"
        fontWeight="bold"
        fontSize={30}
      >Our Team</Typography>
      <Container display="flex" alignItems="center" justifyContent="center">
      <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ maxWidth: 450, maxHeight: 450 }} >
          <img
            src={item.img}
            alt={item.title}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
      </Container>
        <Typography
        color="#0095a0"
        fontWeight="bold"
        fontSize={30}
      >Team videos</Typography>
        <Typography 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        fontSize={15} >
          <CopyrightIcon sx={{ maxWidth: 20, maxHeight: 14, fontWeight:"bold" }} />
          2022 BYP
        </Typography>
    </Grid>
  );
}


const itemData = [
  {
    img: 'https://www.independent.co.ug/wp-content/uploads/2022/05/Donkey.jpg',
    title: 'Sara the Donkie',
    author: '@s.donkie',
  },
  {
    img: 'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/53/1451338836-goatinsta.jpg',
    title: 'Terry the Goat',
    author: '@t.horn',
  },
  {
    img: 'https://petkeen.com/wp-content/uploads/2021/06/great-dane_Earl-Wilkerson_Shutterstock-e1634197015120-760x507.jpg',
    title: 'David the Dane',
    author: '@double.d',
  },
  {
    img: 'https://i.pinimg.com/736x/a8/f3/ab/a8f3abc3acfdbf60688a663743555eda.jpg',
    title: 'Happy the baby Hippo',
    author: '@ariana.h',
  },
  {
    img: 'https://cdn.creatureandcoagency.com/uploads/2016/11/Giraffe-Facts-1.jpg',
    title: 'Bob the Giraffe',
    author: '@height.king',
  },
  {
    img: 'https://galeria.cdn.index.hu/belfold/2020/03/11/zulu_a_kis_allatkerti_szurikata/31993727_f9633b899657f403c507940d92406456_j.jpg',
    title: 'Honey the Meerkat',
    author: '@beer.cat',
  },
  {
    img: 'https://www.ekolss.com/img/animals/91/koala.jpg',
    title: 'Chili the Koala',
    author: '@sleepy.k',
  },
  {
    img: 'http://zoozoo.hu/wp-content/uploads/2018/01/B017458L.jpg',
    title: 'Turtle',
    author: '@too.tyler.',
  },
  {
    img: 'https://kameleonelado.eu/wp-content/uploads/2014/09/baby-yemen-chameleon_1.jpg',
    title: 'Cleo the Chameleon',
    author: '@chleo',
  },
  {
    img: 'https://zoobudapest.com/uploads/articles/84/image/Lisimba.JPG',
    title: 'Ron the Rhino',
    author: '@rhon.iro',
  },
  {
    img: 'https://d.newsweek.com/en/full/1913282/crab.jpg',
    title: 'Carol the Crab',
    author: '@crab.roll',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5ad58baecef372033a94eaac/1613259241548-9LKVFNYAI6GM92F6729F/TRT_Chicks_1.jpg',
    title: 'Christine the Chicken',
    author: '@chirs.chick',
  },
];

export default About;

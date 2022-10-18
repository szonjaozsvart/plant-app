import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://img.designswan.com/2018/05/babyDonkey/8.jpg',
    title: 'Sara the Donkie',
    author: '@s.donkie',
    rows: 2,
    cols: 2,
    featured: true,
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
    cols: 2,
  },
  {
    img: 'https://cdn.creatureandcoagency.com/uploads/2016/11/Giraffe-Facts-1.jpg',
    title: 'Bob the Giraffe',
    author: '@height.king',
    cols: 2,
  },
  {
    img: 'https://galeria.cdn.index.hu/belfold/2020/03/11/zulu_a_kis_allatkerti_szurikata/31993727_f9633b899657f403c507940d92406456_j.jpg',
    title: 'Honey the Meerkat',
    author: '@beer.cat',
    rows: 2,
    cols: 2,
    featured: true,
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
    rows: 2,
    cols: 2,
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
    cols: 2,
  },
];



// //
// <ImageList
// sx={{ maxWidth: "800", maxHeight: "800" }}
// variant="masonry"
// cols={4}
// rowHeight={350}>
// <ImageListItem ><img src={Hippo} alt=""/></ImageListItem>
// <ImageListItem ><img src={Donkey} alt=""/></ImageListItem>
// <ImageListItem ><img src={CutePie} alt=""/></ImageListItem>
// <ImageListItem ><img src={Goat} alt=""/></ImageListItem>
// <ImageListItem ><img src={Giraffe} alt=""/></ImageListItem>
// <ImageListItem ><img src={Dog} alt=""/></ImageListItem>
// </ImageList>

// //
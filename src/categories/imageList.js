import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


  

  

  const itemData = [
    {
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/300-x-180_BLANK_2_1.png",
      title: 'Sale',
      author: 'author',
    },
    {
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Shower_1.jpg",
      title: 'Essentials',
      author: 'author',
    },{
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Fragrances_1.jpg",
      title: 'COLOGNE',
      author: 'author',
    },{
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/300x180_Trimmers.png",
      title: 'Trimmer',
      author: 'author',
    },
    {
      img: "https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Shower_1.jpg",
      title: 'Face & Body',
      author: 'author',
    },
    
    {
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Beard_category_2.jpg",
      title: 'Beard',
      author: 'author',
    },{
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Hair_7.jpg",
      title: 'Hair',
      author: 'author',
    },
    {
      img:"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Skin.jpg",
      title: 'Skin',
      author: 'author',
    },
  ];
 
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={5.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              // actionIcon={
              //   <IconButton aria-label={`star ${item.title}`}>
              //     <StarBorderIcon className={classes.title} />
              //   </IconButton>
              // }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
};
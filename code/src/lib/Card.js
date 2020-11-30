import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ImgMediaCard = ({ coverImage, imageAlt, title, secondaryText, buttonText, onClick, maxWidth }) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: maxWidth,
      marginBottom: 20,
    },
  });

  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          {coverImage && 
            <CardMedia
              component="img"
              alt={imageAlt}
              height="140"
              image={coverImage}
              //title="Contemplative Reptile"
          />}
          <CardContent>
            {title && 
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            }
            {secondaryText && 
              <Typography variant="body2" color="textSecondary" component="p">
                {secondaryText}
              </Typography>
            }
          </CardContent>
        </CardActionArea>
        {buttonText && 
          <CardActions>
            <Button size="small" color="primary" onClick={onClick}>
              {buttonText}
            </Button>
          </CardActions>
        }
      </Card>
  );
}
export default ImgMediaCard;



/*import React from "react";
import styled from "styled-components/macro";

import Button from '../components/Button';

const Container = styled.section`
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0.12);
  background: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 3px 3px 0 0;
`;

const Content = styled.div`
  padding: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const SubTitle = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const Card = ({ title, subTitle, coverImage, className }) => {
  return (
    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          <div>
            {title && <Title>{title} </Title>}
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </div>
        </TitleBar>
      </Content>
    </Container>
  );
};
export default Card;*/

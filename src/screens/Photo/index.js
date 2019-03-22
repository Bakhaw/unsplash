import React, { useEffect, useState } from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import PlusIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import GalleryAPI from '../../api/gallery';
import HeartIcon from 'assets/icons/heart.svg';
import Button from '../../components/Button';

const PhotoWrapper = styled.div`
  border: 2px solid red;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const LikeButton = styled.img`
  height: 32px;
  width: 15px;
  margin-right: 5px;
`;

const UserDetail = styled.div`
  & img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
  & h1,
  h2 {
    margin: 0;
  }
  & h1 {
    color: #111;
    font-size: 15px;
  }
  & h2 {
    color: #999;
    font-size: 11px;
  }
`;

function Photo({ match }) {
  const [photo, setPhoto] = useState(null);

  const getPhoto = async () => {
    const { photoId } = match.params;
    const photo = await GalleryAPI.methods.photos.getPhotoById(photoId);
    await setPhoto(photo);
  };

  const likeImg = () => {
    alert('liked image');
  };

  useEffect(() => {
    getPhoto();
  }, []);

  if (photo === null) return <div>Loading ...</div>;

  return (
    <PhotoWrapper>
      <Row>
        <UserDetail>
          <Row>
            <img
              alt={`${photo.user.name} avatar`}
              src={photo.user.profile_image.large}
            />
            <div>
              <h1>{photo.user.name}</h1>
              <h2>@{photo.user.name}</h2>
            </div>
          </Row>
        </UserDetail>
        <Row>
          <Button onClick={likeImg} title='Like photo'>
            <LikeButton alt='Like button' src={HeartIcon} />
            <span>{photo.likes}</span>
          </Button>
          <Button title='Add to collection'>
            <PlusIcon fontSize='small' />
            <span>Collect</span>
          </Button>
          <Button>
            <ArrowDownIcon fontSize='small' />
            <span>Download</span>
          </Button>
        </Row>
      </Row>
      <p>{photo.id}</p>
    </PhotoWrapper>
  );
}

export default Photo;

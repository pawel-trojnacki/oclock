import React from 'react';

import { GalleryWrapper } from './GalleryStyles';
import GalleryImage from '../../components/Image/GalleryImage';
import Img1 from '../../images/gallery/gallery-1.jpg';
import Img2 from '../../images/gallery/gallery-2.jpg';
import Img3 from '../../images/gallery/gallery-3.jpg';
import Img4 from '../../images/gallery/gallery-4.jpg';

const Gallery = () => {
  return (
    <GalleryWrapper className="gallery-container">
      <GalleryImage src={Img1} from={0} to={60} />
      <GalleryImage src={Img2} from={0} to={40} />
      <GalleryImage src={Img3} from={0} to={20} />
      <GalleryImage src={Img4} from={0} to={0} />
    </GalleryWrapper>
  );
};

export default Gallery;

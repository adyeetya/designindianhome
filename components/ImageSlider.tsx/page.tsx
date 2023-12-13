'use client'
import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
type ListItem = {
    url:string;
}

type ListProps = {
    images:ListItem[];
}
const ImageSlider: React.FC<ListProps> = ({images}) => {
  return (
    <div>
      {' '}
      <SimpleImageSlider
        width={1096}
        height={704}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  )
}

export default ImageSlider
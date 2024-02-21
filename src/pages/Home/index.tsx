import { useState } from 'react';
import imgSrc from './1.jpg';

async function getImageContent(src: string) {
  let img
  if (src) {
    const imgResponse = await fetch(src);
    if (imgResponse) {
      const blob = await imgResponse.blob();
      img = URL.createObjectURL(blob);
    }
  }
  return img;
}

let defImg: string | undefined;
getImageContent(imgSrc).then(async (newImg) => {
  defImg = newImg
});

export default () => {
  const [img, setImg] = useState(defImg);

  const loadImage = async () => {
    if (defImg) {
      setImg(defImg)
      return
    }
    const newImg = await getImageContent(imgSrc);
    setImg(newImg)
  }

  return (
    <>
      {img && <img src={img} alt="cat" />}
      {!img && <button onClick={loadImage} type='button' className='theme' >load image</button>}
    </>
  );
}
import { useState, useRef } from 'react';
import imgSrc from './1.jpg';
import HelloAlert from '@/components/HelloAlert';
import styles from './index.less';

async function getImageContent(src: string) {
  let img: string | null = null;
  if (src) {
    try {
      const imgResponse = await fetch(src);
      if (imgResponse) {
        const blob = await imgResponse.blob();
        img = URL.createObjectURL(blob);
      }
    } catch (e) {
    }
  }
  return img;
}

export default () => {
  const [img, setImg] = useState<string | null>(null);
  const ref = useRef<boolean>(false);
  const [isWatched, setIsWatched] = useState<boolean>(false);

  const showHelloAlert = async () => {
    if(isWatched){
      return;
    }
    const newImg = await getImageContent(imgSrc);
    setImg(newImg);
  }

  const closeHelloAlert = () => {
    setIsWatched(true);
    setImg(null);
  }

  return (
    <>
      {img && (
        <HelloAlert onClose={closeHelloAlert}>
          <img src={img} alt="cat" className={styles.img} />
        </HelloAlert>
      )}
      {!img && !isWatched && <button onClick={showHelloAlert} type='button' className='theme' >load image</button>}
    </>
  );
}
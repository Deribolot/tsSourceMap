import { useState } from 'react';
import imgSrc from '@/1.jpg';
import styles from './index.less';

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
export default function () {
    const [img, setImg] = useState(defImg);


    const loadImage = async () => {
        import('lodash/join')
        if (defImg) {
            setImg(defImg)
            return
        }
        const newImg = await getImageContent(imgSrc);
        setImg(newImg)
    }

    return (
        <div className={styles.main}>
            App
            {img && <img src={img} alt="cat" />}
            {!img && <button onClick={loadImage} type='button' >load image</button>}
        </div>
    );
}
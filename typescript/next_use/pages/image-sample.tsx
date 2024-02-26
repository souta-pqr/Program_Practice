import { NextPage } from "next";
import Image from "next/image";
import BibleImage from "../public/images/bible.jpg";

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/image/bible.jpeg" />
            <p>imageコンポーネントで表示した場合</p>
            <Image src={BibleImage.src} alt="" />
            <p>Imageで表示した場合は事前に描画エリアが確保されます．</p>
        </div>
    )
}

export default ImageSample;
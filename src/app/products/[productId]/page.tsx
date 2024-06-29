import {Metadata} from "next"

type Props = {
    params: {productId: string}

}
export const generateMetadata =async ({params}:Props):Promise<Metadata> =>{
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`);
        }, 1000);
    });
    return {
        title: `Product ${title}`,
    };

}

export default function ProductDetails({ params }: { params: { productId: string } }) {
    return <h1>Product Details {params.productId}</h1>;
} 
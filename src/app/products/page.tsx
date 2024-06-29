import Link from "next/link";
export default function Products() {
    return <div>
        <Link href="/products/1"><h1>Product 1</h1></Link>
        <Link href="/products/2"><h1>Product 2</h1></Link>
        <Link href="/products/3"><h1>Product 3</h1></Link>
        <Link href="/products/4"><h1>Product 4</h1></Link>
<Link href="/">Home</Link>
         </div>;
}
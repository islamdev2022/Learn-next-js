export default function ProductDetailsLayout({ children } : {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <h1>Feature Product</h1>
            
        </div>
    );
}
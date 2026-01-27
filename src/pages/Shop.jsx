import { ProductCard } from "../components/ProductCard";

export default function Shop (){
    const products = [{id: 1, name: "Tester Product", price: 50, }]

    return(
        <div>
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
    )
}
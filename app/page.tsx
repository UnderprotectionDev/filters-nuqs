import ProductCard from "@/components/product-card";
import { ProductsFilter } from "@/components/products-filter";
import { Product } from "@/components/shared/types";
import { getProducts } from "@/server/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto p-10">
      <h1>Awesome Products</h1>

      <ProductsFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

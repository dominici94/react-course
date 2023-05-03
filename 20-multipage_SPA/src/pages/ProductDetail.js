import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  // params.productId;

  return (
    <>
      <h1>Product details</h1>
      <p>{params.id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;

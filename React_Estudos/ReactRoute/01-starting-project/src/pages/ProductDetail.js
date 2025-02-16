import { Link, useParams } from 'react-router-dom'
export default function ProductDetailPage() {
    const params = useParams();
    return <div><h1>Product Detail</h1>
        <p>{params.id}</p>
        <p><Link to="..">Back</Link></p>
    </div>
}
import { Link, useNavigate } from 'react-router-dom'
function HomePage() {
    const navigate = useNavigate()
    return <div><h1>My Home Page</h1>
        <Link to="/products">the list of products</Link>
        <button onClick={() => navigate('/products')}>Navigate</button>
    </div>;

}

export default HomePage
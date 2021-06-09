import { useEffect } from 'react'
import { Link  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 
import { fetchData } from '../../actions/ProductActions'
import Layout from '../Layout'

const Product = ()=>{
	const dispatch = useDispatch()
	const products = useSelector(state=>state.products.products)

	useEffect(()=>{
		
	},[])
	
	const listProducts=()=>{
        return products.map((item, index)=>{
            return (
                <li key={item.id}>{item.id}. <Link to={`/product/${item.id}`}>{item.name}</Link></li>
            )
        })
    }
	
	return (
		<Layout>
			<ul>
				<button onClick={()=>dispatch(fetchData())}>Fetch Data</button>
			{ listProducts() }
			</ul>
		</Layout>
	)
}

export default Product
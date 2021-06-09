import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../Layout'
import { fetchData } from '../../actions/ProductActions'

const Home = ()=>{
	const [counter, setCounter] = useState(0)
	
	const state = useSelector(state=>{
		return state.products?.products
	})
	const dispatch = useDispatch()
	
	useEffect(()=>{
		console.log(state)
	},[state])
	
	return (
		<Layout>
			Counter is { counter }
			<div>	
				<button onClick={()=>setCounter(counter+1)}>+ 1</button> <button onClick={()=>setCounter(counter-1)}>- 1</button>
			</div>
			<hr/>
			<button onClick={()=>dispatch(fetchData())}>FETCH_DATA</button>
		</Layout>
	)
}

export default Home
import Axios from '../configurations/Axios'

export const fetchData = ()=>{
	return (dispatch)=>{
		Axios.get('/users')
		.then(res=>dispatch({type:"FETCH_DATA", payload: res.data}))
	}
}
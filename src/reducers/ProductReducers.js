import { combineReducers } from 'redux'

const ProductReducers = (state={products:[]}, action)=>{
	switch(action.type){
		case "FETCH_DATA":
			return { ...state, products: action.payload }
		default:
			return state;
	}
}

const AllReducers = combineReducers({
	products: ProductReducers
})

export default AllReducers;
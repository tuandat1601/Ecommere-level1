import * as type from '../constant/ActionType'
const cart = [];
const handleCart = (state = cart, action) => {
	const product = action.payload;
	switch (action.type) {
		case type.ADD_ITEM:
			
			const exist = state.find((x) => x.id === product.id);
			if (exist) {
				
				return state.map((x) =>
					x.id === product.id ? { ...x , qt:x.qt + 1}:x);
			}else {
				const product = action.payload;
				
				return [
					...state,
					{
						...product,
						qt:1,
						}
					]
			}
			break;
		case type.DELETE_ITEM:
			const exist1 = state.find((x) => x.id === product.id);
			if(exist1.qt===1){
				return state.filter((x)=>x.id!==exist1.id);

			}
			else{
				return state.map((x)=>
				x.id===exist1.id?{...x,qt:x.qt-1}:x);
			}
			break;	
			default:
				return state;
				break;

	}
}
export default handleCart;
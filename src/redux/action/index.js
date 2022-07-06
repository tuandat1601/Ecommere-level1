import  * as type from '../constant/ActionType'
export const addCart = (product)=>{
	return  {
		type:type.ADD_ITEM,
		payload:product
	}
}
export const delCart = (product)=>{
	return  {
		type:type.DELETE_ITEM,
		payload:product
	}
}
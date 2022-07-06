export async function  getList(){
	return await fetch('https://fakestoreapi.com/products')
	.then(data=>data.json())
}
export async function  getId(id){
	return await fetch(`https://fakestoreapi.com/products/${id}`)
	.then(data=>data.json())
}
import React, { useState, useEffect } from 'react'
import Skeleton  from 'react-loading-skeleton';
import {Link} from 'react-router-dom'
import {getList} from '../services/List'
function products() {
	
	const [data, setData] = useState([])
	const [filter, setFilter] = useState(data)
	const [loading, setLoading] = useState(false);
	let componentMounted = true;
	
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);		
			if (componentMounted) {
				await getList().then((data)=>{
					 setData(data);
					 setFilter(data);
				})
				
				setLoading(false);
				
			}
			return () => {
				componentMounted = true;
			}
		}
		getProducts();
	}, []);
	const Loading = () => {
		return (
			<>
			
				<div className="ske ">
					<Skeleton height={350}/>
				</div>
				<div className=" ske ">
					<Skeleton height={350} />
				</div>
				<div className=" ske ">
					<Skeleton height={350} />
				</div>
				<div className="ske ">
					<Skeleton height={350} />
				</div>
				
			</>
		);
	}
	const setFilterProduct = (text)=>{
		const updatData = data.filter(x=>x.category===text);
		setFilter(updatData)
	}
	const ShowProducts = () => {
		return (
			<>
				<div className="buttons justify-content-center mb-5 pb-5 btn-list">
					<button className=' btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>ALL</button>
					<button className=' btn btn-outline-dark me-2' onClick={()=>setFilterProduct("men's clothing")}>Men's clothing</button>
					<button className=' btn btn-outline-dark me-2'onClick={()=>setFilterProduct("women's clothing")}>Women's clothing</button>
					<button className=' btn btn-outline-dark me-2'onClick={()=>setFilterProduct("jewelery")}>Jewelery</button>
					<button className=' btn btn-outline-dark me-2'onClick={()=>setFilterProduct("electronics")}>Electronic</button>
				</div>

				{filter.map(product=>{
					return(

					<div className="col-md-3 mb-4" key={product.id}>
				<div class="card h-100 text-center p-4" >
					<img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
						<div className="card-body">
							<h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
							<p className="card-text lead fw-bold">{product.price}</p>
							<Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</Link>
						</div>
				</div>
				</div>
					)
				})}
				
			</>
		)

	}
	return (
		<div>
			<div className="container my-5 py-5">
				<div className="row ">
					<div className="mb-5 col-12">
						<h1 className='fw-bolder display-6 text-center'>Lastest Products</h1>
						<hr />
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ? <Loading /> : <ShowProducts />}
				</div>
			</div>
		</div>
	)
}

export default products
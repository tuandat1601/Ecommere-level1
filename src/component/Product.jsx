import React, { useEffect, useState,useRef } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getId } from '.././services/List'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action/index'
import { useSelector } from 'react-redux'

function Product() {
	let useref = useRef([]);
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	let products =  JSON.parse(localStorage.getItem("products"))
	let state = useSelector((state) => state.handleCart);
	const addProduct = async (product) => {
		
		if((state.length===0&&products.length===0)||(state.length>0)){
			await dispatch(addCart(product)) 
		}
		else{
			await localStorage.setItem("products",JSON.stringify(products));
			products.forEach((e)=>{
				dispatch(addCart(e))
			})
			await dispatch(addCart(product))
			
		}
		
		await localStorage.setItem("products",JSON.stringify(state));
		await console.log(state)
	}
	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			await getId(id).then(data => {
				setProduct(data)
				
			})
			setLoading(false);
		}
		getProduct();
	},[]);
	const Loading = () => {
		return (
			<>
				<div className="col-md-6">
					<Skeleton height={400} />
				</div>
			</>
		)
	}
	const ShowProduct = () => {
		return (
			<>
				<div className="col-md-6">
					<img src={product.image}
						alt={product.title}
						height="400px"
						width="400px" />
				</div>
				<div className="col-md-6">
					<h4 className='text-uppercase text-black-50'>
						{product.category}
					</h4>
					<h1 className='display-5'>{product.title}</h1>
					<p className='lead fw-bolder'>
						Rating {product.rating && product.rating.rate}
						<i class="fa fa-star" aria-hidden="true"></i>
					</p>
					<h3 className='display-6 fw-bold my-4'>
						$ {product.price}
					</h3>
					
					<p className='lead'>
						{product.description}
					</p>
					
					<button className='btn btn-outline-dark'
						onClick={() => addProduct(product)}
					>
						Add to cart
					</button>
					<Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
						Go to cart
					</Link>
				</div>
			</>
		)
	}
	return (
		<div>
			<div className="container py-5">
				<div className="row py-5">
					{loading ? <Loading /> :
						<ShowProduct />}
				</div>
			</div>
		</div>
	)
}

export default Product
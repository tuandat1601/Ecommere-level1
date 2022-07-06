import React from 'react'
import Products from './Products'
function Home() {
	return (
		<div className='hero'>
			<div className="card bg-dark text-white border-0">
				

				<img height="600px"  src="/assets/pexels-vlada-karpovich-4050284.jpg" class="card-img" alt="Background" />
				
				<div className="card-img-overlay d-flex flex-column justify-content-center">
					<div className="container">

					</div>
					<h5 className="card-title fw-bolder mb-0 display-3">NEW SEASON ARRIVALS</h5>
					<p className="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
					
				</div>
			</div>
			<Products/>
		</div>
	)
}

export default Home
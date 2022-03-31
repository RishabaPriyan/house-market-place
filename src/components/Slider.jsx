import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Spinner from '../components/Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Slider() {
	const [loading, setLoading] = useState(true)
	const [listings, setListings] = useState(null)

	const navigate = useNavigate()
	useEffect(() => {
		const fetchListing = async () => {
			const listingsRef = collection(db, 'listings')
			const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
			const querySnap = await getDocs(q)
			let listings = []
			querySnap.forEach((doc) => {
				return listings.push({
					id: doc.id,
					data: doc.data(),
				})
			})
			//console.log(listings)
			setListings(listings)
			setLoading(false)
		}
		fetchListing()
	}, [])

	if (loading) {
		return <Spinner />
	}
	if (listings.length === 0) {
		return <></>
	}
	return (
		listings && (
			<>
				<p className="exploreHeading">Recommended</p>
				<Swiper slidesPerView={1} pagination={{ clickable: true }}>
					{listings.map(({ data, id }) => (
						<SwiperSlide
							key={id}
							onClick={() => {
								navigate(`/category/${data.type}/${id}`)
							}}
						>
							<div
								className="swiperSlideDiv"
								style={{
									background: `url(${data.imgUrls[0]}) center no-repeat`,
									backgroundSize: 'cover',
								}}
							>
								<p className="swiperSlideText">{data.name}</p>
								<p className="swiperSlidePrice">
									₹
									{data.discountedPrice
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ',') ??
										data.regularPrice
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
									{data.type === 'rent' && '/month'}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		)
	)
}

export default Slider

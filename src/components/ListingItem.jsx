import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'
function ListingItem({ listing, id, onEdit, onDelete }) {
	return (
		<li className="categoryListing">
			<Link
				className="categoryListingLink"
				to={`/category/${listing.type}/${id}`}
			>
				<img
					className="categoryListingImg"
					src={listing.imgUrls[0]}
					alt="listing.name"
				/>
				<div className="categoryListingDetails">
					<p className="categoryListingLocation">{listing.location}</p>
					<p className="categoryListingName">{listing.name}</p>
					<p className="categoryListingPrice">
						₹
						{listing.offer
							? listing.discountedPrice
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
							: listing.regularPrice
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
						{listing.type === 'rent' && '/Month'}
					</p>
					<div className="categoryListingInfoDiv">
						<img src={bedIcon} alt="bed" />
						<p className="categoryListingInfoText">
							{listing.bedrooms > 1
								? `${listing.bedrooms} Bedrooms`
								: '1 bedroom'}
						</p>
						<img src={bathtubIcon} alt="bath" />
						<p className="categoryListingInfoText">
							{listing.bedrooms > 1
								? `${listing.bathrooms} Bathrooms`
								: '1 bathroom'}
						</p>
					</div>
				</div>
			</Link>
			{onDelete && (
				<DeleteIcon
					className="removeIcon"
					fill="rgb(231,76,60"
					onClick={() => onDelete(listing.id, listing.name)}
				/>
			)}
			{onEdit && (
				<EditIcon
					className="editIcon"
					onClick={() => {
						onEdit(id)
					}}
				/>
			)}
		</li>
	)
}

export default ListingItem

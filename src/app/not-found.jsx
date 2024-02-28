import Link from 'next/link'

const NotFound = () => {
	return (
		<div>
			<p className='text-4xl text-center'>404 not found</p>
			<div className='grid place-content-center mt-8'>
				<Link
					href='/'
					className='bg-gray-700 rounded-md text-white p-2'
				>
					Return home
				</Link>
			</div>
		</div>
	)
}
export default NotFound

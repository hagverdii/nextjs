import Links from './links/Links'

const Navbar = () => {
	return (
		<div className='bg-blue-950 h-24 flex items-center justify-between'>
			<div className='text-2xl font-bold'>Logo</div>
			<div>
				<Links />
			</div>
		</div>
	)
}
export default Navbar

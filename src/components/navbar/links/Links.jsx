import NavLink from './navLink/navLink'

const Links = () => {
	const links = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Contact', path: '/contact' },
		{ title: 'Blog', path: '/blog' },
	]

	const session = true
	const isAdmin = true

	return (
		<div className='flex items-center gap-3'>
			{links.map((link) => (
				<NavLink
					item={link}
					key={link.title}
				/>
			))}
			{session ? (
				<>
					{isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
					<button className='p-2 bg-slate-200 text-gray-950 font-bold rounded-2xl min-w-20'>
						Logout
					</button>
				</>
			) : (
				<NavLink item={{ title: 'Login', path: '/login' }} />
			)}
		</div>
	)
}
export default Links

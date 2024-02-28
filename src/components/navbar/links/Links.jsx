import Link from 'next/link'

const Links = () => {
	const links = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Contact', path: '/contact' },
		{ title: 'Blog', path: '/blog' },
	]
	return (
		<div className='flex items-center gap-3'>
			{links.map((link) => (
				<Link
					key={link.path}
					href={link.path}
				>
					{link.title}
				</Link>
			))}
		</div>
	)
}
export default Links

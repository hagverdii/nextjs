'use client'
import { usePathname } from 'next/navigation'

const { default: Link } = require('next/link')

const NavLink = ({ item }) => {
	const pathName = usePathname()

	return (
		<Link
			href={item.path}
			className={`p-2 font-bold text-center min-w-28 rounded-2xl ${
				pathName === item.path && 'text-slate-950 bg-slate-200'
			}`}
		>
			{item.title}
		</Link>
	)
}
export default NavLink

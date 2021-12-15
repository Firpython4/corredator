import { Link } from 'react-router-dom'

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>home</Link>
				</li>
				<li>
					<Link to='/correction'>correction</Link>
				</li>
				<li>
					<Link to='/submit'>submit</Link>
				</li>
			</ul>
		</nav>
	)
}
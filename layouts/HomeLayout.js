import HomeNav from '../components/HomeNav'
import Footer from '@/components/Footer'

const HomeLayout = ({ children }) => {
	return (
		<>
			<HomeNav></HomeNav>
			<main>{children}</main>
			<Footer></Footer>
		</>
	)
}

export default HomeLayout

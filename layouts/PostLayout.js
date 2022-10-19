import { useState } from "react";
import PostNav from '@/components/PostNav'
import Footer from '@/components/Footer'
import { NavContext } from "../contexts/navContext";

const PostLayout = ({ children, props }) => {
	// const [isPostHeaderVisible, setIsPostHeaderVisible] = useState(false);

	return (
		<>
			{/* <NavContext.provider value={[isPostHeaderVisible, setIsPostHeaderVisible]}> */}
				<PostNav postTitle={children.props.frontmatter.title}></PostNav>
				<main>{children}</main>
				<Footer></Footer>
			{/* </NavContext.provider> */}
		</>
	)
}

export default PostLayout;
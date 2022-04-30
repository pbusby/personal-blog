import Link from 'next/link'
import styled from 'styled-components'
import PostCardTile from '../components/PostCardTile.js'
import FeaturedPostCard from '../components/FeaturedPostCard.js'
import { getAllPosts } from '../utils/mdx'
import SvgArrowCircleRight from '../public/images/arrow-right-circle'
import SvgArrowDownCircle from '../public/images/arrow-down-circle'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Wrapper = styled.div`
	background: ${({ theme }) => theme.body};
`

const FeaturedPostWrapper = styled.div``

const FeaturedPostsRow = styled.div.attrs({
	className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-4',
})`
	margin-bottom: 70px;
`

const RightArrow = styled.span`
	font-size: 25px;
	font-weight: 800;
	margin-left: 20px;
	color: ${({ theme }) => theme.text};
	transition: all 0.5s linear;
`

const DownArrow = styled.span`
	font-size: 25px;
	font-weight: 800;
	display: inline-block;
	transform: rotate(90deg);
	margin-left: 20px;
	color: ${({ theme }) => theme.text};
	transition: all 0.5s linear;
`

const LettersContainer = styled.div`
	img {
		// margin-left: 2px;
		display: inline-block;
		width: 20px;
	}
`

export default function BlogList({ featuredPosts, remainingPosts }) {
	const themeContext = useContext(ThemeContext)

	return (
		<>
			<div className="mx-auto p-12">
				<span className="section-title">Recent</span>
				<SvgArrowDownCircle
					theme={themeContext}
					className="inline ml-2 mb-2"
				></SvgArrowDownCircle>
				<FeaturedPostsRow>
					{featuredPosts.map((post, index) => (
						<FeaturedPostWrapper key={index} className="col-span-1">
							<Link href={`posts/${post.slug}`}>
								<FeaturedPostCard post={post} />
							</Link>
						</FeaturedPostWrapper>
					))}
				</FeaturedPostsRow>

				<span className="section-title">Departed</span>
				<SvgArrowCircleRight
					theme={themeContext}
					className="inline ml-2 mb-2"
				></SvgArrowCircleRight>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{remainingPosts.map((post, index) => (
						<Link key={index} href={`posts/${post.slug}`}>
							<PostCardTile post={post} />
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts()
	const featuredPosts = posts.slice(0, 2)
	const remainingPosts = posts.splice(2)

	return {
		props: { featuredPosts, remainingPosts },
	}
}

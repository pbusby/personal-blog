import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import PostCardTile from '../components/PostCardTile.js'
import FeaturedPostCard from '../components/FeaturedPostCard.js'
import { getAllPosts } from '../utils/mdx'
import SvgArrowCircleRight from '../public/images/arrow-right-circle'
import SvgArrowDownCircle from '../public/images/arrow-down-circle'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { gql, useMutation, useQuery } from '@apollo/client'
import { MediaStoreData } from 'aws-sdk'

const GET_POSTS = gql`
	query POSTS {
		posts {
			bannerPath
			date
			description
			imagePlaceholder
			tags
			teaser
			title
			slug
		}
	}
`

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
	const { data, loading, error } = useQuery(GET_POSTS)
	const [extraPosts, setExtraPosts] = useState([])

	if (loading) return 'Fetching...'
	if (error) return `Fetch error! ${error.message}`
	debugger

	const fetchMorePosts = async () => {
		await fetch('api/posts')
			.then((res) => res.json())
			.then((data) => {
				setExtraPosts(data)
			})
		debugger
		console.log('fetched more')
	}

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
					{/* <span onClick={fetchMorePosts}>&#10132;</span> */}
					{remainingPosts.map((post, index) => (
						<Link key={index} href={`posts/${post.slug}`}>
							<PostCardTile post={post} />
						</Link>
					))}
					{/* <span>&#10132;</span> */}
					<div>{JSON.stringify(extraPosts)}</div>
				</div>
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts()
	console.log('posts size here', JSON.stringify(posts).length)
	const featuredPosts = posts.slice(0, 2)
	const remainingPosts = posts.splice(2)

	return {
		props: { featuredPosts, remainingPosts },
	}
}

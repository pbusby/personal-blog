import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import PostCardTile from '../components/PostCardTile.js'
import FeaturedPostCard from '../components/FeaturedPostCard'
import { getAllPosts } from '../utils/mdx'
import SvgArrowCircleRight from '../public/images/arrow-right-circle'
import SvgArrowDownCircle from '../public/images/arrow-down-circle'
=import { gql, useQuery } from '@apollo/client'
import HomeLayout from "@/layouts/HomeLayout";

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

const FeaturedPostWrapper = styled.div``

const FeaturedPostsRow = styled.div.attrs({
	className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-4',
})`
	margin-bottom: 70px;
`

export default function BlogHome({ featuredPosts, remainingPosts }) {
	// const { data, loading, error } = useQuery(GET_POSTS)
	const [extraPosts, setExtraPosts] = useState([])

	// if (error) return `Fetch error! ${error.message}`

	const fetchMorePosts = async () => {
		await fetch('api/posts')
			.then((res) => res.json())
			.then((data) => {
				setExtraPosts(data)
			})
		console.log('fetched more')
	}

	return (
		<>
			<div className="mx-auto p-12">
				<span className="section-title">Recent</span>
				<SvgArrowDownCircle
					className="inline ml-2 mb-2"
				></SvgArrowDownCircle>
				<FeaturedPostsRow>
					{featuredPosts.map((post, index) => (
						<FeaturedPostWrapper key={index} className="col-span-1">
							<Link href={`posts/${post.slug}`} passHref>
								<FeaturedPostCard post={post} />
							</Link>
						</FeaturedPostWrapper>
					))}
				</FeaturedPostsRow>

				<span className="section-title">Departed</span>
				<SvgArrowCircleRight
					className="inline ml-2 mb-2"
				></SvgArrowCircleRight>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{remainingPosts.map((post, index) => (
						<Link key={index} href={`posts/${post.slug}`}>
							<PostCardTile post={post} />
						</Link>
					))}
					<div>{JSON.stringify(extraPosts)}</div>
				</div>
			</div>
		</>
	)
}

BlogHome.getLayout = function getLayout(page) {
	return <HomeLayout>{page}</HomeLayout>
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

import React, { useEffect, useState, useRef } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/mdx'
// import Comments from "../../components/Comments.js"
import styled from 'styled-components'
import PostBanner from '../../components/PostBanner.js'
import PostIntroSection from '../../components/PostIntroSection.js'
import PostHeader from '../../components/PostHeader.js'
import SimpleModal from '../../components/SimpleModal.js'
import { useContext } from 'react'
import { NavContext } from '../../contexts/navContext'
import SvgArrowDownCircle from '../../public/images/arrow-down-circle'
import { Element, scroller } from 'react-scroll'
import PostLayout from '../../layouts/PostLayout.js'

const ContentContainer = styled.div`
	margin-bottom: 20px;
	p:first-of-type:first-letter {
		float: left;
		line-height: 1;
		margin-right: 5px;
		font-size: 45px;
		font-weight: bold;
	}
`

const Post = ({ code, props, frontmatter }) => {
	const [postComments, setPostComments] = useState([])
	// const PostContent = React.useMemo(() => getMDXComponent(code), [code]);
	// this provides better performance but is currently conflicting with useEffect and causing the following error:
	// React has detected a change in the order of Hooks
	const PostContent = getMDXComponent(code)
	const postHeaderRef = useRef();
	const [isPostHeaderVisible, setIsPostHeaderVisible] = useContext(NavContext)


	let isMobile
	if (typeof window !== 'undefined') {
		isMobile = window.matchMedia('(max-width: 992px)').matches
	}

	const scrollToTarget = () => {
		scroller.scrollTo('post-body', {
			duration: 800,
			delay: 0,
			offset: -100,
			smooth: 'easeInOutQuart',
		})
	}

	useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			const entry = entries[0];	
			setIsPostHeaderVisible(entry.isIntersecting)
		});
		observer.observe(postHeaderRef?.current);

		const fetchComments = async () => {
			const title = frontmatter.title
			if (title) {
				let result = await fetch(`/api/comments?postTitle=${title}`)
				result = await result.json()
				setPostComments(result)
			}
		}
		fetchComments()
		// console.log('this is comments', comments);
	}, [])
	return (
		<>
			{/* <HamburgerHeader></HamburgerHeader> */}
			<article>
				<PostHeader
					frontmatter={frontmatter}
					isMobile={isMobile}
					scrollCallback={scrollToTarget}
					ref={postHeaderRef}
				></PostHeader>
				<PostBanner
					bannerPath={frontmatter.bannerPath}
					blurDataUrl={frontmatter.imagePlaceholder}
				/>
				<Element name="post-body">
					<div className="container mx-auto max-w-screen-md px-10 mb-8">
						{/* {JSON.stringify(postComments)} */}
						{/* <PostIntroSection frontmatter={frontmatter} /> */}
						<ContentContainer>
							<PostContent id="PostContent" />
						</ContentContainer>
						{/* <span className="section-title">Comments</span>
          <SvgArrowDownCircle theme={themeContext} className="inline ml-4 mb-2"></SvgArrowDownCircle> */}
						{/* <Comments postComments={postComments} postMeta={frontmatter} /> */}
					</div>
				</Element>
			</article>
		</>
	)
}

Post.getLayout = function getLayout(page) {
	return <PostLayout>{page}</PostLayout>
}

export const getStaticProps = async ({ params }) => {
	const post = await getSinglePost(params.slug)

	return {
		props: { ...post },
	}
}

export const getStaticPaths = async () => {
	const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
	return {
		paths,
		fallback: false,
	}
}

export default Post

import React from 'react'
import styled from 'styled-components'
import ProgressiveImage from './ProgressiveImage'
import Tag from './Tag.js'
import LazyLoad from 'react-lazyload';


const Card = styled.div`
	width: 100%;
	height: 450px;
	position: relative;
	margin-bottom: 20px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	h4 {
		// color: #999999;
	}
`

interface PostMeta {
	bannerPath: string
	date: string
	description: string
	imagePlaceholder: string
	mapRegion: string
	tags: string
	teaser: string
	title: string
}

interface Post {
	frontmatter: PostMeta
	slug: string
}

// React.forwardRef docs
// https://nextjs.org/docs/api-reference/next/link
const FeaturedPostCard = React.forwardRef(
	(
		{
			onClick,
			href,
			post,
		}: { onClick?: React.MouseEventHandler; href: string; post: Post },
		ref: React.ForwardedRef<HTMLAnchorElement>
	) => {
		const tags = post.frontmatter.tags?.split(',')

		return (
			<a href={href} onClick={onClick} ref={ref}>
				<LazyLoad height={450} once>
				<Card className="aspect-w-16 aspect-h-9">
					<ProgressiveImage
						originalFileName={post.frontmatter.bannerPath}
						blurDataUrl={post.frontmatter.imagePlaceholder}
					></ProgressiveImage>
				</Card>
				</LazyLoad>
				<div>
					<div className="flex justify-between items-start relative">
						<h4 className="mb-2 mt-2 post-card-title">
							{post.frontmatter.title}
						</h4>
						<div>
							{tags?.map((tag) => (
								<Tag text={tag}></Tag>
							))}
						</div>
					</div>
				</div>
			</a>
		)
	}
)

export default FeaturedPostCard

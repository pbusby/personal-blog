import React from 'react';
import styled from 'styled-components';
import ProgressiveImage from './ProgressiveImage';
import Tag from './Tag.js'


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

// React.forwardRef docs
// https://nextjs.org/docs/api-reference/next/link
const FeaturedPostCard = React.forwardRef(({ onClick, href, post }, ref) => {
	const tags = post.frontmatter.tags?.split(',')

	return (
		<a href={href} onClick={onClick} ref={ref}>
			<Card className="aspect-w-16 aspect-h-9">
				<ProgressiveImage originalFileName={post.frontmatter.bannerPath} blurDataUrl={post.frontmatter.imagePlaceholder}></ProgressiveImage>
			</Card>
			<div>
				<div className="flex justify-between items-start relative">
				<h4 class="mb-2 mt-2 post-card-title">{post.frontmatter.title}</h4>
				{/* <p class="post-card-description">{post.frontmatter.description}</p> */}
				<div>
					{tags?.map((tag) => (
						<Tag text={tag}></Tag>
					))}
				</div>
			</div>
			</div>
		</a>
	);
});

export default FeaturedPostCard;
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import Tag from './Tag.js'


const Card = styled.div`
	width: 100%;
	height: 450px;
	position: relative;
	margin-bottom: 20px;
	h4 {
		// color: #999999;
	}

`

// React.forwardRef docs
// https://nextjs.org/docs/api-reference/next/link
const PostCardTile = React.forwardRef(({ onClick, href, post }, ref) => {
	const tags = post.frontmatter.tags?.split(',')

	return (
		<a href={href} onClick={onClick} ref={ref}>
			<Card>
				<Image
        src={`https://res.cloudinary.com/dtb2b6cpx/image/upload/${post.frontmatter.bannerPath}`}
        layout='fill'
				objectFit='cover'
        objectPosition='center'
      	/>
			</Card>
			<div>
						<h4 class="mb-2 mt-2 post-card-title">{post.frontmatter.title}</h4>
						{/* <p class="post-card-description">{post.frontmatter.description}</p> */}
						<div>
							{tags?.map((tag) => (
								<Tag text={tag}></Tag>
							))}
          	</div>
				</div>
		</a>
	);
});

export default PostCardTile;
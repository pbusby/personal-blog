import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Card = styled.div`
	width: 300px;
	margin-bottom: 20px;
	h4 {
		color: #999999;
	}
	
`

// React.forwardRef docs
// https://nextjs.org/docs/api-reference/next/link
const PostCard = React.forwardRef(({ onClick, href, post }, ref) => {

	return (
		<a href={href} onClick={onClick} ref={ref}>
			<Card>    
				<Image
        src="https://picsum.photos/300/300"
        alt="Picture of the author"
        width={300}
        height={300}
      	/>
				<div>
						<h4 class="mb-2 mt-2 uppercase">{post.frontmatter.title}</h4>
						<p class="post-card-description">{post.frontmatter.description}</p>
				</div>
			</Card>
		</a>
	);
});

export default PostCard;
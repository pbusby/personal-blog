import React, {useEffect, useState} from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import Comments from "../../components/Comments.js"
import styled from 'styled-components';

const ContentContainer = styled.div`
  margin-bottom: 20px;
`

const Post = ({ code, frontmatter }) => {


  const [postComments, setPostComments] = useState([])
  // const PostContent = React.useMemo(() => getMDXComponent(code), [code]);
  const PostContent = getMDXComponent(code);


  useEffect(() => {
    const fetchComments = async () => {
      const title = frontmatter.title
      debugger
      if (title) {
        let result = await fetch(`/api/comments?postTitle=${title}`)
        result = await result.json()
        setPostComments(result)
      }
    }
    fetchComments();
    // console.log('this is comments', comments);
  }, [])
  return (
    <div className="container mx-auto max-w-screen-md px-10 mb-8">
      {/* {JSON.stringify(postComments)} */}
      <h1 className="post-title">{frontmatter.title}</h1>
      <ContentContainer>
        <PostContent />
      </ContentContainer>
      <Comments postComments={postComments} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
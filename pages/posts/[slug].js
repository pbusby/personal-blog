import React, {useEffect, useState} from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import styled from 'styled-components';

const Comments = styled.div`
  background: grey;
  width: 100%;
  height: 400px;
  color: white;
`

const Post = ({ code, frontmatter }) => {


  const [comments, setComments] = useState([])
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  useEffect(() => {
    const fetchMock = async () => {
      let result = await fetch('/api/comments')
      result = await result.json()
      debugger
      setComments(result)
    }
    fetchMock();
    console.log('this is comments', comments);
  }, [])
  return (
    <div className="container mx-auto max-w-screen-md px-10">
      {JSON.stringify(comments)}
      <h1 className="post-title">{frontmatter.title}</h1>
      <Component />
      <Comments>{comments.map((comment) => (
        <p>{comment.id} {comment.message}</p>
      ))}</Comments>
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
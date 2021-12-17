import React, {useEffect, useState, useRef} from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import Comments from "../../components/Comments.js"
import styled from 'styled-components';
import PostBanner from "../../components/PostBanner.js"
import PostIntroSection from "../../components/PostIntroSection.js"
import PostHeader from "../../components/PostHeader.js"
import HamburgerHeader from "../../components/HamburgerHeader.js"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import SvgArrowDownCircle from '../../public/images/arrow-down-circle'
import { Element, scroller } from 'react-scroll'

const ContentContainer = styled.div`
  margin-bottom: 20px;
`

const Post = ({ code, props, frontmatter }) => {

  const themeContext = useContext(ThemeContext)
  const [postComments, setPostComments] = useState([])
  // const PostContent = React.useMemo(() => getMDXComponent(code), [code]);
  // this provides better performance but is currently conflicting with useEffect and causing the following error:
  // React has detected a change in the order of Hooks
  const PostContent = getMDXComponent(code);

  let isMobile
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia('(max-width: 992px)').matches
  }
  const scrollToTarget = () => {
    // const element = document.getElementById('postBody');
    // const elementPosition = element.getBoundingClientRect().top - 100
    // window.scrollTo( {top: elementPosition, behavior: 'smooth' } )
    scroller.scrollTo('post-body', {
      duration: 800,
      delay: 0,
      offset: -75,
      smooth: 'easeInOutQuart'
    })
  }

  useEffect(() => {
    const fetchComments = async () => {
      const title = frontmatter.title
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
    <>
      {/* <HamburgerHeader></HamburgerHeader> */}
      <PostHeader frontmatter={frontmatter} isMobile={isMobile} scrollCallback={scrollToTarget}></PostHeader>
      <PostBanner bannerPath={frontmatter.bannerPath} />
      <Element name="post-body">
      <div className="container mx-auto max-w-screen-md px-10 mb-8">
        {/* {JSON.stringify(postComments)} */}
        {/* <PostIntroSection frontmatter={frontmatter} /> */}
        <ContentContainer>
          <PostContent />
        </ContentContainer>
        <span className="section-title">Comments</span>
        <SvgArrowDownCircle theme={themeContext} className="inline ml-4 mb-2"></SvgArrowDownCircle>
        <Comments postComments={postComments} />
      </div>
      </Element>
    </>
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
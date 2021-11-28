import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dayjs from 'dayjs';

const CommentsContainer = styled.div`
  width: 100%;
  height: 1000px;
  background: #EDF2F7;
`

const CommentRow = styled.div`
  width: 100%;
  min-height: 50px;
  color: #8FA6B2;
  padding: 20px 20px 0 20px;
  margin-bottom: 10px;
`

const AuthorMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const AuthorMeta = styled.div`
  display: flex;
  h6 {
    padding-right: 10px;
  }
`

const SocialActions = styled.div`
  display: flex;
  p {
    padding-right: 10px;
  }
`

const Comment = styled.div`
border-bottom: 1px solid #8FA6B2;
`

const Comments = (props) => {
  useEffect(() => {
    console.log('hi tis is some kewl comments', props.postComments)
  })

  return (
    <CommentsContainer>
      {props.postComments.map((c, index) => {
        return <CommentRow key={index}>
          <AuthorMetaRow>
            <AuthorMeta>
              <h6>{c.authorName}</h6>
              <p>{dayjs(c.createdAt).format('MMM D YYYY')}</p>
            </AuthorMeta>
            <SocialActions>
              <p>❤</p>
              <p>↩</p>
            </SocialActions>
          </AuthorMetaRow>
          <Comment>
            <p>{c.message}</p>
          </Comment>
        </CommentRow>})}
    </CommentsContainer>
  )
}

export default Comments;
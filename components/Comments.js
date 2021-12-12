import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dayjs from 'dayjs';
import { ThemeContext } from "styled-components"
import { useContext } from 'react'


const CommentsTitle = styled.div`
  width: 100%;
  height: 1000px;
  background: #EDF2F7;
`

const CommentSubmissionForm = styled.div`
  form {
    padding: 30px;
    textarea {
      width: 100%;
      height: 300px;
      background: #efefef;
      border-radius: 3px;
      padding-top: 20px;
      padding-left: 20px;
    }
  }
`

const CommentsContainer = styled.div`
  width: 100%;
  height: 1000px;
  background: white;
  border-radius: 3px;
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
  align-items: center;
  justify-content: space-between;
  h6 {
    font-family: Sarabun;
    font-size: 20px;
  }
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
  const themeContext = useContext(ThemeContext)
  useEffect(() => {
    console.log('hi tis is some kewl comments', props.postComments)
  })

  return (
    <CommentsContainer>
      <CommentSubmissionForm>
      <form action="/form/submit" method="POST">
      <textarea class="comment">Type your comment here.</textarea>
      <br></br>
      <input type="submit" name="submit" value="Send"></input>
      </form>
      </CommentSubmissionForm>
      {props.postComments.map((c, index) => {
        return <CommentRow key={index}>
          <AuthorMetaRow>
            <AuthorMeta>
              <h6>{c.authorName}</h6>
              <span>{dayjs(c.createdAt).format('MMM D YYYY')}</span>
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
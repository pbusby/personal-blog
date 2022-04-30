import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dayjs from 'dayjs';
import { ThemeContext } from "styled-components"
import { useContext } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import Modal from './Modal.js'

const CREATE_COMMENT = gql`
  mutation CreateComment($postTitle: String!, $authorName: String!, $message: String!) {
    createComment(postTitle: $postTitle, authorName: $authorName, message: $message) {
      postTitle
      authorName
      message
    }
  }
`

const DELETE_COMMENT = gql`
  mutation DeleteComment($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

const GET_COMMENTS = gql`
query Comments($postTitle: String!) {
  comments(postTitle: $postTitle) {
    id
    authorName
    message
  }
}

`

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
  // color: #8FA6B2;
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
  span:
`

const AuthorMeta = styled.div`
  h6 {
    display: inline;
    padding-right: 10px;
  }
  span {
    font-size: 14px;
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

const Button = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  background: black;
  color: white;
`

const Comments = (props) => {
  const themeContext = useContext(ThemeContext)
  const [showModal, setShowModal] = useState(false);
  const [createComment, { onCompleted }] = useMutation(CREATE_COMMENT, {
    refetchQueries: [
      GET_COMMENTS, {
        variables: { postTitle: props.postMeta.title }
      } // DocumentNode object parsed with gql
      // 'GetComments' // Query name
    ],
  });
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [
      GET_COMMENTS, {
        variables: { postTitle: props.postMeta.title }
      } // DocumentNode object parsed with gql
      // 'GetComments' // Query name
    ],
  });
  const [commentValue, setCommentValue] = useState('');
  const { data, loading, error } = useQuery(GET_COMMENTS, {
    variables: { postTitle: props.postMeta.title }
  });
  console.log('this is data', data)
  console.log('this is props', props)

  const actions = (
    <>
      <Button>Save Comment</Button>
      <Button>Discard Comment</Button>
    </>
  )
  useEffect(() => {
    console.log('Comments log', props.postComments)
  })

  if (loading) return 'Fetching...';
  if (error) return `Fetch error! ${error.message}`;

  // https://www.apollographql.com/docs/react/data/mutations/
  // https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-2-fwpc6ds155
  // https://www.apollographql.com/docs/react/data/mutations/#refetching-queries
  return (
    <CommentsContainer>
      <h1>showModal value: {JSON.stringify(showModal)}</h1>
      <p onClick={() => setShowModal(true)}>Modal Open</p>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          title={'Leave a comment'}
          description={'Sign in and drop a line'}
          actions={actions}
        >
          Hello from the modal!
        </Modal>
        )
      }

      <CommentSubmissionForm>
      <form
        onSubmit={e => {
          debugger
          e.preventDefault();
          createComment({ variables: { message: commentValue, postTitle: props.postMeta.title, authorName: 'Petey Pablo'} });
        }}
      >
      <textarea className="comment" value={commentValue} onChange={(e) => {setCommentValue(e.target.value)}}>Type your comment here.</textarea>
      <br></br>
      <input
        type="submit"
        name="submit"
        value="Send">
      </input>
      </form>
      </CommentSubmissionForm>
      {data.comments.map((c, index) => {
        return <CommentRow key={index}>
          <AuthorMetaRow>
            <AuthorMeta>
              <h6>{c.authorName}</h6>
              <span>{dayjs(c.createdAt).format('MMM D YYYY')}</span>
            </AuthorMeta>
            <SocialActions>
              <p onClick={() => {
                deleteComment({ variables: { id: c.id} });
              }}>❤</p>
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
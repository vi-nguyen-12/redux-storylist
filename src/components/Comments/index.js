import React from 'react'
import {Comment, Header} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import {Wrapper} from './styled';
import {formatDate} from '../../util'

const Comments = ({comments}) => {
    return (
        <Wrapper>
            <Comment.Group>
                <Header dividing>
                    Comments
                </Header>
                {comments.map(comment=>{
                    const {author,created_at,comment_text}=comment;
                    return(
                <Comment>
                    <Comment.Avatar src="https://i.pravatar.cc/300"/>
                    <Comment.Content>
                        <Comment.Author >
                        <Link to={`/author/${author}`}>{author}</Link>
                        </Comment.Author>
                        <Comment.Metadata>
                            <div>{formatDate(created_at)}</div>
                        </Comment.Metadata>
                        <Comment.Text>{comment_text}</Comment.Text>
                        <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
                    )
                })} 
            </Comment.Group>
        </Wrapper>
    )
}

export default Comments

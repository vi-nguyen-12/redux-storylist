import React from 'react'
import {Segment, Dimmer, Loader, Image} from 'semantic-ui-react';

const Loading = () => {
    return (
        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
    )
}

export default Loading

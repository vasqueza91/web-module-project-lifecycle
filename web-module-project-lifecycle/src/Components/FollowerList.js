import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.followers.map(item => {
                        return <Follower info={item} />
                    })
                }
                <h2>Map over Followers</h2>
            </div>
        )
    }
}

export default FollowerList;

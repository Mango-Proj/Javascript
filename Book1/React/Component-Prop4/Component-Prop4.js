function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name} />
    );
}

function Comment(props) {
    return (
        <div className="Comment">
        <div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">{props.author.name}</div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
);
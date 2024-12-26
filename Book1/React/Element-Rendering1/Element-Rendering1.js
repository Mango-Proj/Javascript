const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: '길동',
  lastName: '홍'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

root.render(element);
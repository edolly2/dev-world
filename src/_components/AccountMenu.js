const AccountMenu = (props) => {
  return (
    <div className="account-menu-container" style={props.accountMenuStyle}>
      <div>Image</div>
      <p>Not Signed In</p>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default AccountMenu;

import React from "react";

export default ({ history }) => {
  setTimeout(() => history.push("/admin/dashboard"), 2000);
  return (
    <div>
      <h1>Yiha!</h1>
      <p>Thanks a lot for supporting Stackers.io</p>
    </div>
  );
};

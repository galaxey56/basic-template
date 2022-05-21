import React from "react";
import PostLayout from "./PostLayout";
import SideThings from "./Sidethings";

const Posts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <PostLayout />
        </div>
        <div className="col-md-3">
          <SideThings />
        </div>
      </div>
    </div>
  );
};

export default Posts;

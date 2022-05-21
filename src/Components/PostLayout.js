import React from "react";
import styles from "./PostLayout.module.css";

const PostLayout = () => {
  const arr = [
    {
      type: "Article",
      pic: "https://i.quotev.com/e72wyjmuzkgq.jpg",
      name: "Sarthak Kamra",
      title: "What if famous brands had regular fonts?Meet RegularBrands!",
      description:
        "I've worked in UX for the better part of a decade. From now on, I plan to do stuff that hel...",
    },
    {
      type: "Education",
      pic: "https://i.quotev.com/e72wyjmuzkgq.jpg",
      name: "Sarah West",
      title:
        "Tax Benefits for investment under National Pension Scheme launched by Government",
      description:
        "I've worked in UX for the better part of a decade. From now on, I plan to do stuff that hel...",
    },
    {
      type: "MeetUp",
      pic: "https://i.quotev.com/e72wyjmuzkgq.jpg",
      name: "Ronal Jones",
      title: "What if famous brands had regular fonts?Meet RegularBrands!",
      description:
        "I've worked in UX for the better part of a decade. From now on, I plan to do stuff that hel...",
    },
  ]; //We can get these through props also

  return (
    <div>
      {arr.map((post) => {
        return (
          <div className={`card ${styles.post}`}>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574"
              alt="mountain"
            ></img>
            <h6>{post.type}</h6>
            <div className={styles.title}>{post.title}</div>
            <p>{post.description}</p>
            <div className={styles.user}>
              <img src={post.pic} alt="profile pic"></img>
              <h6>{post.name}</h6>
              <div className={styles.right}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                1.4k views &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostLayout;

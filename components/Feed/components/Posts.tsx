import { collection, orderBy, query } from "firebase/firestore";
import type { NextPage } from "next";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../../../config/firebase";
import Post from "./post";

const Posts: NextPage = () => {
  const postsCollection = collection(database, "posts");

  const filteredQuery = query(postsCollection, orderBy("timestamp", "desc"));

  const [realtimePosts, loading, error] = useCollection(filteredQuery);

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          image={post.data().image}
          message={post.data().message}
          timestamp={post.data().timestamp}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;

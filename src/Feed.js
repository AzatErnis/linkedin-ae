import React, { useEffect, useState } from "react";
import firebase from "firebase";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp")
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = e => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;

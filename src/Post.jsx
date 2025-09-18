export default function Post({ post }) {
  return (
    <div className="card">
      <h5>Title : {post.title}</h5>
      <p>Body : {post.body}</p>
    </div>
  );
}

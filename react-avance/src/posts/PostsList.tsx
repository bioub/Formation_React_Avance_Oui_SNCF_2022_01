import { useEffect } from 'react';
import { Post } from './model';

interface Props {
  posts: Post[];
  loading: boolean;
}

export function PostsList({ posts, loading }: Props) {
  return (
    <div className="postsList">
      {loading && <p>Loading..</p>}
      {posts.map((post) => (
        <p key={post.id}>
          <a href="#">
            {post.title}
          </a>
        </p>
      ))}
    </div>
  );
}

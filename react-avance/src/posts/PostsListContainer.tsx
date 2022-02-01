import { postApi } from "./api";
import { PostsList } from "./PostsList";

export function PostsListContainer() {
  const { data = [], isLoading } = postApi.useGetPostsQuery();

  return (
    <PostsList posts={data} loading={isLoading} />
  );
}

import Post from "./Post";
import { FlatList, RefreshControl, TouchableOpacity } from "react-native";

const PostList = ({ articles, isLoading, fetchPosts, navigation }) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }
      data={articles}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PostScreen", {
              id: item.id,
            });
          }}
        >
          <Post
            title={item.title}
            createdAt={item.createdAt}
            text={item.text}
            imageUrl={item.imageUrl}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default PostList;

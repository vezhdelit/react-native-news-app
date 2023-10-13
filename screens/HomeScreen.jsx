import axios from "axios";
import { Alert, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import Loading from "../components/Loading";

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://65270060917d673fd76d54f1.mockapi.io/articles")
      .then(({ data }) => {
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Can't load articles");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading text="Loading articles.." />;
  }

  return (
    <SafeAreaView>
      <PostList
        articles={articles}
        isLoading={isLoading}
        fetchPosts={fetchPosts}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

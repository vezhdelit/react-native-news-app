import axios from "axios";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  StatusBar,
  RefreshControl,
} from "react-native";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const PostScreen = ({ route }) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = route.params;

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get("https://65270060917d673fd76d54f1.mockapi.io/articles/" + id)
      .then(({ data }) => {
        setArticle(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Can't load articles");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <Loading text="Loading article.." />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
      }
      className="flex p-4 gap-4"
    >
      <StatusBar />
      <Image
        className=" w-fit h-60 rounded-lg"
        source={{
          uri: article.imageUrl,
        }}
      />
      <Text className=" text-xl font-bold text-center">{article.title}</Text>
      <Text className=" text-base text-justify">{article.text}</Text>
    </ScrollView>
  );
};

export default PostScreen;

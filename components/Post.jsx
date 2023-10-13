import { Text, View, Image } from "react-native";

const Post = ({ title, createdAt, imageUrl }) => {
  return (
    <View className="flex flex-row border-b-2 border-gray-300 p-4  items-center gap-4">
      <Image
        className="w-20 h-20 rounded-xl "
        source={{
          uri: imageUrl,
        }}
      />
      <View className="flex-1">
        <Text className=" text-lg font-bold">{title}</Text>
        <Text className="  font-medium text-gray-400">
          {new Date(createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

export default Post;

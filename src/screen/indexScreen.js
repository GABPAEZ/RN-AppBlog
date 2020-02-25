import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button} from "react-native";
import BlogContex from "../context/BlogContext";

export default function IndexScreen() {
  const {data , addBlogPost} = useContext(BlogContex);

  return (
    <View style={styles.container}>
      <Text>The IndexScreen Page</Text>
      <Button title='Add Post' onPress={addBlogPost}/>
      <FlatList
        data={data}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

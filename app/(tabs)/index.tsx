import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.indexContainer}>
      <Text style={styles.myTitle}>My Store</Text>
      <Text style={styles.myContent}>My Store</Text>
      <Link href="/about" style={styles.button}>
        Go to about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e", 
    gap: 20
  },
  myTitle: {
    fontSize: 40,
    color: "#fff"
  },
  myContent: {
    color: "#fff"
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
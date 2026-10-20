import { StyleSheet, Text, View } from "react-native";

export default function Titulo() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Crypt<span style={styles.span}>X</span>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: 327,
    gap: 24,
    alignItems: "flex-start",
  },
  titulo: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "700",
  },
  span: {
    color: "#6552fe",
    fontSize: 64,
    fontWeight: "700",
  },
});

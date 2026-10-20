import { StyleSheet, Text, View } from "react-native";

export default function Descripcion() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Jump start your
        <br />
        crypto portfolio
      </Text>
      <Text style={styles.descripcion}>
        Take your investment portfolio
        <br />
        to next level
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
    fontSize: 32,
    fontWeight: "600",
    letterSpacing: -2,
  },
  descripcion: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});

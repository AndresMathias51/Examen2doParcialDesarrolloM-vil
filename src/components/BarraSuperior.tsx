import { Image, StyleSheet, Text, View } from "react-native";

export default function BarraSuperior() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.hora}>09:41</Text>
      <View style={styles.imagenes}>
        <Image
          style={styles.imagen}
          source={require("@/assets/images/CellularConnection.svg")}
        ></Image>
        <Image
          style={styles.imagen}
          source={require("@/assets/images/Wifi.svg")}
        ></Image>
        <Image
          style={styles.imagen}
          source={require("@/assets/images/Battery.svg")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: 327,
    gap: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  hora: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  imagenes: {
    gap: 7,
    flexDirection: "row",
  },
  imagen: {
    width: 20,
    height: 13,
  },
});

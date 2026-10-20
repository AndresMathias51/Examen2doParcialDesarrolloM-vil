import { Image, StyleSheet, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.contenedor}>
      <Image
        style={styles.imagen}
        source={require("@/assets/images/LogoImagen.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: 327,
    gap: 24,
    alignItems: "flex-start",
    marginLeft: 12,
    overflow: "hidden",
  },
  imagen: {
    width: 366,
    height: 366,
  },
});

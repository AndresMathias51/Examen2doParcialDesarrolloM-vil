import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  titulo: string;
};

export default function Boton({ titulo }: Props) {
  const manejarClick = () => {
    Alert.alert("¡Has hecho clic en el botón!");
  };
  return (
    <TouchableOpacity style={styles.contenedor} onPress={manejarClick}>
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#6552FE",
    width: 327,
    height: 52,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 115,
    paddingRight: 115,
    borderRadius: 16,
    alignItems: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

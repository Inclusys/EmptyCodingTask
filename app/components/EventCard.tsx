import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  icon: string;
};

export function EventCard({ title, icon }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 8,
    padding: 6,
  },
  icon: {
    fontSize: 32,
  },
  title: {
    marginTop: 4,
  },
});
import { View, StyleSheet } from "react-native";
import { EventCard } from "./components/EventCard";

export default function App() {
  const dummyEvents = [
    { title: "Feier", icon: "🎉" },
    { title: "Football", icon: "🏈" },
    { title: "Nachtisch", icon: "🍨" },
    { title: "Halloween", icon: "🎃" },
    { title: "Werkstatt", icon: "🪚" },
  ];

  return (
    <View style={styles.column}>
      {dummyEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          icon={event.icon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    alignSelf: "center",
    flexDirection: "column",
    width: "25%",
    height: "90%",
    borderRadius: 12,
    backgroundColor: "#191F27",
    marginTop: 24,
    padding: 32,
    gap: 12,
    overflow: "hidden",
  },
});

import { View, StyleSheet } from "react-native";
import { EventCard } from "./components/EventCard";

export default function App() {
  const dummyEvents = [
	{ title: "Feier", icon: "🎉", backgroundColor: "#E91E63" },
	{ title: "Football", icon: "🏈", backgroundColor: "#4CAF50" },
	{ title: "Nachtisch", icon: "🍨", backgroundColor: "#03A9F4" },
	{ title: "Halloween", icon: "🎃", backgroundColor: "#FF5722" },
	{ title: "Werkstatt", icon: "🪚", backgroundColor: "#607D8B" },
  ];

  return (
    <View style={styles.column}>
      {dummyEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          icon={event.icon}
		  backgroundColor={event.backgroundColor}
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

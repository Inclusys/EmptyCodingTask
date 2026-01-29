import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  icon: string;
};

export function EventCard({ title, icon }: Props) {
    const [circleSize, setCircleSize] = useState(0);
    const circleSizeFactor = 0.4

    const handleCircleLayout = (event) => {
        setCircleSize(event.nativeEvent.layout.width);
    };

    const getIconSize = () => {
        return circleSize * circleSizeFactor;
    };

    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <View style={styles.iconCircle} onLayout={handleCircleLayout}>
                    <Text style={[styles.icon, { fontSize: getIconSize() }]}>{icon}</Text>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
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
    },
    title: {
        marginTop: 4,
    },
    iconContainer: {
        flex: 2,
        justifyContent: "center", // centers icon vertically in its space
        alignItems: "center", // centers icon horizontally
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconCircle: {
        width: "70%",
        maxHeight: "100%",
        maxWidth: "100%",
        aspectRatio: 1,
        borderRadius: 9999, 
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
});
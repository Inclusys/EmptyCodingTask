import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  icon: string;
};

export function EventCard({ title, icon }: Props) {
    const [circleSize, setCircleSize] = useState(0);
    const circleSizeFactor = 0.4
    const titleSizeFactor = 0.3

    const handleCircleLayout = (event) => {
        setCircleSize(event.nativeEvent.layout.width);
    };

    const getIconSize = () => {
        return circleSize * circleSizeFactor;
    };

    const getTitleSize = () => {
        return Math.min(circleSize * titleSizeFactor, 24);
    };

    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <View style={styles.iconCircle} onLayout={handleCircleLayout}>
                    <Text style={[styles.icon, { fontSize: getIconSize() }]}>{icon}</Text>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, { fontSize: getTitleSize() }]}>{title}</Text>
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
        // placeholder for now
    },
    title: {
        marginTop: 4,
        fontFamily: "System", // San Francisco font on iOS
        color: "white",
        fontWeight: "bold",
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
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  icon: string;
  backgroundColor?: string;
};

function useResponsiveLayout(aspectRatioThreshold = 2.5) {
    const [circleSize, setCircleSize] = useState(0);
    const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });

    const handleCircleLayout = (event) => {
        setCircleSize(event.nativeEvent.layout.width);
    };

    const handleCardLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setCardDimensions({ width, height });
    };

    const isHorizontal = cardDimensions.height === 0
        ? false
        : cardDimensions.width / cardDimensions.height > aspectRatioThreshold;

    return { circleSize, isHorizontal, handleCircleLayout, handleCardLayout };
}

export function EventCard({ title, icon, backgroundColor }: Props) {
    const { circleSize, isHorizontal, handleCircleLayout, handleCardLayout } = useResponsiveLayout(2.5);
    const circleSizeFactor = 0.4;
    const titleSizeFactor = 0.15;

    const getIconSize = () => circleSize * circleSizeFactor;
    const getTitleSize = () => Math.min(circleSize * titleSizeFactor, 24);

    return (
        <View style={[styles.card, { backgroundColor: backgroundColor}]} onLayout={handleCardLayout}>
            <View style={[
                styles.contentContainer,
                isHorizontal && styles.contentContainerHorizontal
            ]}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconCircle} onLayout={handleCircleLayout}>
                        <Text style={[styles.icon, { fontSize: getIconSize() }]}>{icon}</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, { fontSize: getTitleSize() }]}>{title}</Text>
                </View>
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
    contentContainer: {
        flex: 1,
        flexDirection: "column",
    },
    contentContainerHorizontal: {
        flexDirection: "row",
    },
    icon: {
        // placeholder for now
    },
    title: {
        marginTop: 4,
        fontFamily: "System",
        color: "white",
        fontWeight: "bold",
    },
    iconContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
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
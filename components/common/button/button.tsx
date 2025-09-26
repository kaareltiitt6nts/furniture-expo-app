import { COLORS } from "@/global/colors"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
    
type ButtonProps = {
    onPress?: () => void
    title: string,
    type?: "normal" | "white"
}

export const Button = ({onPress, title, type = "normal"} : ButtonProps) => {
    const containerStyle = type == "normal" ? styles.container : [styles.container, styles.whiteContainer]
    const textStyle = type == "normal" ? styles.text : [styles.text, styles.whiteText]

    return (
        <TouchableOpacity hitSlop={20} activeOpacity={0.6} onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8
    },
    text: {
        color: "#FFFFFF",
        fontFamily: "Montserrat",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 700
    },
    whiteContainer: {
        backgroundColor: "#FFFFFF",
    },
    whiteText: {
        color: COLORS.primary
    }
})
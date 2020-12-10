import React from "react";
import {StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
/* CUSTOM BUTTON */
const BreakingBadButton = ({ onPress, title, size, backgroundColor, isLinearGradien = false }) => {
    let buttonResult;
    if(isLinearGradien) {
        buttonResult = (
            <TouchableOpacity 
               onPress={onPress}
               style={[
                size === "sm" && {
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                },
              ]}
            >
                <LinearGradient
                    colors={["#8d6008", "#e3a415"]}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    } else {
        buttonResult = (
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.appButtonContainer,
                    size === "sm" && {
                    paddingHorizontal: 8,
                    paddingVertical: 6,
                    elevation: 6
                    },
                    backgroundColor && { backgroundColor }
                ]}
                >
                <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
    return buttonResult
    
};

const styles = StyleSheet.create({
  appButtonContainer: {
    minWidth: 150,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default BreakingBadButton;
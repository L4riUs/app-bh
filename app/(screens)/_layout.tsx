import React from "react";
import { View } from "tamagui";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Home, ShoppingBasket, ChartPie, User } from "@tamagui/lucide-icons";
import { useTheme as useTamaguiTheme } from "tamagui";
import { useTheme } from "@state/themeContext";

export default function LayoutScreen() {
  const themeTamagui = useTamaguiTheme();
  const { theme } = useTheme();

  const bgColor =
    theme == "dark" ? themeTamagui.black1?.val : themeTamagui.white3?.val;

  const renderIcon = (icon: any, focused: boolean) => {
    if (focused) {
      return (
        <View top={-15} backgroundColor="$white2" borderRadius={50} width={80} height={80} alignItems="center" justifyContent="center">
          <View
            alignItems="center"
            justifyContent="center"
          >
            <LinearGradient
              colors={["#ff6600", "#ffa600"]}
              style={styles.gradientCircle}
            >
              {React.cloneElement(icon, { color: "white", size: 26 })}
            </LinearGradient>
          </View>
        </View>

      );
    } else {
      return <View>{React.cloneElement(icon, { color: "#ccc", size: 26 })}</View>;
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: bgColor,
          height: 70,
          paddingTop: 5,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<Home />, focused),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<ShoppingBasket />, focused),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<ChartPie />, focused),
        }}
      />
      <Tabs.Screen
        name="client"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<User />, focused),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  gradientCircle: {
    width: 65,
    height: 65,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

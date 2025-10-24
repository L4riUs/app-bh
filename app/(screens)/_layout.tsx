import { cloneElement } from "react";
import { View } from "tamagui";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Home, ShoppingBasket, ChartNoAxesColumn, Package, ChefHat } from "@tamagui/lucide-icons";
import { useTheme as useTamaguiTheme } from "tamagui";
import { useTheme } from "@state/themeContext";
import Animated from "react-native-reanimated";
import { useTabAnimation } from "@components/layout/hook/useTabAnimation"
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedView = Animated.createAnimatedComponent(View);

const TAB_CONFIG = [
  {
    name: 'home',
    routes: ['/home', '/(tabs)/home'],
    icon: Home
  },
  {
    name: 'order',
    routes: ['/order', '/(tabs)/order'],
    icon: ShoppingBasket
  },
  {
    name: 'statistics',
    routes: ['/statistics', '/(tabs)/statistics'],
    icon: ChartNoAxesColumn
  },
  {
    name: 'productlist',
    routes: ['/productlist', '/(tabs)/productlist'],
    icon: Package
  },
  {
    name: 'kitchen',
    routes: ['/kitchen', '/(tabs)/kitchen'],
    icon: ChefHat
  }
];

export default function LayoutScreen() {
  const themeTamagui = useTamaguiTheme();
  const { theme } = useTheme();
  const { activeTab, animatedDropStyle, isTabRoute } = useTabAnimation({ TAB_CONFIG });

  const bgColor = theme == "dark" ? themeTamagui.black1?.val : themeTamagui.white3?.val;

  const getIconForTab = (tabIndex: number) => {
    const IconComponent = TAB_CONFIG[tabIndex]?.icon || Home;
    return <IconComponent color="white" size={26} />;
  };

  const renderIcon = (icon: any, focused: boolean) => {
    if (focused) {
      return (
        <View
          top={-15}
          backgroundColor={theme == "dark" ? themeTamagui.black4?.val : themeTamagui.white3?.val}
          borderRadius={50}
          width={80}
          height={80}
          alignItems="center"
          justifyContent="center"
        />
      );
    } else {
      return <View>{cloneElement(icon, { color: "#ccc", size: 26 })}</View>;
    }
  };

  return (
    <>
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
        {TAB_CONFIG.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              tabBarIcon: ({ focused }) => renderIcon(<tab.icon />, focused),
            }}
          />
        ))}

        {/* Tabs adicionales sin ícono en el tabBar */}
        <Tabs.Screen
          name="client"
          options={{
            headerShown: false,
            href: null
          }}
        />
      </Tabs>

      <AnimatedView
        position="absolute"
        bottom={12.5}
        left={0}
        width={80}
        height={80}
        alignItems="center"
        justifyContent="center"
        pointerEvents="none"
        style={animatedDropStyle}
      >
        <AnimatedLinearGradient
          colors={["#ff6600", "#ffa600"]}
          style={styles.gradientCircle}
        >
          {getIconForTab(activeTab)}
        </AnimatedLinearGradient>
      </AnimatedView>
    </>
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
    top: -10
  },
});
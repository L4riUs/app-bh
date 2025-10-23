
import { usePathname } from 'expo-router';
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  useSharedValue,
  withTiming,
  withSequence,
  withSpring,
  Easing,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const useTabAnimation = ({ TAB_CONFIG }: { TAB_CONFIG: any }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  const [isTabRoute, setIsTabRoute] = useState(true);

  const dropX = useSharedValue(0);
  const dropScale = useSharedValue(1);
  const dropOpacity = useSharedValue(1);

  // Crear mapeo de rutas a índices
  const tabRoutes = TAB_CONFIG.reduce((acc, tab, index) => {
    tab.routes.forEach((route: string) => {
      acc[route] = index;
    });
    return acc;
  }, {} as Record<string, number>);

  // Calcular posición del tab
  const getTabPosition = (index: number) => {
    const tabWidth = SCREEN_WIDTH / TAB_CONFIG.length;
    return (tabWidth * index) + (tabWidth / 2) - 40;
  };

  useEffect(() => {
    const currentTab = tabRoutes[pathname];

    if (currentTab !== undefined) {
      // Estamos en una ruta de tab - mostrar gota
      setIsTabRoute(true);
      dropOpacity.value = withTiming(1, { duration: 200 });

      const targetX = getTabPosition(currentTab);

      if (currentTab !== activeTab) {
        // Efecto gota: encoge, viaja y rebota
        dropScale.value = withSequence(
          withTiming(0.35, { duration: 180, easing: Easing.in(Easing.cubic) }),
          withSpring(1, { damping: 7, stiffness: 90, mass: 0.8 })
        );

        dropX.value = withTiming(targetX, {
          duration: 250,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        });
      } else {
        // Primera carga - posicionar sin animación
        dropX.value = targetX;
      }

      setActiveTab(currentTab);
    } else {
      // No estamos en una ruta de tab - ocultar gota
      setIsTabRoute(false);
      dropOpacity.value = withTiming(0, { duration: 200 });
    }
  }, [pathname]);

  const animatedDropStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: dropX.value },
        { scale: dropScale.value },
      ],
      opacity: dropOpacity.value,
    };
  });

  return {
    activeTab,
    animatedDropStyle,
    isTabRoute,
  };
};

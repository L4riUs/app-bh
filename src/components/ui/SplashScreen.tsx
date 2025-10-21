import { SafeAreaView } from "react-native-safe-area-context"
import LottieView from "lottie-react-native"
import burger from "../../../assets/lotties/Burger5.json"
export default function SplashScreen({ onfinnish }: { onfinnish: (isCancelled: boolean) => void }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FF4B00" }}>
            <LottieView
                autoPlay={true}
                source={burger}
                loop={false}
                resizeMode="cover"
                onAnimationFinish={onfinnish}
                style={{
                    flex: 1,
                    width: "100%",
                    marginBottom: 150
                }}
            />
        </SafeAreaView>
    )

}
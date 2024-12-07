import screenHeader from "@/components/ScreenOptions";
import { Stack, useRouter } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
export default function RootLayout() {
  const router = useRouter();
  return <Stack screenOptions={screenHeader(router, "Loader Screen")} />;
}

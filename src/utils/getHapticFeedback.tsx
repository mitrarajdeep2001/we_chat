function getHapticFeedback(pattern: Array<number>) {
  console.log("Vibration triggered!");
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  } else {
    console.log("Vibration API is not supported by this device.");
  }
}

export default getHapticFeedback;
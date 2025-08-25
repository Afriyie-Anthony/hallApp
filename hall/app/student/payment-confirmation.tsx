import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";

const PaymentConfirmationScreen = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a payment processing delay
    const timer = setTimeout(() => {
      // Randomly determine success or failure
      setIsSuccess(Math.random() > 0.5);
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    router.replace("/student/profile"); // Navigate back to student profile
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4 mt-10">
      {isLoading ? (
        <View>
          <Text className="text-2xl font-bold text-gray-700 mb-4">
            Processing Payment...
          </Text>
          {/* You could add a loading spinner here */}
        </View>
      ) : (
        <View className="items-center">
          {isSuccess ? (
            <>
              <Text className="text-4xl font-bold text-green-600 mb-4">
                Payment Successful!
              </Text>
              <Text className="text-lg text-gray-700 text-center mb-8">
                Your payment has been processed successfully.
              </Text>
            </>
          ) : (
            <>
              <Text className="text-4xl font-bold text-red-600 mb-4">
                Payment Failed!
              </Text>
              <Text className="text-lg text-gray-700 text-center mb-8">
                There was an issue processing your payment. Please try again.
              </Text>
            </>
          )}
          <TouchableOpacity
            className="bg-[#900633] px-6 py-3 rounded-lg"
            onPress={handleGoHome}
          >
            <Text className="text-white text-lg font-semibold">Go to Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PaymentConfirmationScreen;

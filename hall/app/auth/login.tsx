import { View, Text, TouchableOpacity, TextInput } from "react-native"; // Added TextInput
import React, { useState } from "react";
// Removed Input and Button imports
import { Link, useRouter } from "expo-router";
import { students } from "../../constants/mockData";

const Login = () => {
  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [identifier, setIdentifier] = useState(""); // For index number or email
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (isStudentLogin) {
      // Student Login (using index number)
      const student = students.find(
        (s) => s.indexNumber === identifier && s.password === password
      );
      if (student) {
        alert("Student Login Successful!");
        router.replace("/(tabs)"); // Navigate to student profile
      } else {
        alert("Invalid Student Credentials");
      }
    } else {
      // Admin Login (mock credentials)
      if (identifier === "admin@example.com" && password === "admin123") {
        alert("Admin Login Successful!");
        router.replace("/admin/dashboard"); // Navigate to admin dashboard
      } else {
        alert("Invalid Admin Credentials");
      }
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-4xl font-bold text-[#900633] mb-8">Login</Text>

      <TouchableOpacity
        onPress={() => setIsStudentLogin(!isStudentLogin)}
        className="mb-4 p-2 rounded-md bg-gray-200"
      >
        <Text className="text-lg text-gray-700">
          {isStudentLogin ? "Switch to Admin Login" : "Switch to Student Login"}
        </Text>
      </TouchableOpacity>

      {/* Replaced Input with TextInput */}
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-md mb-4" // Added basic styling
        placeholder={isStudentLogin ? "Enter your index number" : "Enter admin email"}
        value={identifier}
        onChangeText={setIdentifier}
        keyboardType={isStudentLogin ? "numeric" : "email-address"} // Added keyboardType
        autoCapitalize="none" // Added autoCapitalize
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-md mb-4" // Added basic styling
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* Replaced Button with TouchableOpacity */}
      <TouchableOpacity
        className="w-full bg-[#900633] p-3 rounded-md mt-4 items-center" // Added basic styling
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>
      <Link href="/auth/register" className="mt-4 text-[#900633] text-lg">
        Don&apos;t have an account? Register
      </Link>
    </View>
  );
};

export default Login;
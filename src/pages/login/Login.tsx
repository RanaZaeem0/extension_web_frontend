import type React from "react"
import CustomLoginPage from "../../components/auth/login"

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4 text-red-900">Login to Your Account</h3>
      
        <CustomLoginPage />

      </div>
    </div>
  )
}

export default LoginPage


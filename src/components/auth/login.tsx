// import { Leaf, Mail, Lock, Loader2 } from "lucide-react";
import { BACKEND_URL } from "../../utils/constant/constant";
import { Leaf } from "lucide-react";

function LoginComponent() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const validateForm = () => {
  //   if (!email || !password) {
  //     setError("Please fill in all fields");
  //     return false;
  //   }
  //   if (!/\S+@\S+\.\S+/.test(email)) {
  //     setError("Please enter a valid email address");
  //     return false;
  //   }
  //   if (password.length < 6) {
  //     setError("Password must be at least 6 characters long");
  //     return false;
  //   }
  //   return true;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");

  //   if (!validateForm()) return;

  //   setIsLoading(true);

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     if (email === "user@example.com" && password === "password123") {
  //       console.log("Login successful");
  //     } else {
  //       setError("Invalid email or password");
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     setError("An error occurred. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleGoogleAuth = () => {
    // Implement Google auth logic here
    window.open(`${BACKEND_URL}/auth/google/callback`, "_self");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
           <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Please sign in to your account</p>
          </div>
    {/*
          {error && (
            <div className="p-4 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign in</span>
              )}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div> */}

          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
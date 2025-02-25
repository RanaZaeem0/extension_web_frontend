import { CreditCard, Settings, User, Bell, BarChart3, Layout, Calendar, Mail, Check, Shield } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

function App() {
  // Simulated user data based on the provided structure



  const userPlan = {
    name: "Pro Plan",
    price: "$29",
    period: "month",
    features: ["Unlimited Projects", "API Access", "Team Collaboration", "Advanced Analytics"],
    nextBilling: "March 25, 2024",
    status: "Active"
  };

  const { user} = useSelector((state:RootState)=>state.auth)
  
  return (
  
  <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white h-screen border-r border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-8">
          <Layout className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl">Dashboard</span>
        </div>
        
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <CreditCard className="h-5 w-5" />
            <span>Subscription</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <BarChart3 className="h-5 w-5" />
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Profile Overview</h1>
              <p className="text-gray-600">Manage your account details and subscription</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-start gap-6">
              <img 
                src={user?.photo} 
                alt={user?.name} 
                className="w-24 h-24 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{user?.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {user?.isVerified ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                        <Check className="h-4 w-4" />
                        Verified
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium flex items-center gap-1">
                        <Shield className="h-4 w-4" />
                        Unverified
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Member since</p>
                    <p className="text-sm font-medium text-gray-900">
                    {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}) : 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Last updated</p>
                    <p className="text-sm font-medium text-gray-900">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}) : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Current Plan</h2>
                <p className="text-gray-600">
                  <span className="text-2xl font-bold text-gray-900">{userPlan.price}</span>
                  /{userPlan.period}
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {userPlan.status}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Plan Features</h3>
              <ul className="space-y-3">
                {userPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Next billing date</p>
                    <p className="text-sm font-medium text-gray-900">{userPlan.nextBilling}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
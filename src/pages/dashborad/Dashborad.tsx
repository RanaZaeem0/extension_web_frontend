import { CreditCard, Settings, User, Bell, BarChart3, Layout } from 'lucide-react';

function Dashboard() {
  const userPlan = {
    name: "Pro Plan",
    price: "$29",
    period: "month",
    features: ["Unlimited Projects", "API Access", "Team Collaboration", "Advanced Analytics"],
    nextBilling: "March 25, 2024",
    status: "Active"
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white sticky top-0 h-screen border-r border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-8">
          <Layout className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl">Dashboard</span>
        </div>
        
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
            <CreditCard className="h-5 w-5" />
            <span>Subscription</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <BarChart3 className="h-5 w-5" />
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Bell className="h-5 w-5" />
            <span>Notifications</span>
          </a>
          <a href="/profile/settings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </a>
        </nav>

        {/* <div className="mt-auto pt-8 border-t border-gray-200 fixed bottom-6">
          <div className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </div>
        </div> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Subscription Overview</h1>
              <p className="text-gray-600">Manage your plan and billing details</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <User className="h-5 w-5" />
                <span>John Doe</span>
              </button>
            </div>
          </div>

          {/* Current Plan Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{userPlan.name}</h2>
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
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Next billing date</p>
                  <p className="text-sm font-medium text-gray-900">{userPlan.nextBilling}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Storage Used</h3>
              <p className="text-2xl font-bold text-gray-900">75%</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/4 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">API Calls</h3>
              <p className="text-2xl font-bold text-gray-900">12,543</p>
              <p className="text-sm text-gray-600 mt-1">This month</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Team Members</h3>
              <p className="text-2xl font-bold text-gray-900">8/10</p>
              <p className="text-sm text-gray-600 mt-1">Seats used</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
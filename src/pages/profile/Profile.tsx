import { Settings, User, Mail, Check, Shield } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

function App() {
    // Simulated user data based on the provided structure


    const { user } = useSelector((state: RootState) => state.auth)
    return (
        <div className="min-h-screen bg-green-50">
            {/* Header */}
     

            <main className="max-w-3xl mx-auto px-4 py-8">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                    {/* Cover Photo */}
                    <div className="h-32 bg-gradient-to-r from-green-400 to-green-500"></div>

                    {/* Profile Info */}
                    <div className="px-6 pb-6">
                        <div className="flex flex-col items-center -mt-12">
                            <img
                                src={user?.photo}
                                alt={user?.name}
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                            <div className="mt-4 text-center">
                                <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                                <div className="flex items-center justify-center gap-2 mt-1">
                                    <Mail className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-600">{user?.email}</span>
                                </div>
                                <div className="mt-2">
                                    {user?.isVerified ? (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                            <Check className="h-4 w-4" />
                                            Verified Account
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                                            <Shield className="h-4 w-4" />
                                            Unverified Account
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Account Details */}
                        <div className="mt-8 grid gap-6 border-t border-green-100 pt-6">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">Member since</p>
                                        <p className="text-sm font-medium text-gray-900 mt-1">
                                            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'N/A'}
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">Last updated</p>
                                        <p className="text-sm font-medium text-gray-900 mt-1">
                                            {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="border-t border-green-100 pt-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                        <User className="h-5 w-5" />
                                        Edit Profile
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                                        <Settings className="h-5 w-5" />
                                        Account Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
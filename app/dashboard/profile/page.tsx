// app/dashboard/profile/page.tsx
export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage your account and system preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">
            Notification Settings
          </h3>
          <div className="mt-6 space-y-4">
            {[
              {
                title: 'Email Notifications',
                description: 'Receive email updates about your account activity',
              },
              {
                title: 'Push Notifications',
                description: 'Receive push notifications about important updates',
              },
              {
                title: 'Marketing Communications',
                description: 'Receive marketing and promotional materials',
              },
            ].map((setting, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {setting.title}
                  </h4>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
                <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
          <div className="mt-6 space-y-6">
            {/* Change Password */}
            <div>
              <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Enable
                </button>
              </div>
            </div>

            {/* Session Management */}
            <div className="pt-6">
              <h4 className="text-sm font-medium text-gray-900">Active Sessions</h4>
              <div className="mt-4 divide-y divide-gray-200">
                {[
                  {
                    device: 'MacBook Pro',
                    location: 'New York, USA',
                    lastActive: '5 minutes ago',
                    isCurrent: true,
                  },
                  {
                    device: 'iPhone 12',
                    location: 'Los Angeles, USA',
                    lastActive: '2 hours ago',
                    isCurrent: false,
                  },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between py-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">
                          {session.device}
                        </span>
                        {session.isCurrent && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        {session.location} • {session.lastActive}
                      </div>
                    </div>
                    {!session.isCurrent && (
                      <button className="text-sm font-medium text-red-600 hover:text-red-800">
                        Revoke
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
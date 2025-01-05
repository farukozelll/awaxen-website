// app/dashboard/page.tsx
export default function DashboardPage() {
    return (
      <div>
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Here's an overview of your system's performance.
          </p>
        </div>
  
        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Total Users', value: '2,543', change: '+12.3%' },
            { name: 'Active Projects', value: '45', change: '+5.2%' },
            { name: 'Completed Tasks', value: '1,249', change: '+8.7%' },
            { name: 'Average Response', value: '2.4h', change: '-1.5%' },
          ].map((stat) => (
            <div
              key={stat.name}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <div className="mt-2 flex items-baseline space-x-2">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Recent activity */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4 rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200">
              {[
                { title: 'New user registration', time: '5 minutes ago' },
                { title: 'Project milestone completed', time: '2 hours ago' },
                { title: 'System update successful', time: '4 hours ago' },
                { title: 'Weekly report generated', time: '1 day ago' },
              ].map((activity, i) => (
                <div key={i} className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
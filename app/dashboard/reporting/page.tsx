// app/dashboard/reporting/page.tsx
export default function ReportingPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="mt-2 text-sm text-gray-600">
          Generate and view system reports
        </p>
      </div>

      {/* Report Actions */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex space-x-3">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Generate New Report
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Export All
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <select className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Reports List */}
      <div className="rounded-lg bg-white shadow">
        <div className="divide-y divide-gray-200">
          {[
            {
              name: 'Monthly Performance Report',
              date: '2024-01-05',
              status: 'Completed',
              type: 'Performance',
            },
            {
              name: 'User Activity Summary',
              date: '2024-01-04',
              status: 'Processing',
              type: 'Activity',
            },
            {
              name: 'System Health Check',
              date: '2024-01-03',
              status: 'Completed',
              type: 'System',
            },
          ].map((report, i) => (
            <div key={i} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {report.name}
                  </h3>
                  <div className="mt-1 flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      Generated: {report.date}
                    </span>
                    <span className="text-sm text-gray-500">
                      Type: {report.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    report.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status}
                  </span>
                  <button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Download
                  </button>
                  <button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

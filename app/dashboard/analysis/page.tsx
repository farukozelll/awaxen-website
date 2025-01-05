// app/dashboard/analysis/page.tsx
export default function AnalysisPage() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Analysis</h1>
          <p className="mt-2 text-sm text-gray-600">
            View detailed analytics and performance metrics
          </p>
        </div>
  
        {/* Analysis Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Performance Chart */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Performance Metrics</h3>
            <div className="mt-4 h-80 w-full">
              {/* Add your chart component here */}
              <div className="flex h-full items-center justify-center text-gray-500">
                Chart Component Placeholder
              </div>
            </div>
          </div>
  
          {/* Usage Statistics */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Usage Statistics</h3>
            <div className="mt-4 h-80 w-full">
              {/* Add your chart component here */}
              <div className="flex h-full items-center justify-center text-gray-500">
                Stats Component Placeholder
              </div>
            </div>
          </div>
        </div>
  
        {/* Detailed Metrics */}
        <div className="mt-8 rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Detailed Metrics</h3>
            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Metric
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { metric: 'Conversion Rate', value: '2.3%', change: '+0.3%' },
                    { metric: 'Average Session', value: '2m 45s', change: '+12s' },
                    { metric: 'Bounce Rate', value: '42%', change: '-1.2%' },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        {item.metric}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        {item.value}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <span className={`${
                          item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
"use client"

export function GeographicDistributionMap() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Placeholder for the actual map */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=600')] bg-cover bg-center opacity-30"></div>

      {/* Sample heatmap overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/30 to-yellow-500/20"></div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 bg-gradient-to-r from-red-500 to-orange-500"></div>
          <span className="text-xs">High Density</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-xs">Medium Density</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 bg-gradient-to-r from-yellow-500 to-green-500"></div>
          <span className="text-xs">Low Density</span>
        </div>
      </div>

      {/* Region statistics */}
      <div className="absolute right-4 top-4 w-48 rounded-md bg-background/90 p-2 shadow-md backdrop-blur-sm">
        <h4 className="mb-2 text-xs font-medium">Region Statistics</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>Nairobi County</span>
            <span className="font-medium">78 incidents</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>Mombasa County</span>
            <span className="font-medium">45 incidents</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>Nakuru County</span>
            <span className="font-medium">32 incidents</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>Kisumu County</span>
            <span className="font-medium">29 incidents</span>
          </div>
        </div>
      </div>
    </div>
  )
}


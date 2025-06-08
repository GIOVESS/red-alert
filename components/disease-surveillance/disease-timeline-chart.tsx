"use client"

export function DiseaseTimelineChart() {
  return (
    <div className="h-[200px] w-full">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full items-end gap-2 pb-6">
          {/* Cholera data */}
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[10%] w-full bg-red-200 transition-all group-hover:bg-red-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 1: 12 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[15%] w-full bg-red-200 transition-all group-hover:bg-red-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 5: 18 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[25%] w-full bg-red-200 transition-all group-hover:bg-red-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 10: 30 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[40%] w-full bg-red-200 transition-all group-hover:bg-red-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 15: 48 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[65%] w-full bg-red-200 transition-all group-hover:bg-red-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 20: 78 cases
            </div>
          </div>

          {/* Dengue data */}
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[8%] w-full bg-orange-200 transition-all group-hover:bg-orange-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 1: 10 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[12%] w-full bg-orange-200 transition-all group-hover:bg-orange-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 5: 15 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[20%] w-full bg-orange-200 transition-all group-hover:bg-orange-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 10: 24 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[28%] w-full bg-orange-200 transition-all group-hover:bg-orange-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 15: 34 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[35%] w-full bg-orange-200 transition-all group-hover:bg-orange-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 20: 42 cases
            </div>
          </div>

          {/* Respiratory data */}
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[15%] w-full bg-yellow-200 transition-all group-hover:bg-yellow-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 1: 18 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[22%] w-full bg-yellow-200 transition-all group-hover:bg-yellow-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 5: 26 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[30%] w-full bg-yellow-200 transition-all group-hover:bg-yellow-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 10: 36 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[42%] w-full bg-yellow-200 transition-all group-hover:bg-yellow-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 15: 50 cases
            </div>
          </div>
          <div className="group relative flex h-full w-full flex-col justify-end">
            <div className="relative h-[53%] w-full bg-yellow-200 transition-all group-hover:bg-yellow-300"></div>
            <div className="absolute -top-6 left-0 hidden w-full text-center text-xs text-muted-foreground group-hover:block">
              Day 20: 64 cases
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between px-2 pt-2">
          <div className="text-xs text-muted-foreground">Day 1</div>
          <div className="text-xs text-muted-foreground">Day 5</div>
          <div className="text-xs text-muted-foreground">Day 10</div>
          <div className="text-xs text-muted-foreground">Day 15</div>
          <div className="text-xs text-muted-foreground">Day 20</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-red-200"></div>
          <span className="text-xs text-muted-foreground">Cholera</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-orange-200"></div>
          <span className="text-xs text-muted-foreground">Dengue</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-yellow-200"></div>
          <span className="text-xs text-muted-foreground">Respiratory</span>
        </div>
      </div>
    </div>
  )
}


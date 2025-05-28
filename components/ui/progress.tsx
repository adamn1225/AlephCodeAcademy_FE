import * as React from 'react'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative h-2 w-full overflow-hidden rounded bg-gray-300 ${className}`}
        {...props}
      >
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${value || 0}%` }}
        />
      </div>
    )
  }
)

Progress.displayName = 'Progress'

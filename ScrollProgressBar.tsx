import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-grad-primary bg-[length:200%_200%] animate-gradient-x transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

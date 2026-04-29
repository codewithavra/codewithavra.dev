/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { useTheme } from '../hooks/useTheme'
import { Sun, Moon, Monitor } from 'lucide-react'

/**
 * Types
 */
type Theme = 'light' | 'dark' | 'system'

const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
  { value: 'light',  icon: <Sun size={15} />,     label: 'Light'  },
  { value: 'dark',   icon: <Moon size={15} />,    label: 'Dark'   },
  { value: 'system', icon: <Monitor size={15} />, label: 'System' },
]

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 rounded-full bg-foreground/10 p-1">
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          title={label}
          className={`
            flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm
            transition-all duration-200 cursor-pointer
            ${theme === value
              ? 'bg-background text-foreground shadow-sm'
              : 'text-foreground/50 hover:text-foreground'
            }
          `}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
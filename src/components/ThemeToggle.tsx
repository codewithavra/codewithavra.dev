/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

/**
 * Types
 */
type Theme = 'light' | 'dark' | 'system';

const themeMeta: Record<'light' | 'dark', { icon: React.ReactNode; label: string }> = {
  light: { icon: <Sun size={20}/>, label: 'Light' },
  dark: { icon: <Moon size={20}/>, label: 'Dark' },
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const activeTheme: 'light' | 'dark' = theme === 'dark' ? 'dark' : 'light';
  const nextTheme: Theme = activeTheme === 'dark' ? 'light' : 'dark';
  const { icon, label } = themeMeta[activeTheme];

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      title={`${label} mode (click to switch)`}
      className='bg-foreground/10 text-foreground hover:bg-foreground/20 flex cursor-pointer items-center rounded-md p-2 transition-all duration-200'
      aria-label={`Current theme: ${label}. Click to switch to ${nextTheme}.`}
    >
      {icon}
    </button>
  );
}

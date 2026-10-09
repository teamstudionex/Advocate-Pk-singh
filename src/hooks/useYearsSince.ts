import { useMemo } from 'react';

export function useYearsSince(dateString: string): number {
  return useMemo(() => {
    const enrolDate = new Date(dateString);
    const now = new Date();
    let years = now.getFullYear() - enrolDate.getFullYear();
    const monthDiff = now.getMonth() - enrolDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < enrolDate.getDate())) {
      years--;
    }
    return Math.max(1, years);
  }, [dateString]);
}

import { TIMELINE_CONFIG } from '../data/config.js';

function formatLocalDate(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Calendar-safe date calculator handling leap years and month-end boundary cases
 */
export function calculateLicenceDates(issueDateString) {
  if (!issueDateString) return null;

  const parts = issueDateString.split('-');
  if (parts.length !== 3) return null;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // 0-indexed
  const day = parseInt(parts[2], 10);

  const issueDate = new Date(year, month, day);
  if (isNaN(issueDate.getTime())) return null;

  // 1. Earliest date to apply for permanent DL: exactly 30 days after issue
  const earliestDate = new Date(year, month, day);
  earliestDate.setDate(earliestDate.getDate() + TIMELINE_CONFIG.minDaysBeforePermanentApply);

  // 2. Expiry date: 6 calendar months (with leap-year & month-end overflow protection)
  const expiryDate = new Date(year, month + TIMELINE_CONFIG.learnerLicenceValidityMonths, day);
  // Check if day rolled over into next month (e.g. Aug 31 -> Feb 28 or 29)
  const expectedMonth = (month + TIMELINE_CONFIG.learnerLicenceValidityMonths) % 12;
  if (expiryDate.getMonth() !== expectedMonth) {
    // Set to last day of target month
    expiryDate.setDate(0);
  }

  // Current date for comparison (midnight normalized)
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysUntilEligible = Math.ceil((earliestDate - today) / msPerDay);
  const daysLeftBeforeExpiry = Math.ceil((expiryDate - today) / msPerDay);

  const isExpired = daysLeftBeforeExpiry < 0;
  const isEligibleNow = !isExpired && daysUntilEligible <= 0;

  return {
    issueDateStr: formatLocalDate(issueDate),
    earliestDateStr: formatLocalDate(earliestDate),
    expiryDateStr: formatLocalDate(expiryDate),
    daysUntilEligible: Math.max(0, daysUntilEligible),
    daysLeftBeforeExpiry: Math.max(0, daysLeftBeforeExpiry),
    isEligibleNow,
    isExpired
  };
}

"use client";

import React, { useState, useMemo, useEffect } from 'react';

export default function AgeCalculatorClient() {
  const [dob, setDob] = useState<string>('');
  const [untilDate, setUntilDate] = useState<string>('');

  // Set default dates on mount
  useEffect(() => {
    const today = new Date();
    const defaultDob = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());
    
    setDob(defaultDob.toISOString().split('T')[0]);
    setUntilDate(today.toISOString().split('T')[0]);
  }, []);

  const results = useMemo(() => {
    if (!dob || !untilDate) return null;

    const start = new Date(dob);
    const end = new Date(untilDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return null;
    }

    // Exact years, months, days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Totals
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = (totalDays / 7).toFixed(1);
    const totalHours = totalDays * 24;
    const totalMonths = years * 12 + months;

    // Next birthday countdown
    const currentYear = end.getFullYear();
    let nextBday = new Date(currentYear, start.getMonth(), start.getDate());
    if (nextBday < end) {
      nextBday = new Date(currentYear + 1, start.getMonth(), start.getDate());
    }
    const nextBdayDiff = nextBday.getTime() - end.getTime();
    const nextBdayDays = Math.ceil(nextBdayDiff / (1000 * 60 * 60 * 24));

    // Zodiac Sign
    const zMonth = start.getMonth() + 1;
    const zDay = start.getDate();
    let zodiac = "";
    if ((zMonth === 3 && zDay >= 21) || (zMonth === 4 && zDay <= 19)) zodiac = "Aries";
    else if ((zMonth === 4 && zDay >= 20) || (zMonth === 5 && zDay <= 20)) zodiac = "Taurus";
    else if ((zMonth === 5 && zDay >= 21) || (zMonth === 6 && zDay <= 20)) zodiac = "Gemini";
    else if ((zMonth === 6 && zDay >= 21) || (zMonth === 7 && zDay <= 22)) zodiac = "Cancer";
    else if ((zMonth === 7 && zDay >= 23) || (zMonth === 8 && zDay <= 22)) zodiac = "Leo";
    else if ((zMonth === 8 && zDay >= 23) || (zMonth === 9 && zDay <= 22)) zodiac = "Virgo";
    else if ((zMonth === 9 && zDay >= 23) || (zMonth === 10 && zDay <= 22)) zodiac = "Libra";
    else if ((zMonth === 10 && zDay >= 23) || (zMonth === 11 && zDay <= 21)) zodiac = "Scorpio";
    else if ((zMonth === 11 && zDay >= 22) || (zMonth === 12 && zDay <= 21)) zodiac = "Sagittarius";
    else if ((zMonth === 12 && zDay >= 22) || (zMonth === 1 && zDay <= 19)) zodiac = "Capricorn";
    else if ((zMonth === 1 && zDay >= 20) || (zMonth === 2 && zDay <= 18)) zodiac = "Aquarius";
    else zodiac = "Pisces";

    // Weekday of birth
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const birthDayOfWeek = weekdays[start.getDay()];

    return {
      years,
      months,
      days,
      totalMonths,
      totalWeeks,
      totalDays,
      totalHours,
      nextBdayDays,
      zodiac,
      birthDayOfWeek
    };
  }, [dob, untilDate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface p-6 rounded-2xl border border-border">
      {/* Inputs */}
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full h-12 rounded-xl border border-border bg-surface text-text px-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">Calculate Until</label>
          <input
            type="date"
            value={untilDate}
            onChange={(e) => setUntilDate(e.target.value)}
            className="w-full h-12 rounded-xl border border-border bg-surface text-text px-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col space-y-6 bg-background p-6 rounded-xl border border-border min-h-[300px]">
        {!results ? (
          <div className="flex-1 flex items-center justify-center text-text/50 text-center">
            Please enter a valid Date of Birth.<br/>Ensure it is before the "Calculate Until" date.
          </div>
        ) : (
          <>
            <div className="text-center pb-4 border-b border-border">
              <h3 className="text-sm font-medium text-text/60 uppercase tracking-wider mb-2">Exact Age</h3>
              <div className="text-3xl font-bold text-primary">
                {results.years} <span className="text-lg text-text">years,</span> {results.months} <span className="text-lg text-text">months,</span> {results.days} <span className="text-lg text-text">days</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <div className="text-xs text-text/60 mb-1">Total Months</div>
                <div className="font-semibold text-lg">{results.totalMonths.toLocaleString()}</div>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <div className="text-xs text-text/60 mb-1">Total Weeks</div>
                <div className="font-semibold text-lg">{Number(results.totalWeeks).toLocaleString()}</div>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <div className="text-xs text-text/60 mb-1">Total Days</div>
                <div className="font-semibold text-lg">{results.totalDays.toLocaleString()}</div>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <div className="text-xs text-text/60 mb-1">Total Hours</div>
                <div className="font-semibold text-lg">{results.totalHours.toLocaleString()}</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-text/80">Next Birthday:</span>
                <span className="font-semibold text-primary">{results.nextBdayDays} Days away</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text/80">Born on a:</span>
                <span className="font-semibold">{results.birthDayOfWeek}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text/80">Zodiac Sign:</span>
                <span className="font-semibold">{results.zodiac}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

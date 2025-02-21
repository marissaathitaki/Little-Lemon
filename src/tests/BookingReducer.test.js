import { vi, describe, test, expect } from "vitest";
import { initializeTimes, updateTimes } from "../pages/Booking";
import { fetchAPI } from "../pages/Booking";


vi.mock('./yourAPIFile', () => ({
  fetchAPI: vi.fn(),
}));

describe("Booking Reducer Functions", () => {
  test("initializeTimes should return an array of available times", () => {
    fetchAPI.mockReturnValue(["12:00", "13:00", "14:00"]);

    const times = initializeTimes();
    expect(times).toEqual(["12:00", "13:00", "14:00"]);
  });

  test("updateTimes should return available times for a selected date", () => {
    fetchAPI.mockReturnValue(["15:00", "16:00", "17:00"]);

    const selectedDate = "2024-02-19";
    const times = updateTimes(selectedDate);
    expect(times).toEqual(["15:00", "16:00", "17:00"]);
  });
});
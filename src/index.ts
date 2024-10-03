import GetDailyWordModule from "./GetDailyWordModule";

export function getDailyWord(): string {
  return GetDailyWordModule.getRandomWord();
}

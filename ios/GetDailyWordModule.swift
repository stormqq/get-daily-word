import ExpoModulesCore

public class GetDailyWordModule: Module {
  private let wordList = [
    "ocean", "tiger", "piano", "moon", "whale", "sunset", "forest", "river", "star", "cloud"
  ]

  public func definition() -> ModuleDefinition {
    Name("GetDailyWord")

    Function("getRandomWord") { () -> String in
      return self.getRandomWord()
    }
  }

  private func getRandomWord() -> String {
    return wordList.randomElement() ?? "default"
  }
}

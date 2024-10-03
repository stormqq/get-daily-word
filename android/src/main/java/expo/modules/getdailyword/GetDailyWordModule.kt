package expo.modules.getdailyword

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class GetDailyWordModule : Module() {
  private val wordList = listOf(
    "apple", "brave", "crane", "dream", "eagle", "flame", "grape", "horse", "igloo", "joker"
  )

  override fun definition() = ModuleDefinition {
    Name("GetDailyWord")

    Function("getRandomWord") {
      wordList.random()
    }
  }
}

import { Moves } from "../../models/possible-moves-enums.model"
import { Results } from "../../models/game-results-enums.model"

export function determineWinner(player: Moves, bot: Moves): Results
{
  if (player == bot)
  {
    return Results.Draw;
  }
  else if ((player == Moves.Rock && bot == Moves.Scissors) || (player == Moves.Scissors && bot == Moves.Paper)
            || (player == Moves.Paper && bot == Moves.Rock))
  {
    return Results.PlayerWins;
  }
  else
  {
    return Results.BotWins;
  }
}

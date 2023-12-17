import { Moves } from "../../models/possible-moves-enums.model"

// Реализует ход бота - случайный ответ. Возвращает номер возможного хода
export function generateBotResponse(): Moves
{
  return Math.floor(Math.random() * 3);
}

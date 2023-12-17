import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {PlayerComponent} from "../player/player.component";
import {ViewMoveComponent} from "../view-move/view-move.component";
import {ViewResultComponent} from "../view-result/view-result.component";
import {Moves} from "../../models/possible-moves-enums.model";
import {Results} from "../../models/game-results-enums.model";
import {generateBotResponse} from "../../services/bot-response/bot-response.service";
import {determineWinner} from "../../services/winner-determine/winner-determiner.service";

@Component({
    selector: 'playing-field',
    standalone: true,
    imports: [CommonModule, RouterOutlet, PlayerComponent, ViewMoveComponent, ViewResultComponent],
    templateUrl: './playing-field.component.html',
    styleUrl: './playing-field.component.css'
})
export class PlayingFieldComponent {
    // Используются в шаблоне отображения
    protected readonly Moves = Moves;
    protected readonly Results = Results;

    // View и Value поля нужны, чтобы хранить строки для отображения и реальные значение Enum соответственно
    playerMoveView = "Сделайте выбор кнопками ниже";
    botMoveView = "";
    playerMoveValue : Moves = Moves.DoesNotStarted;
    botMoveValue : Moves = Moves.DoesNotStarted;
    resultView = "";
    resultValue : Results = Results.DoesNotStarted;

    // Отображаются на табло. Игрок с наибольшим количеством побед отображается особым цветом
    countPlayerWins: number = 0;
    countBotWins: number = 0;

    // Обработчик события, генерируемого компонентом игрока при изменении выбранного хода
    onPlayerChooses(move: Moves) : void
    {
        this.playerMoveValue = move;
        if (move == Moves.Rock)
        {
            this.playerMoveView = "Вы выбрали камень"
        }
        else if (move == Moves.Paper)
        {
            this.playerMoveView = "Вы выбрали бумагу"
        }
        else if (move == Moves.Scissors)
        {
            this.playerMoveView = "Вы выбрали ножницы"
        }
        else
        {
            this.playerMoveView = ""
        }
    }

    // Метод обработки хода бота. Вызывается по нажатию на кнопку "Играть"
    onBotChooses() : void
    {
        let move= generateBotResponse();
        this.botMoveValue = move;
        if (move == Moves.Rock)
        {
            this.botMoveView = "камень"
        }
        else if (move == Moves.Paper)
        {
            this.botMoveView = "бумагу"
        }
        else if (move == Moves.Scissors)
        {
            this.botMoveView = "ножницы"
        }
    }

    // Бот делает ход, после чего определяется победитель и обрабатывается результат
    onPlay(): void
    {
        this.onBotChooses();
        this.resultValue = determineWinner(this.playerMoveValue, this.botMoveValue);
        this.onResult(this.resultValue);
    }

    // Обработка результата. Вывод на экран через привязанное поле resultView
    onResult(status: Results): void
    {
        if (status == Results.Draw)
        {
            this.resultView = "Ничья"
        }
        else if (status == Results.PlayerWins)
        {
            this.resultView = "Вы выиграли"
            this.countPlayerWins++;
        }
        else if (status == Results.BotWins)
        {
            this.resultView = "Вы проиграли"
            this.countBotWins++;
        }
        else
        {
            this.resultView = ""
        }
    }

    // Вовзрат в исходное состояние, обнуление табло
    onReset(): void
    {
        this.playerMoveView = "Сделайте выбор кнопками ниже";
        this.botMoveView = "";
        this.playerMoveValue = Moves.DoesNotStarted;
        this.botMoveValue = Moves.DoesNotStarted;
        this.resultView = "";
        this.resultValue = Results.DoesNotStarted;
        this.countPlayerWins = 0;
        this.countBotWins = 0;
    }
}

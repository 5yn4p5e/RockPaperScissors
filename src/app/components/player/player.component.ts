import {Component, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Moves} from "../../models/possible-moves-enums.model";

@Component({
    selector: 'player',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './player.component.html',
    styleUrl: './player.component.css'
})
export class PlayerComponent {
    protected readonly Moves = Moves;
    @Output() onChanged = new EventEmitter<Moves>();

    onMoveChanged(move: Moves): void
    {
        // Генерируется событие, на которое подписан компонент игрового поля
        this.onChanged.emit(move);
    }
}

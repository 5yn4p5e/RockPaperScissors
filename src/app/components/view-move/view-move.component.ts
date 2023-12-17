import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Moves} from "../../models/possible-moves-enums.model";

@Component({
    selector: 'view-move',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './view-move.component.html',
    styleUrl: './view-move.component.css'
})
export class ViewMoveComponent {
    @Input() moveView: string = "";
}

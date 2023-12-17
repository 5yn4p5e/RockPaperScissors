import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

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

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'view-result',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule],
    templateUrl: './view-result.component.html',
    styleUrl: './view-result.component.css'
})
export class ViewResultComponent {
    @Input() result: String = "";
}

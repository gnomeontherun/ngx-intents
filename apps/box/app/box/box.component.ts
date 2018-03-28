import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() left = 50;
  @Input() top = 50;
}

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  imports: [TranslateModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
})
export class ContentComponent {}

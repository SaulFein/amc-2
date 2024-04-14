import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  items = [
    {
      label: 'Inventory',
      items: [
        {
          label: 'Current Inventory',
          routerLink: '/inventory',
        },
        {
          label: 'Sold',
        },
      ],
    },
    { label: 'Car Storage' },
    { label: 'Finance' },
    { label: 'Contact' },
  ];
}

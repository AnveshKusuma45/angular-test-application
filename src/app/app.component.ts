import { Component, ViewEncapsulation } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selected = 'Inbox';
  expanded: boolean = true;

  constructor(private router: Router) {
    const routes: Routes = router.config;
    routes.forEach((route) => {
      console.log(route);
      this.items.push({
        id: (route as any).id,
        text: (route as any).text,
        parentId: (route as any).parentId,
        path: route.path ? route.path : '',
      });
    });
  }

  public items: Array<any> = [
    { text: 'Inbox', icon: 'k-i-inbox', selected: true, path: '' },
    { separator: true },
    { text: 'DataGrid', icon: 'k-i-bell', path: '/datagrid' },
    { text: 'home', icon: 'k-i-calendar', path: '/home' },
  ];

  onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    this.router.navigateByUrl(ev.item.path);
  }
}

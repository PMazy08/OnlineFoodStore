import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-orderowner',
  templateUrl: './orderowner.component.html',
  styleUrls: ['./orderowner.component.scss']
})
export class OrderownerComponent {
  constructor(public dialog: MatDialog) {}

  openOrder() {
    this.dialog.open(StatusComponent);

  }
}

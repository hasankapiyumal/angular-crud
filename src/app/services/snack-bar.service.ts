import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {
  }

  trigger(message: any, action: any) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 5000,
      direction: 'ltr',

    });

  }
}

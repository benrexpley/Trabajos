import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea2';

  public hola(): void {

  }
  public multiDosNumeros(n1:number, n2: number): number{
    return n1 * n2;
  }

  cosa: boolean = false;
  sad: boolean = false;
  crazy: boolean = false;

}


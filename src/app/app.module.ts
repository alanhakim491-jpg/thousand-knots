// app.module.ts
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // ...
    imports: [
    // ...
    MatIconModule,
    HttpClientModule,
    ],
  // ...
})
export class AppModule { }
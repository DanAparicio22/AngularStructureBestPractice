import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { InitCapsPipe } from './pipes/init-caps.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InitCapsPipe],
  providers: [UserService],
  exports: [
    CommonModule,
    FormsModule,
    InitCapsPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScnLoaderComponent } from './scn-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    FormsModule,

    TranslateModule
  ],
  declarations: [ScnLoaderComponent],
  exports: [ScnLoaderComponent]
})
export class ScnLoaderModule {
}

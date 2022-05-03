import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './server.service';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [ServerService],
})
export class SharedModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentViewModule } from 'ngx-document-view';
import { AppComponent } from './app.component';
import { ImageViewerModule } from 'ng2-image-viewer';
import { Page1Component } from './page1/page1.component';
import { PdfmakeModule } from 'ng-pdf-make';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    DocumentViewModule,
    ImageViewerModule,
    
  ],
  providers: [PdfmakeService],
  bootstrap: [Page1Component]
})
export class AppModule { }

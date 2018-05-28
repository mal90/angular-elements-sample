import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SampleElementComponent } from './sample-element/sample-element.component';

@NgModule({
  declarations: [
    SampleElementComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[SampleElementComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const customButton = createCustomElement(SampleElementComponent, { injector });
    customElements.define('sample-element', customButton);
  }

  ngDoBootstrap() {}
  
}

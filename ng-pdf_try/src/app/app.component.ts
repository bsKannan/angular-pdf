import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('content',{static: false}) content : ElementRef
  dounloadPDF(){

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function(element,renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers':specialElementHandlers
    });

    doc.save('test.pdf');

  }
}

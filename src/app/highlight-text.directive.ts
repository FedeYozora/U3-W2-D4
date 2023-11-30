import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnInit {
  @Input() appHighlightText: string | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlightText;
  }
}

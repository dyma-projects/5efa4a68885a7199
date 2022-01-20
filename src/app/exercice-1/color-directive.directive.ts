import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appColorDirective]",
})
export class ColorDirectiveDirective implements OnInit {
  @HostListener("window:keyup", ["$event"]) windowClick($event: KeyboardEvent) {
    if ($event.key === "ArrowUp") this.er.nativeElement.style.color = "red";
    if ($event.key === "ArrowRight")
      this.er.nativeElement.style.color = "green";
    if ($event.key === "ArrowDown")
      this.er.nativeElement.style.color = "yellow";
    if ($event.key === "ArrowLeft") this.er.nativeElement.style.color = "black";
  }

  constructor(private er: ElementRef<HTMLParagraphElement>) {}

  ngOnInit() {}
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ot-tuna-group',
  templateUrl: './tuna-group.component.html',
  styleUrls: ['./tuna-group.component.scss']
})
export class TunaGroupComponent implements OnInit {

  // @ts-ignore
  @ViewChild('fishVideo', {static: true}) tileFishVideoRef: ElementRef<HTMLVideoElement>;

  constructor() {
  }

  onMouseClick(): void {
    this.tileFishVideoRef.nativeElement.play();
  }

  ngOnInit(): void {
    this.tileFishVideoRef.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
  }
}

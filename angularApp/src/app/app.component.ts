import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WalletComponent from './WalletComponent';

@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy {
  title = 'angularApp';

  public rootId = 'rootId';

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy(): void {}

  private render() {
    ReactDOM.render(
      React.createElement(WalletComponent),
      document.getElementById(this.rootId)
    );
  }
}

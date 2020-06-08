import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options = [];
  @Input() labelKey;
  @Input() idkey;
  @Input() model;

  searchControl = new FormControl()

  originalOptions = [];

  constructor() { }

  ngOnInit() {
    this.originalOptions = [...this.options];
    if (this.model != undefined) {
      this.model = this.options.find(f => f[this.idkey] == this.model);
    }
    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    )
      .subscribe(term => this.search(term));
  }
  get label() {
    return this.model ? this.model[this.labelKey] : 'Select...'
  }
  search(value: string) {
    this.options = this.originalOptions.filter(
      option => option[this.labelKey].includes(value)
    );
  }
}

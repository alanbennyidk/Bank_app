import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item: string|undefined;
  // @input() -it is used to hold data from the parent component

  @Output() onCancel=new EventEmitter();
  //output - it is used to hold data from the child component

  @Output() onDelete=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit();
    //onCancel - undefined event
  }

  delete(){
    //alert('delete clicked')
    this.onDelete.emit(this.item)
  }

}

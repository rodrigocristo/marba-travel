import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      dataIda: [ null, Validators.required],
      dataVolta: [ null, Validators.required]
    });
  }

  ngOnInit() {
    

  }

}

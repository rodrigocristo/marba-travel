import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  formulario: FormGroup;
  voos : any[] = [];
  voosImperdiveis : any[] = [];

  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      dataIda: [ null, Validators.required],
      dataVolta: [ null, Validators.required]
    });

    this.voosImperdiveis.push({companhia: "Gol", aeroportoIda: "Vix", saida: "01/07/2019", horarioIda: "9:00", horarioChegada: "23:00", aeroportoVolta: "Berlim" });
    this.voosImperdiveis.push({companhia: "Azul", aeroportoIda: "Vix", saida: "05/07/2019", horarioIda: "8:40", horarioChegada: "23:00", aeroportoVolta: "Amsterdam"  });
    this.voosImperdiveis.push({companhia: "Azul", aeroportoIda: "Vix", saida: "23/07/2019", horarioIda: "9:30", horarioChegada: "23:00", aeroportoVolta: "Paises Baixos"  });

    this.voos.push({companhia: "Gol", aeroportoIda: "Vix", saida: "01/07/2019", horarioIda: "1:43", horarioChegada: "23:00", aeroportoVolta: "Berlim"  });
    this.voos.push({companhia: "Azul", aeroportoIda: "Vix", saida: "06/07/2019", horarioIda: "23:00", horarioChegada: "12:00", aeroportoVolta: "Amsterdam"  });
    this.voos.push({companhia: "Azul", aeroportoIda: "Vix", saida: "06/08/2019", horarioIda: "16:00", horarioChegada: "18:00", aeroportoVolta: "Berlim"  });
    this.voos.push({companhia: "Gol", aeroportoIda: "Vix", saida: "13/07/2019", horarioIda: "19:00", horarioChegada: "11:00", aeroportoVolta: "Berlim"  });
    this.voos.push({companhia: "Gol", aeroportoIda: "Vix", saida: "25/08/2019", horarioIda: "16:00", horarioChegada: "09:00", aeroportoVolta: "Berlim"  });
    this.voos.push({companhia: "Tam", aeroportoIda: "Vix", saida: "06/09/2019", horarioIda: "19:00", horarioChegada: "07:00", aeroportoVolta: "Berlim"  });
    this.voos.push({companhia: "Tam", aeroportoIda: "Vix", saida: "09/12/2019", horarioIda: "20:00", horarioChegada: "23:00", aeroportoVolta: "Berlim"  });

  }

  ngOnInit() {
    

  }

}

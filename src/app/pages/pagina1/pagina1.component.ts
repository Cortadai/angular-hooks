import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, 
              AfterContentInit, AfterContentChecked, 
              AfterViewInit, AfterViewChecked, OnDestroy {

  miNombre:string="David";
  segundos: number=0;
  timerSubscription!: Subscription;

  constructor() { 
    console.log("constructor");
  }
  
  ngOnInit(): void {
    console.log("ngOnInit");
    this.timerSubscription = interval(1000)          // cada 1 segundo
                              .subscribe(i=>{
                                this.segundos=i;
                              })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngOnngAfterContentCheckedInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.timerSubscription.unsubscribe();
    console.log("timer limpiado");
    
  }

  guardar(){
    console.log("ejecutando guardar");
    
  }

}
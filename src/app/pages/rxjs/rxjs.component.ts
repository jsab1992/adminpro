import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;
  constructor() {
    // this.retornaObservable().pipe(retry(1)).subscribe(
    //   (valor) => console.log('Subs: ', valor),
    //   (err) => console.warn('Error: ', err),
    //   () => console.info('Obs terminado')
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);


  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  retornaIntervalo(): Observable<number> {
    return interval(10).pipe(
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false)),
      // take(10)
    );
  }

  retornaObservable(): Observable<number> {
    const obs$ = new Observable<number>((observer) => {
      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('llego al intervalo' + intervalo);
        }
      }, 1000);
    });
    return obs$;
  }
}

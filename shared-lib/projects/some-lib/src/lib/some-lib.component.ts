import {Component, input, InputSignal, InputSignalWithTransform} from '@angular/core';

@Component({
  selector: 'lib-some-lib',
  standalone: true,
  imports: [],
  template: `
    <p>
      some-lib works!
    </p>
  `,
  styles: ``
})
export class SomeLibComponent {
  input1 = input<string>('');
  input2: InputSignal<string> = input<string>('');
  input3 = input<string,string>('',{
    transform: (value) => value + ''
  });
  input4: InputSignalWithTransform<string, string> = input<string,string>('',{
    transform: (value) => value + ''
  });
}

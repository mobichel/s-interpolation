import {
	Compiler,
	Component,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	ModuleWithComponentFactories,
	NgModule,
	ViewChild,
	ViewContainerRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ParseService } from './parse.service';
import { ControlsModule } from './controls/controls.module'

import { FormControl } from '@angular/forms';

@Component({
	selector: 'compiler',
	templateUrl: './compiler.component.html',
	styleUrls: ['./compiler.component.css']
})

export class CompilerComponent {
  template: string = `The meeting took place in {number:2017}, at {list:Saint-Petersburg,Moscow,London:Moscow} and was attended by {string:Trump} in {range:1,11} September`;

	@ViewChild('container', { read: ViewContainerRef })
	container: ViewContainerRef;

	private componentRef: ComponentRef<{}>;
  private formControl: FormControl;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private parseService: ParseService,
		private compiler: Compiler) {
      let templateValidator = (control: FormControl) => {
        if (this.validateTemplate(control.value)) {
          return null;
        };
        return {
          braces: true
        };
      };
      this.formControl = new FormControl('', [templateValidator]);
  }

  cleartTemplate() {
    this.template = '';
    this.container.clear();
  }

	compileTemplate() {
		const text = this.parseService.parse(this.template);
		const metadata = {
			template: `<span style="line-height:60px" class="mat-body-1">${text}</span>`
		};
		const factory = this.createComponentFactorySync(this.compiler, metadata, null);

		if (this.componentRef) {
			this.componentRef.destroy();
			this.componentRef = null;
		}
		this.componentRef = this.container.createComponent(factory);
  }

  validateTemplate(template) {
    return this.parseService.validate(template);
  }

	private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
		const cmpClass = componentClass || class RuntimeComponent { };
		const decoratedCmp = Component(metadata)(cmpClass);

		@NgModule({
			imports: [
				CommonModule,
				ControlsModule
			],
			declarations: [ decoratedCmp ]
		})
		class RuntimeComponentModule { }

		let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
		return module.componentFactories.find(f => f.componentType === decoratedCmp);
	}
}

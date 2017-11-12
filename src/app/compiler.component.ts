import { 
    Compiler, 
    Component,
    ComponentFactory, 
    ComponentFactoryResolver,
    ComponentRef,
    ModuleWithComponentFactories, 
    NgModule, 
    ViewChild, 
    ViewContainerRef,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ParseService } from './parse.service';
import { ControlsModule } from './controls/controls.module'

@Component({
    selector: 'app-compiler',
    templateUrl: './compiler.component.html',
    styleUrls: ['./compiler.component.css']
})

export class CompilerComponent {
    template: string = 'The meeting took place in {number:1959}, at {list:Saint-Petersburg,Moscow,London} and was attended by {string}';

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    private componentRef: ComponentRef<{}>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private parseService: ParseService,
        private compiler: Compiler) {
    }

    compileTemplate() {
        const parseResult = this.parseService.parse(this.template);
        const metadata = {
            template: parseResult.getTemplate()
        };
        const componentClass = class RuntimeComponent{
            constructor() {
                Object.assign(this, parseResult.getOptions());
            }
        };
        const factory = this.createComponentFactorySync(this.compiler, metadata, componentClass);
        
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
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
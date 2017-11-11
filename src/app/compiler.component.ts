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

@Component({
    selector: 'compiler',
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
        private compiler: Compiler) {
    }

    compileTemplate() {
        let metadata = { template: this.template };
        let factory = this.createComponentFactorySync(this.compiler, metadata, null);
        
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
    }

    private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
        const cmpClass = componentClass || class RuntimeComponent { name: string = 'Test' };
        const decoratedCmp = Component(metadata)(cmpClass);

        @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
        class RuntimeComponentModule { }

        let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }
}